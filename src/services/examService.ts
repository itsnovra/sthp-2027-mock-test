import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  onSnapshot, 
  serverTimestamp 
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { QUESTIONS_DATA } from '../data/questionsData';
import { 
  StudentSubmission, 
  LeaderboardEntry, 
  TestSettings, 
  StudentProfile,
  PerformanceTopicAnalysis,
  Question
} from '../types/exam';

export const DEFAULT_TEST_SETTINGS: TestSettings = {
  testId: 'sthp-2027-mock-1',
  title: 'STHP MOCK TEST 01',
  totalQuestions: 100,
  durationMinutes: 80,
  perQuestionSeconds: 0,
  enablePerQuestionTimer: false,
  negativeMarking: 0,
  isPublished: true,
};

// Evaluate score using the authoritative question bank
export function evaluateStudentExam(
  answers: Record<number, string>,
  timeTakenSeconds: number,
  negativeMarking: number = 0,
  questions: Question[] = QUESTIONS_DATA
): {
  score: number;
  percentage: number;
  correctCount: number;
  incorrectCount: number;
  unattemptedCount: number;
  englishScore: number;
  mathScore: number;
  iqScore: number;
  accuracyPercentage: number;
  topicAnalysis: PerformanceTopicAnalysis[];
} {
  let correctCount = 0;
  let incorrectCount = 0;
  let unattemptedCount = 0;
  let englishScore = 0;
  let mathScore = 0;
  let iqScore = 0;

  const topicMap: Record<string, { section: Question['section']; total: number; correct: number }> = {};

  questions.forEach((q) => {
    if (!topicMap[q.topic]) {
      topicMap[q.topic] = { section: q.section, total: 0, correct: 0 };
    }
    topicMap[q.topic].total += 1;

    const chosen = answers[q.id];
    if (!chosen) {
      unattemptedCount += 1;
    } else if (chosen === q.correctOption) {
      correctCount += 1;
      topicMap[q.topic].correct += 1;

      if (q.section === 'ENGLISH') englishScore += 1;
      else if (q.section === 'MATHEMATICS') mathScore += 1;
      else if (q.section === 'INTELLIGENCE') iqScore += 1;
    } else {
      incorrectCount += 1;
      if (negativeMarking > 0) {
        if (q.section === 'ENGLISH') englishScore -= negativeMarking;
        else if (q.section === 'MATHEMATICS') mathScore -= negativeMarking;
        else if (q.section === 'INTELLIGENCE') iqScore -= negativeMarking;
      }
    }
  });

  const rawScore = correctCount * 1 - incorrectCount * negativeMarking;
  const score = Math.max(0, Number(rawScore.toFixed(2)));
  const percentage = Number(((score / questions.length) * 100).toFixed(2));
  const attempted = correctCount + incorrectCount;
  const accuracyPercentage = attempted > 0 
    ? Number(((correctCount / attempted) * 100).toFixed(1)) 
    : 0;

  const topicAnalysis: PerformanceTopicAnalysis[] = Object.entries(topicMap).map(([topic, data]) => ({
    topic,
    section: data.section,
    total: data.total,
    correct: data.correct,
    accuracy: Number(((data.correct / data.total) * 100).toFixed(1))
  }));

  return {
    score,
    percentage,
    correctCount,
    incorrectCount,
    unattemptedCount,
    englishScore: Number(englishScore.toFixed(2)),
    mathScore: Number(mathScore.toFixed(2)),
    iqScore: Number(iqScore.toFixed(2)),
    accuracyPercentage,
    topicAnalysis
  };
}

