/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Trophy, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ArrowRight, 
  GraduationCap, 
  Calculator, 
  BrainCircuit, 
  Award,
  Users,
  Compass,
  FileCheck
} from 'lucide-react';
import { Header } from './components/Header';
import { RegistrationModal } from './components/RegistrationModal';
import { ExamScreen } from './components/ExamScreen';
import { ResultScreen } from './components/ResultScreen';
import { LeaderboardScreen } from './components/LeaderboardScreen';
import { AdminDashboard } from './components/AdminDashboard';
import { 
  StudentProfile, 
  StudentSubmission, 
  TestSettings 
} from './types/exam';
import { 
  DEFAULT_TEST_SETTINGS, 
  fetchTestSettings, 
  evaluateStudentExam, 
  submitExamResults,
  seedBenchmarkLeaderboardCohort 
} from './services/examService';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'exam' | 'leaderboard' | 'admin'>('exam');
  const [examInProgress, setExamInProgress] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [student, setStudent] = useState<StudentProfile | null>(null);
  const [settings, setSettings] = useState<TestSettings>(DEFAULT_TEST_SETTINGS);
  const [latestSubmission, setLatestSubmission] = useState<StudentSubmission | null>(null);
  const [showInstructions, setShowInstructions] = useState(false);

  // Initialize profile from local cache and sync remote settings
  useEffect(() => {
    try {
      const cached = localStorage.getItem('sthp_student_profile');
      if (cached) {
        setStudent(JSON.parse(cached));
      }
      const localSubs = JSON.parse(localStorage.getItem('sthp_local_submissions') || '[]');
      if (localSubs.length > 0) {
        setLatestSubmission(localSubs[0]);
      }
    } catch (e) {
      console.warn('Cache read notice:', e);
    }

    // Fetch remote settings
    fetchTestSettings().then(setSettings);
  }, []);

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
    } catch (err) {
      console.error('Submission handling notice:', err);
      // Fallback local submission display so student is never blocked
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
    } finally {
      setExamInProgress(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('sthp_student_profile');
    setStudent(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* Universal Top Header */}
      <Header
        currentTab={latestSubmission && !examInProgress && currentTab === 'exam' ? 'result' : currentTab}
        setCurrentTab={setCurrentTab}
        student={student}
        onLogout={handleLogout}
        onOpenRegister={() => setShowRegisterModal(true)}
        examInProgress={examInProgress}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        
        {/* VIEW 1: ACTIVE COMPUTER-BASED EXAMINATION */}
        {examInProgress && student ? (
          <ExamScreen
            student={student}
            settings={settings}
            onSubmitExam={handleSubmitExam}
          />
        ) : currentTab === 'leaderboard' ? (
          /* VIEW 2: GLOBAL MERIT LEADERBOARD */
          <LeaderboardScreen
            currentStudent={student}
            onTakeExamClick={handleStartExam}
          />
        ) : currentTab === 'admin' ? (
          /* VIEW 3: CONTROLLER OF EXAMINATIONS ADMIN DASHBOARD */
          <AdminDashboard
            settings={settings}
            onUpdateSettings={setSettings}
            currentUserEmail={student?.email || 'aliza786hulio@gmail.com'}
          />
        ) : latestSubmission ? (
          /* VIEW 4: STUDENT RESULT & DETAILED SOLUTION REVIEW */
          <ResultScreen
            submission={latestSubmission}
            onViewLeaderboard={() => setCurrentTab('leaderboard')}
            onRetakeExam={() => {
              setLatestSubmission(null);
              handleStartExam();
            }}
          />
        ) : (
          /* VIEW 5: STHP 2027 ENTRANCE PORTAL LANDING HERO */
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex-1 flex flex-col justify-center animate-in fade-in duration-300">
            
            {/* Main Welcome Hero */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Sukkur IBA University • Sindh Talent Hunt Program</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight leading-tight">
                STHP 2027 Mock Test
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                Experience the authentic Sukkur IBA entrance examination test pattern with synchronized 60-second question timers, strict sectional ordering, automated scoring, and real-time provincial ranking.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={handleStartExam}
                  className="px-8 py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:via-indigo-500 hover:to-blue-600 text-white font-bold text-sm rounded-2xl shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 flex items-center space-x-2.5"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>{student ? 'Begin 100-Question Exam' : 'Register & Start Examination'}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                <button
                  onClick={() => setCurrentTab('leaderboard')}
                  className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm rounded-2xl shadow transition-all flex items-center space-x-2"
                >
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span>View Live Leaderboard</span>
                </button>
              </div>

              {student && (
                <div className="mt-4 text-xs text-slate-400">
                  Ready as <strong className="text-white">{student.fullName}</strong> (Roll: <span className="font-mono text-amber-400">{student.rollNumber}</span> • {student.district})
                </div>
              )}
            </div>

            {/* Test Pattern & Structure Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              
              {/* English Card */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl hover:border-blue-500/40 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-4 border border-blue-500/30">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-400">Section 1</div>
                <h3 className="text-lg font-bold font-serif text-white mt-1">PART I – ENGLISH</h3>
                <div className="text-2xl font-black font-serif text-white mt-2">
                  40 <span className="text-xs font-sans text-slate-400 font-normal">MCQs • 40 Marks</span>
                </div>
                <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    <span>2 Reading Passages (10 Questions)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    <span>Synonyms & Antonyms (10 Questions)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    <span>Prepositions & Error Detection (10)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    <span>Subject-Verb & Conditionals (10)</span>
                  </li>
                </ul>
              </div>

              {/* Mathematics Card */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl hover:border-emerald-500/40 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/30">
                  <Calculator className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">Section 2</div>
                <h3 className="text-lg font-bold font-serif text-white mt-1">PART II – MATHEMATICS</h3>
                <div className="text-2xl font-black font-serif text-white mt-2">
                  40 <span className="text-xs font-sans text-slate-400 font-normal">MCQs • 40 Marks</span>
                </div>
                <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Sets, HCF/LCM, Surds & Real Numbers</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Algebraic Expressions & Quadratics</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Percentages, Profit/Loss, Ratios, Ages</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Geometry, Work & Time, Coordinates</span>
                  </li>
                </ul>
              </div>

              {/* Intelligence / IQ Card */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl hover:border-purple-500/40 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-purple-600/20 text-purple-400 flex items-center justify-center mb-4 border border-purple-500/30">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-purple-400">Section 3</div>
                <h3 className="text-lg font-bold font-serif text-white mt-1">PART III – IQ / REASONING</h3>
                <div className="text-2xl font-black font-serif text-white mt-2">
                  20 <span className="text-xs font-sans text-slate-400 font-normal">MCQs • 20 Marks</span>
                </div>
                <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    <span>Number & Letter Series Patterns</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    <span>Analogies & Odd One Out</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    <span>Blood Relations & Direction Sense</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    <span>Coding-Decoding & Logical Matrix</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Official CBT Rules & Key Features */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>Computer-Based Examination Environment Guidelines</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-300">
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <strong className="text-white block font-semibold mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    60-Second Question Timer
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    Each question counts down for 60 seconds. When time expires, answers are saved and the next question loads automatically.
                  </p>
                </div>

                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <strong className="text-white block font-semibold mb-1 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                    Mandatory Section Sequence
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    Strict Sukkur IBA order: English (1-40) followed by Mathematics (41-80) and Intelligence (81-100).
                  </p>
                </div>

                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <strong className="text-white block font-semibold mb-1 flex items-center gap-1.5">
                    <FileCheck className="w-3.5 h-3.5 text-amber-400" />
                    Automated Marking
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    Instant calculation of score out of 100, sectional percentages, and question-by-question academic solutions.
                  </p>
                </div>

                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <strong className="text-white block font-semibold mb-1 flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-purple-400" />
                    Live Cloud Leaderboard
                  </strong>
                  <p className="text-slate-400 leading-relaxed">
                    Automatic inclusion in the global ranking with Gold, Silver, and Bronze podium for the top performers.
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* Candidate Registration Modal */}
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

      {/* Footer */}
      {!examInProgress && (
        <footer className="bg-slate-950 border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>
              STHP 2027 Mock Examination Portal • Sukkur IBA University Entry Test Academic Simulation
            </p>
            <p className="text-[11px] text-slate-400">
              Designed for Sindh Talent Hunt Program Candidates Across All Districts
            </p>
          </div>
        </footer>
      )}

    </div>
  );
}
