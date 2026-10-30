/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  Clock, 
  HelpCircle, 
  Award, 
  FileCheck,
  Trophy
} from 'lucide-react';
import { Header } from './components/Header';
import { RegistrationModal } from './components/RegistrationModal';
import { ExamScreen } from './components/ExamScreen';
import { ResultScreen } from './components/ResultScreen';
import { LeaderboardScreen } from './components/LeaderboardScreen';
import { AnnouncementsView } from './components/AnnouncementsView';
import { 
  StudentProfile, 
  StudentSubmission, 
  TestSettings 
} from './types/exam';
import { 
  DEFAULT_TEST_SETTINGS, 
  fetchTestSettings, 
  evaluateStudentExam, 
  submitExamResults 
} from './services/examService';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'tests' | 'announcements' | 'leaderboard'>('home');
  const [examInProgress, setExamInProgress] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [student, setStudent] = useState<StudentProfile | null>(null);
  const [settings, setSettings] = useState<TestSettings>(DEFAULT_TEST_SETTINGS);
  const [latestSubmission, setLatestSubmission] = useState<StudentSubmission | null>(null);
  const [studentSubmissions, setStudentSubmissions] = useState<StudentSubmission[]>([]);

  // Load student profile & submission history from local cache and sync remote settings
  useEffect(() => {
    try {
      const cached = localStorage.getItem('sthp_student_profile');
      if (cached) {
        setStudent(JSON.parse(cached));
      }
      const localSubs: StudentSubmission[] = JSON.parse(localStorage.getItem('sthp_local_submissions') || '[]');
      setStudentSubmissions(localSubs);
      if (localSubs.length > 0) {
        setLatestSubmission(localSubs[0]);
      }
    } catch (e) {
      console.warn('Cache read notice:', e);
    }

    fetchTestSettings().then(setSettings);
  }, []);

  // Four small statistics
  const userSubs = student 
    ? studentSubmissions.filter(s => s.userId === student.userId || s.studentName.toLowerCase() === student.fullName.toLowerCase())
    : studentSubmissions;

  const testsAttempted = userSubs.length > 0 ? 1 : 0;
  const totalSubmissions = userSubs.length;
  const bestScore = userSubs.length > 0 ? Math.max(...userSubs.map(s => s.score)) : 0;
  const averageScore = userSubs.length > 0 
    ? Number((userSubs.reduce((acc, s) => acc + s.score, 0) / userSubs.length).toFixed(1)) 
    : 0;

  // Handle Exam Launch
  const handleStartExam = () => {
    if (!student) {
      setShowRegisterModal(true);
    } else {
      setExamInProgress(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handle Exam Submission
  const handleSubmitExam = async (answers: Record<number, string>, timeTakenSeconds: number) => {
    if (!student) return;

    // Evaluate
    const evaluation = evaluateStudentExam(answers, timeTakenSeconds, settings.negativeMarking);

    try {
      // Save to Firebase & Local
      const fullSubmission = await submitExamResults({
        userId: student.userId,
        testId: settings.testId,
        studentName: student.fullName,
        rollNumber: student.rollNumber,
        district: student.district,
        score: evaluation.score,
        percentage: evaluation.percentage,
        correctCount: evaluation.correctCount,
        incorrectCount: evaluation.incorrectCount,
        unattemptedCount: evaluation.unattemptedCount,
        englishScore: evaluation.englishScore,
        mathScore: evaluation.mathScore,
        iqScore: evaluation.iqScore,
        timeTakenSeconds,
        accuracyPercentage: evaluation.accuracyPercentage,
        answers,
      });

      setLatestSubmission(fullSubmission);
      setStudentSubmissions(prev => [fullSubmission, ...prev]);
    } catch (err) {
      console.error('Submission handling notice:', err);
      const fallbackSubmission: StudentSubmission = {
        submissionId: `sub_local_${Date.now()}`,
        userId: student.userId,
        testId: settings.testId,
        studentName: student.fullName,
        rollNumber: student.rollNumber,
        district: student.district,
        score: evaluation.score,
        percentage: evaluation.percentage,
        correctCount: evaluation.correctCount,
        incorrectCount: evaluation.incorrectCount,
        unattemptedCount: evaluation.unattemptedCount,
        englishScore: evaluation.englishScore,
        mathScore: evaluation.mathScore,
        iqScore: evaluation.iqScore,
        timeTakenSeconds,
        accuracyPercentage: evaluation.accuracyPercentage,
        answers,
        status: 'completed',
        createdAt: new Date().toISOString(),
      };
      setLatestSubmission(fallbackSubmission);
      setStudentSubmissions(prev => [fallbackSubmission, ...prev]);
    } finally {
      setExamInProgress(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      
      {/* Universal Top Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          setLatestSubmission(null);
          setCurrentTab(tab);
        }}
        student={student}
        onOpenRegister={() => setShowRegisterModal(true)}
        examInProgress={examInProgress}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        
        {/* VIEW 1: ACTIVE 100-MCQ CBT EXAMINATION */}
        {examInProgress && student ? (
          <ExamScreen
            student={student}
            settings={settings}
            onSubmitExam={handleSubmitExam}
          />
        ) : latestSubmission ? (
          /* VIEW 2: CLEAN RESULT VIEW AFTER SUBMISSION */
          <ResultScreen
            submission={latestSubmission}
            onViewLeaderboard={() => {
              setLatestSubmission(null);
              setCurrentTab('leaderboard');
            }}
            onRetakeExam={() => {
              setLatestSubmission(null);
              handleStartExam();
            }}
          />
        ) : currentTab === 'tests' ? (
          /* VIEW 3: TESTS PAGE (ONE MAIN TEST CARD ONLY) */
          <div className="max-w-2xl mx-auto w-full px-4 py-12 flex-1 flex flex-col justify-center">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900">Available Tests</h2>
              <p className="text-xs text-slate-500 mt-0.5">Select and start your official mock examination</p>
            </div>

            {/* STHP MOCK TEST 2027 Main Card */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-xs p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                  Official CBT Mock
                </span>
                <span className="text-xs text-slate-500 font-medium">Part I, II & III</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                STHP MOCK TEST 2027
              </h3>
              
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Sindh Talent Hunt Program entry test computer simulation covering English (40), Mathematics (40), and Intelligence / IQ (20).
              </p>

              {/* Exact 3 Specifications */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80 mb-6 text-center">
                <div>
                  <span className="text-[11px] text-slate-500 block">Total Questions</span>
                  <strong className="text-base font-bold text-slate-800">100</strong>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">Total Marks</span>
                  <strong className="text-base font-bold text-slate-800">100</strong>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">Total Duration</span>
                  <strong className="text-base font-bold text-blue-600">80 Minutes</strong>
                </div>
              </div>

              <button
                onClick={handleStartExam}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold shadow-xs flex items-center justify-center space-x-2 transition-colors"
              >
                <span>Start Test</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : currentTab === 'announcements' ? (
          /* VIEW 4: ANNOUNCEMENTS PAGE */
          <AnnouncementsView onEnterTests={() => setCurrentTab('tests')} />
        ) : currentTab === 'leaderboard' ? (
          /* VIEW 5: LEADERBOARD PAGE */
          <LeaderboardScreen
            currentStudent={student}
            onTakeExamClick={handleStartExam}
          />
        ) : (
          /* VIEW 6: SIMPLE STUDENT HOME PAGE */
          <div className="max-w-3xl mx-auto w-full px-4 py-12 flex-1 flex flex-col justify-center">
            
            {/* Header Greeting */}
            <div className="mb-8">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">
                Welcome back
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Hello, {student?.fullName || 'Student'}
              </h1>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Welcome to your Sukkur IBA STHP preparation portal. Practice with authentic entry-test questions and check your readiness.
              </p>
            </div>

            {/* Exactly Four Small Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              
              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
                <span className="text-[11px] font-medium text-slate-500 block">Tests Attempted</span>
                <div className="text-xl font-bold text-slate-900 mt-1">{testsAttempted}</div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
                <span className="text-[11px] font-medium text-slate-500 block">Total Submissions</span>
                <div className="text-xl font-bold text-slate-900 mt-1">{totalSubmissions}</div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
                <span className="text-[11px] font-medium text-slate-500 block">Best Score</span>
                <div className="text-xl font-bold text-blue-600 mt-1">
                  {totalSubmissions > 0 ? `${bestScore}/100` : '--'}
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
                <span className="text-[11px] font-medium text-slate-500 block">Average Score</span>
                <div className="text-xl font-bold text-emerald-600 mt-1">
                  {totalSubmissions > 0 ? `${averageScore}` : '--'}
                </div>
              </div>

            </div>

            {/* One Clear Button: "Enter Tests" */}
            <div>
              <button
                onClick={() => setCurrentTab('tests')}
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold shadow-xs flex items-center justify-center space-x-2 transition-colors"
              >
                <span>Enter Tests</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

      </main>

      {/* Simple Student Registration Modal */}
      <RegistrationModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onSuccess={(profile) => {
          setStudent(profile);
          setExamInProgress(true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        existingProfile={student}
      />

      {/* Minimal Footer */}
      {!examInProgress && (
        <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
          <p>STHP 2027 Student Portal • Sukkur IBA University Entry Test Mock</p>
        </footer>
      )}

    </div>
  );
}