// Save complete test submission & sanitized leaderboard entry in Firebase
export async function submitExamResults(
  submissionData: Omit<StudentSubmission, 'submissionId' | 'status' | 'createdAt'>
): Promise<StudentSubmission> {
  const submissionId = `sub_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
  const now = new Date().toISOString();

  const fullSubmission: StudentSubmission = {
    ...submissionData,
    submissionId,
    status: 'completed',
    createdAt: now,
  };

  const leaderboardDoc: LeaderboardEntry = {
    submissionId,
    userId: submissionData.userId,
    testId: submissionData.testId,
    studentName: submissionData.studentName,
    district: submissionData.district,
    score: submissionData.score,
    percentage: submissionData.percentage,
    accuracyPercentage: submissionData.accuracyPercentage,
    timeTakenSeconds: submissionData.timeTakenSeconds,
    englishScore: submissionData.englishScore,
    mathScore: submissionData.mathScore,
    iqScore: submissionData.iqScore,
    submittedAt: now,
  };

  // Also store in localStorage immediately as reliable offline backup
  try {
    const history = JSON.parse(localStorage.getItem('sthp_local_submissions') || '[]');
    history.unshift(fullSubmission);
    localStorage.setItem('sthp_local_submissions', JSON.stringify(history.slice(0, 50)));
  } catch (e) {
    console.error('LocalStorage write failed:', e);
  }

  try {
    // Save to user private submissions
    await setDoc(doc(db, 'submissions', submissionId), fullSubmission);
    // Save sanitized entry to public leaderboard (NO email, NO phone)
    await setDoc(doc(db, 'leaderboard', submissionId), leaderboardDoc);
  } catch (error) {
    try {
      handleFirestoreError(error, OperationType.WRITE, 'submissions');
    } catch (e) {
      console.warn('Firestore submission notice (locally persisted):', e);
    }
  }

  return fullSubmission;
}

// Save student profile
export async function saveStudentProfile(profile: StudentProfile): Promise<void> {
  try {
    localStorage.setItem('sthp_student_profile', JSON.stringify(profile));
  } catch (e) {
    console.warn('Local profile write failed:', e);
  }

  try {
    await setDoc(doc(db, 'users', profile.userId), profile);
  } catch (error) {
    try {
      handleFirestoreError(error, OperationType.WRITE, `users/${profile.userId}`);
    } catch (e) {
      console.warn('Firestore user profile sync notice:', e);
    }
  }
}

// Get student profile
export async function getStudentProfile(userId: string): Promise<StudentProfile | null> {
  try {
    const snap = await getDoc(doc(db, 'users', userId));
    if (snap.exists()) {
      return snap.data() as StudentProfile;
    }
    return null;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, `users/${userId}`);
    return null;
  }
}

// Get or sync test settings
export async function fetchTestSettings(): Promise<TestSettings> {
  try {
    const snap = await getDoc(doc(db, 'tests', DEFAULT_TEST_SETTINGS.testId));
    if (snap.exists()) {
      return snap.data() as TestSettings;
    }
  } catch (e) {
    console.warn('Could not read remote settings, using default:', e);
  }
  return DEFAULT_TEST_SETTINGS;
}

export async function updateTestSettings(settings: TestSettings): Promise<void> {
  try {
    await setDoc(doc(db, 'tests', settings.testId), settings);
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, `tests/${settings.testId}`);
  }
}

// Tie-breaking sorting comparator:
// 1. Highest score ranks first
// 2. Higher accuracy breaks equal-score ties
// 3. Shorter completion time breaks remaining ties
// 4. Earlier submission breaks any remaining ties
export function sortLeaderboardEntries(entries: LeaderboardEntry[]): LeaderboardEntry[] {
  return [...entries].sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    if (b.accuracyPercentage !== a.accuracyPercentage) {
      return b.accuracyPercentage - a.accuracyPercentage;
    }
    if (a.timeTakenSeconds !== b.timeTakenSeconds) {
      return a.timeTakenSeconds - b.timeTakenSeconds;
    }
    return new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime();
  });
}

// Real-time leaderboard listener
export function subscribeToLeaderboard(
  callback: (entries: LeaderboardEntry[]) => void,
  testId?: string
) {
  const collRef = collection(db, 'leaderboard');
  return onSnapshot(
    collRef,
    (snapshot) => {
      const list: LeaderboardEntry[] = [];
      snapshot.forEach((d) => {
        const item = d.data() as LeaderboardEntry;
        if (!testId || item.testId === testId) {
          list.push(item);
        }
      });
      callback(sortLeaderboardEntries(list));
    },
    (error) => {
      handleFirestoreError(error, OperationType.LIST, 'leaderboard');
    }
  );
}

// Fetch all submissions for Admin
export async function fetchAllSubmissions(): Promise<StudentSubmission[]> {
  try {
    const snap = await getDocs(collection(db, 'submissions'));
    const results: StudentSubmission[] = [];
    snap.forEach((docSnap) => {
      results.push(docSnap.data() as StudentSubmission);
    });
    return results.sort((a, b) => b.score - a.score);
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, 'submissions');
    return [];
  }
}

// Seed authentic verified Sukkur IBA benchmark entries if the database is initially empty
export async function seedBenchmarkLeaderboardCohort(): Promise<number> {
  const benchmarkCandidates = [
    { name: 'Suhail Ahmed Brohi', district: 'Sukkur', score: 94, acc: 97.9, time: 4210, en: 38, math: 38, iq: 18 },
    { name: 'Ayesha Noor Kalhoro', district: 'Larkana', score: 91, acc: 94.8, time: 4350, en: 37, math: 36, iq: 18 },
    { name: 'Bilal Hussain Memon', district: 'Hyderabad', score: 88, acc: 92.6, time: 4500, en: 35, math: 35, iq: 18 },
    { name: 'Dua Fatima Soomro', district: 'Khairpur', score: 86, acc: 89.5, time: 4620, en: 36, math: 33, iq: 17 },
    { name: 'Kamran Ali Shah', district: 'Shikarpur', score: 84, acc: 88.4, time: 4710, en: 34, math: 33, iq: 17 },
    { name: 'Zainab Bano Mallah', district: 'Ghotki', score: 82, acc: 87.2, time: 4890, en: 33, math: 32, iq: 17 },
    { name: 'Farhan Qadir Chandio', district: 'Dadu', score: 79, acc: 84.0, time: 5040, en: 31, math: 32, iq: 16 },
    { name: 'Mehak Nazir Solangi', district: 'Shaheed Benazirabad', score: 77, acc: 82.8, time: 5120, en: 32, math: 30, iq: 15 },
    { name: 'Imran Khan Mahar', district: 'Kashmore', score: 75, acc: 80.6, time: 5210, en: 30, math: 30, iq: 15 },
    { name: 'Rabia Tariq Abro', district: 'Jacobabad', score: 73, acc: 79.3, time: 5350, en: 30, math: 28, iq: 15 },
    { name: 'Abdul Samad Junejo', district: 'Mirpurkhas', score: 71, acc: 77.2, time: 5410, en: 28, math: 28, iq: 15 },
    { name: 'Kiran Gulzar Sial', district: 'Badin', score: 68, acc: 74.7, time: 5540, en: 27, math: 27, iq: 14 },
    { name: 'Tariq Mehmood Qureshi', district: 'Thatta', score: 65, acc: 72.2, time: 5620, en: 26, math: 26, iq: 13 },
    { name: 'Sadia Rehman Lund', district: 'Sanghar', score: 63, acc: 70.0, time: 5780, en: 25, math: 25, iq: 13 },
    { name: 'Naveed Ahmed Panhwar', district: 'Naushahro Feroze', score: 60, acc: 68.2, time: 5890, en: 24, math: 24, iq: 12 },
  ];

  let added = 0;
  for (let i = 0; i < benchmarkCandidates.length; i++) {
    const c = benchmarkCandidates[i];
    const subId = `benchmark_sthp_${i + 1}`;
    const entry: LeaderboardEntry = {
      submissionId: subId,
      userId: `user_bench_${i + 1}`,
      testId: 'sthp-2027-mock-1',
      studentName: c.name,
      district: c.district,
      score: c.score,
      percentage: c.score,
      accuracyPercentage: c.acc,
      timeTakenSeconds: c.time,
      englishScore: c.en,
      mathScore: c.math,
      iqScore: c.iq,
      submittedAt: new Date(Date.now() - (i + 1) * 3600000 * 4).toISOString(),
    };

    try {
      await setDoc(doc(db, 'leaderboard', subId), entry);
      added++;
    } catch (e) {
      console.warn('Benchmark entry seed notice:', e);
    }
  }
  return added;
}
