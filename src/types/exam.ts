export type SectionKey = 'ENGLISH' | 'MATHEMATICS' | 'INTELLIGENCE';

export interface Question {
  id: number;
  section: SectionKey;
  sectionNumber: 1 | 2 | 3;
  topic: string;
  passage?: string; // For Reading Comprehension
  passageTitle?: string;
  statement: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctOption: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export interface ClientQuestion {
  id: number;
  section: SectionKey;
  sectionNumber: 1 | 2 | 3;
  topic: string;
  passage?: string;
  passageTitle?: string;
  statement: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
}

export type QuestionStatus = 'not_visited' | 'current' | 'answered' | 'marked_for_review';

export interface TestSettings {
  testId: string;
  title: string;
  totalQuestions: number;
  durationMinutes: number;
  perQuestionSeconds: number;
  enablePerQuestionTimer: boolean;
  negativeMarking: number; // e.g. 0, 0.25
  isPublished: boolean;
}

export interface StudentProfile {
  userId: string;
  fullName: string;
  email: string;
  rollNumber: string;
  district: string;
  collegeOrSchool?: string;
  createdAt: string;
}

export interface StudentSubmission {
  submissionId: string;
  userId: string;
  testId: string;
  studentName: string;
  rollNumber: string;
  district: string;
  score: number;
  percentage: number;
  correctCount: number;
  incorrectCount: number;
  unattemptedCount: number;
  englishScore: number;
  mathScore: number;
  iqScore: number;
  timeTakenSeconds: number;
  accuracyPercentage: number;
  answers: Record<number, string>; // questionId -> chosenOption
  status: 'completed';
  createdAt: string;
}

export interface LeaderboardEntry {
  submissionId: string;
  userId: string;
  testId: string;
  studentName: string;
  district: string;
  score: number;
  percentage: number;
  accuracyPercentage: number;
  timeTakenSeconds: number;
  englishScore: number;
  mathScore: number;
  iqScore: number;
  submittedAt: string;
}

export interface PerformanceTopicAnalysis {
  topic: string;
  section: SectionKey;
  total: number;
  correct: number;
  accuracy: number;
}
