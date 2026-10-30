import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Clock, 
  AlertCircle, 
  ChevronLeft, 
  ChevronRight, 
  Bookmark, 
  RotateCcw, 
  Send, 
  BookOpen, 
  Calculator, 
  BrainCircuit, 
  Info,
  CheckCircle2,
  HelpCircle,
  Eye,
  Maximize2,
  Lock
} from 'lucide-react';
import { Question, StudentProfile, TestSettings, ClientQuestion } from '../types/exam';
import { getClientQuestions } from '../data/questionsData';

interface ExamScreenProps {
  student: StudentProfile;
  settings: TestSettings;
  onSubmitExam: (answers: Record<number, string>, timeTakenSeconds: number) => void;
}

export const ExamScreen: React.FC<ExamScreenProps> = ({
  student,
  settings,
  onSubmitExam,
}) => {
  // Safe client questions without answers
  const clientQuestions: ClientQuestion[] = useMemo(() => getClientQuestions(), []);

  // State tracking
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [visited, setVisited] = useState<Record<number, boolean>>({ 1: true });

  // Timers
  const totalSeconds = settings.durationMinutes * 60;
  const [overallTimeLeft, setOverallTimeLeft] = useState(totalSeconds);
  const [questionTimeLeft, setQuestionTimeLeft] = useState(settings.perQuestionSeconds);

  // Modals & UI states
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [showSectionIntro, setShowSectionIntro] = useState<string | null>('PART I – ENGLISH');
  const [activeSectionFilter, setActiveSectionFilter] = useState<'ALL' | 'ENGLISH' | 'MATHEMATICS' | 'INTELLIGENCE'>('ENGLISH');

  const currentQuestion = clientQuestions[currentIndex];
  const startTimeRef = useRef(Date.now());

  // Record visited on question switch
  useEffect(() => {
    setVisited((prev) => ({ ...prev, [currentQuestion.id]: true }));
    // Reset question timer to full per question duration
    setQuestionTimeLeft(settings.perQuestionSeconds);
  }, [currentIndex, currentQuestion.id, settings.perQuestionSeconds]);

  // Overall countdown timer (100 minutes)
  useEffect(() => {
    const timer = setInterval(() => {
      setOverallTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Per-question countdown timer (60 seconds)
  useEffect(() => {
    if (!settings.enablePerQuestionTimer) return;

    const qTimer = setInterval(() => {
      setQuestionTimeLeft((prev) => {
        if (prev <= 1) {
          // Timer expired for this question: lock and auto-advance
          handleQuestionTimerExpired();
          return settings.perQuestionSeconds;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(qTimer);
  }, [currentIndex, settings.enablePerQuestionTimer, settings.perQuestionSeconds]);

  // When question timer hits 0
  const handleQuestionTimerExpired = () => {
    if (currentIndex < clientQuestions.length - 1) {
      const nextIndex = currentIndex + 1;
      checkSectionBoundary(nextIndex);
      setCurrentIndex(nextIndex);
    } else {
      // Reached the end of the test
      handleAutoSubmit();
    }
  };

  // Check if moving to a new section to display formal section transition notification
  const checkSectionBoundary = (newIndex: number) => {
    const nextQ = clientQuestions[newIndex];
    if (nextQ.section !== currentQuestion.section) {
      if (nextQ.section === 'MATHEMATICS') {
        setShowSectionIntro('PART II – MATHEMATICS');
      } else if (nextQ.section === 'INTELLIGENCE') {
        setShowSectionIntro('PART III – INTELLIGENCE / IQ');
      }
    }
  };

  // Auto-submit when time expires
  const handleAutoSubmit = () => {
    const timeTaken = Math.min(totalSeconds, Math.floor((Date.now() - startTimeRef.current) / 1000));
    onSubmitExam(answers, timeTaken);
  };

  // Manual submission trigger
  const handleFinalSubmitConfirm = () => {
    setShowConfirmSubmit(false);
    handleAutoSubmit();
  };

  // Select Option
  const handleSelectOption = (option: 'A' | 'B' | 'C' | 'D') => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: option,
    }));
  };

  // Clear Option
  const handleClearAnswer = () => {
    setAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentQuestion.id];
      return copy;
    });
  };

  // Toggle Mark for Review
  const handleToggleReview = () => {
    setMarkedForReview((prev) => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id],
    }));
  };

  // Navigation handlers
  const handleNext = () => {
    if (currentIndex < clientQuestions.length - 1) {
      const nextIndex = currentIndex + 1;
      checkSectionBoundary(nextIndex);
      setCurrentIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleJumpToQuestion = (targetIndex: number) => {
    checkSectionBoundary(targetIndex);
    setCurrentIndex(targetIndex);
  };

  // Helpers for timer display
  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${h > 0 ? `${h.toString().padStart(2, '0')}:` : ''}${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Summary counts
  const answeredCount = Object.keys(answers).length;
  const reviewCount = Object.values(markedForReview).filter(Boolean).length;
  const unattemptedCount = clientQuestions.length - answeredCount;

  // Section details
  const getSectionTitle = (sec: Question['section']) => {
    switch (sec) {
      case 'ENGLISH':
        return 'PART I – ENGLISH (Questions 1 – 40)';
      case 'MATHEMATICS':
        return 'PART II – MATHEMATICS (Questions 41 – 80)';
      case 'INTELLIGENCE':
        return 'PART III – INTELLIGENCE / IQ (Questions 81 – 100)';
    }
  };

  // Get question palette status
  const getQuestionStatus = (qId: number) => {
    const isCurrent = qId === currentQuestion.id;
    const isMarked = markedForReview[qId];
    const isAnswered = !!answers[qId];

    if (isCurrent) return 'current';
    if (isMarked) return 'marked';
    if (isAnswered) return 'answered';
    if (visited[qId]) return 'visited';
    return 'not_visited';
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col select-none">
      
      {/* =========================================================================
          TOP EXAMINATION STATUS BAR
      ========================================================================== */}
      <div className="bg-slate-950 border-b border-slate-800 px-4 sm:px-6 py-2.5 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Candidate & Test Info */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-900/40 border border-blue-500/30 px-3 py-1 rounded-lg">
              <span className="text-[10px] text-blue-300 uppercase tracking-wider block font-bold">Candidate</span>
              <span className="text-xs font-semibold text-white truncate max-w-[150px] inline-block">
                {student.fullName}
              </span>
            </div>
            <div className="hidden sm:block bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-lg">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Roll Number</span>
              <span className="text-xs font-mono font-bold text-amber-400">{student.rollNumber}</span>
            </div>
          </div>

          {/* Active Section Indicator */}
          <div className="hidden lg:flex items-center space-x-2 bg-slate-900 px-4 py-1.5 rounded-xl border border-slate-700/80">
            {currentQuestion.section === 'ENGLISH' && <BookOpen className="w-4 h-4 text-blue-400" />}
            {currentQuestion.section === 'MATHEMATICS' && <Calculator className="w-4 h-4 text-emerald-400" />}
            {currentQuestion.section === 'INTELLIGENCE' && <BrainCircuit className="w-4 h-4 text-purple-400" />}
            <span className="text-xs font-bold tracking-tight text-white uppercase">
              {getSectionTitle(currentQuestion.section)}
            </span>
          </div>

          {/* Timers Cluster */}
          <div className="flex items-center space-x-3">
            
            {/* 60s Question Timer */}
            {settings.enablePerQuestionTimer && (
              <div 
                className={`flex items-center space-x-2 px-3 py-1 rounded-lg border transition-colors ${
                  questionTimeLeft <= 15
                    ? 'bg-red-950/70 border-red-500 text-red-200 animate-pulse'
                    : questionTimeLeft <= 30
                    ? 'bg-amber-950/60 border-amber-500 text-amber-200'
                    : 'bg-slate-800 border-slate-700 text-slate-200'
                }`}
                title="60-second Question Lock Timer"
              >
                <Clock className="w-3.5 h-3.5" />
                <div className="text-right">
                  <span className="text-[9px] uppercase tracking-wider block font-bold opacity-80">Question Timer</span>
                  <span className="text-xs font-mono font-bold">{questionTimeLeft}s</span>
                </div>
              </div>
            )}

            {/* Overall 100m Examination Timer */}
            <div 
              className={`flex items-center space-x-2 px-3.5 py-1 rounded-lg border font-mono ${
                overallTimeLeft <= 300 
                  ? 'bg-red-950 border-red-500 text-red-100 animate-pulse' 
                  : 'bg-blue-950/80 border-blue-600/50 text-blue-100'
              }`}
              title="Overall Examination Time Remaining"
            >
              <Clock className="w-4 h-4 text-amber-400" />
              <div>
                <span className="text-[9px] font-sans uppercase tracking-wider block font-bold text-slate-400">
                  Total Time Left
                </span>
                <span className="text-sm font-bold tracking-wider">{formatTime(overallTimeLeft)}</span>
              </div>
            </div>

            {/* Finish & Submit Button */}
            <button
              onClick={() => setShowConfirmSubmit(true)}
              className="px-3.5 py-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-lg text-xs font-bold shadow-md shadow-emerald-900/30 flex items-center space-x-1.5 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Final Submit</span>
              <span className="sm:hidden">Submit</span>
            </button>

          </div>

        </div>
      </div>

      {/* =========================================================================
          SECTION HEADER TABS BAR
      ========================================================================== */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs">
            <span className="text-slate-400 font-medium">Test Sections:</span>
            <div className="flex space-x-1.5">
              <span className={`px-2.5 py-1 rounded-md font-bold text-xs flex items-center gap-1 ${
                currentQuestion.section === 'ENGLISH' 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'bg-slate-800 text-slate-400'
              }`}>
                <span>1. ENGLISH</span>
                <span className="text-[10px] opacity-75 font-normal">(40 MCQs)</span>
              </span>

              <span className={`px-2.5 py-1 rounded-md font-bold text-xs flex items-center gap-1 ${
                currentQuestion.section === 'MATHEMATICS' 
                  ? 'bg-emerald-600 text-white shadow-sm' 
                  : 'bg-slate-800 text-slate-400'
              }`}>
                <span>2. MATHEMATICS</span>
                <span className="text-[10px] opacity-75 font-normal">(40 MCQs)</span>
              </span>

              <span className={`px-2.5 py-1 rounded-md font-bold text-xs flex items-center gap-1 ${
                currentQuestion.section === 'INTELLIGENCE' 
                  ? 'bg-purple-600 text-white shadow-sm' 
                  : 'bg-slate-800 text-slate-400'
              }`}>
                <span>3. INTELLIGENCE / IQ</span>
                <span className="text-[10px] opacity-75 font-normal">(20 MCQs)</span>
              </span>
            </div>
          </div>

          <div className="text-xs text-slate-400 hidden md:flex items-center space-x-3">
            <span>Marking Scheme: <strong className="text-white">+1.0</strong> Correct, <strong className="text-white">-{settings.negativeMarking}</strong> Incorrect</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN TEST WORKSPACE: QUESTION AREA + QUESTION PALETTE
      ========================================================================== */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-4 sm:py-6 flex-1 flex flex-col lg:flex-row gap-6">
        
        {/* LEFT COLUMN: ACTIVE QUESTION / PASSAGE CONTAINER */}
        <div className="flex-1 flex flex-col bg-slate-950 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
          
          {/* Question Metadata Header */}
          <div className="px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center space-x-2.5">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                Question {currentQuestion.id} of {clientQuestions.length}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Topic: <span className="text-slate-200 font-semibold">{currentQuestion.topic}</span>
              </span>
            </div>
            
            <div className="flex items-center space-x-2 text-xs">
              {markedForReview[currentQuestion.id] && (
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-medium border border-amber-500/30 flex items-center gap-1">
                  <Bookmark className="w-3 h-3 fill-amber-300" />
                  Marked for Review
                </span>
              )}
              {answers[currentQuestion.id] && (
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-medium border border-emerald-500/30 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Answer Saved
                </span>
              )}
            </div>
          </div>

          {/* Reading Passage View (if present for Q1-10) */}
          {currentQuestion.passage && (
            <div className="p-5 bg-slate-900/50 border-b border-slate-800 max-h-64 overflow-y-auto">
              <div className="flex items-center space-x-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
                <BookOpen className="w-4 h-4" />
                <span>{currentQuestion.passageTitle || 'Reading Comprehension Passage'}</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line font-serif">
                {currentQuestion.passage}
              </p>
            </div>
          )}

          {/* Question Statement */}
          <div className="p-6 flex-1 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="text-base sm:text-lg font-medium text-slate-100 leading-relaxed whitespace-pre-line mb-6">
                {currentQuestion.statement}
              </div>

              {/* Options A, B, C, D */}
              <div className="space-y-3">
                {(['A', 'B', 'C', 'D'] as const).map((optKey) => {
                  const isSelected = answers[currentQuestion.id] === optKey;
                  return (
                    <button
                      key={optKey}
                      type="button"
                      onClick={() => handleSelectOption(optKey)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-start space-x-3.5 group cursor-pointer ${
                        isSelected
                          ? 'bg-blue-600/20 border-blue-500 text-white shadow-md shadow-blue-900/20 ring-1 ring-blue-500'
                          : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800/90 hover:border-slate-700'
                      }`}
                    >
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-slate-200'
                      }`}>
                        {optKey}
                      </div>
                      <div className="text-sm font-normal pt-0.5 flex-1 leading-snug">
                        {currentQuestion.options[optKey]}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="pt-8 mt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={handleClearAnswer}
                  disabled={!answers[currentQuestion.id]}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-slate-900 text-slate-400 hover:text-red-300 border border-slate-800 flex items-center space-x-1.5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Clear Answer</span>
                </button>

                <button
                  type="button"
                  onClick={handleToggleReview}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold border flex items-center space-x-1.5 transition-colors ${
                    markedForReview[currentQuestion.id]
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                      : 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-400 hover:text-amber-300'
                  }`}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${markedForReview[currentQuestion.id] ? 'fill-amber-300' : ''}`} />
                  <span>{markedForReview[currentQuestion.id] ? 'Unmark Review' : 'Mark for Review'}</span>
                </button>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 border border-slate-700 flex items-center space-x-1.5 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                {currentIndex < clientQuestions.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 flex items-center space-x-1.5 transition-all"
                  >
                    <span>Save & Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowConfirmSubmit(true)}
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/30 flex items-center space-x-1.5 transition-all"
                  >
                    <span>Save & Submit</span>
                    <Send className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT COLUMN: QUESTION NAVIGATION PALETTE */}
        <div className="w-full lg:w-80 flex flex-col bg-slate-950 border border-slate-800 rounded-2xl shadow-xl p-4 sm:p-5">
          
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
            <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
              <span>Question Palette</span>
              <span className="text-xs font-mono text-blue-400 font-normal">({clientQuestions.length})</span>
            </h4>
            <span className="text-[10px] text-slate-400 uppercase font-semibold">CBT Mode</span>
          </div>

          {/* Palette Legend */}
          <div className="grid grid-cols-2 gap-2 text-[11px] mb-4 p-2.5 bg-slate-900 rounded-xl border border-slate-800/80">
            <div className="flex items-center space-x-2">
              <span className="w-3.5 h-3.5 rounded bg-emerald-600 flex items-center justify-center text-[9px] font-bold text-white">✓</span>
              <span className="text-slate-300">Answered ({answeredCount})</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3.5 h-3.5 rounded bg-amber-500 flex items-center justify-center text-[9px] font-bold text-slate-950">★</span>
              <span className="text-slate-300">Review ({reviewCount})</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3.5 h-3.5 rounded bg-blue-600 flex items-center justify-center text-[9px] font-bold text-white">•</span>
              <span className="text-slate-300">Current</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3.5 h-3.5 rounded bg-slate-800 border border-slate-700"></span>
              <span className="text-slate-400">Unanswered ({unattemptedCount})</span>
            </div>
          </div>

          {/* Section Quick Switch Filters */}
          <div className="flex space-x-1 mb-3">
            <button
              onClick={() => setActiveSectionFilter('ENGLISH')}
              className={`flex-1 py-1 text-[10px] font-bold rounded-lg transition-colors ${
                activeSectionFilter === 'ENGLISH' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              English (1-40)
            </button>
            <button
              onClick={() => setActiveSectionFilter('MATHEMATICS')}
              className={`flex-1 py-1 text-[10px] font-bold rounded-lg transition-colors ${
                activeSectionFilter === 'MATHEMATICS' 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              Math (41-80)
            </button>
            <button
              onClick={() => setActiveSectionFilter('INTELLIGENCE')}
              className={`flex-1 py-1 text-[10px] font-bold rounded-lg transition-colors ${
                activeSectionFilter === 'INTELLIGENCE' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              IQ (81-100)
            </button>
          </div>

          {/* 100 Question Grid */}
          <div className="flex-1 max-h-[380px] overflow-y-auto pr-1">
            <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-5 gap-2">
              {clientQuestions
                .filter((q) => {
                  if (activeSectionFilter === 'ENGLISH') return q.section === 'ENGLISH';
                  if (activeSectionFilter === 'MATHEMATICS') return q.section === 'MATHEMATICS';
                  if (activeSectionFilter === 'INTELLIGENCE') return q.section === 'INTELLIGENCE';
                  return true;
                })
                .map((q) => {
                  const status = getQuestionStatus(q.id);
                  const isCurrent = q.id === currentQuestion.id;
                  
                  let colorClasses = 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800';
                  if (status === 'answered') {
                    colorClasses = 'bg-emerald-600 text-white font-bold border border-emerald-500 shadow-sm';
                  } else if (status === 'marked') {
                    colorClasses = 'bg-amber-500 text-slate-950 font-bold border border-amber-400';
                  }

                  if (isCurrent) {
                    colorClasses = 'bg-blue-600 text-white font-bold ring-2 ring-white ring-offset-2 ring-offset-slate-950';
                  }

                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => handleJumpToQuestion(q.id - 1)}
                      className={`h-9 rounded-lg text-xs flex items-center justify-center transition-all ${colorClasses}`}
                    >
                      {q.id}
                    </button>
                  );
                })}
            </div>
          </div>

          {/* Submission Button in Palette */}
          <div className="pt-4 mt-3 border-t border-slate-800">
            <button
              type="button"
              onClick={() => setShowConfirmSubmit(true)}
              className="w-full py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-emerald-900/30 flex items-center justify-center space-x-2 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Submit Examination</span>
            </button>
          </div>

        </div>

      </div>

      {/* =========================================================================
          SECTION TRANSITION NOTIFICATION MODAL
      ========================================================================== */}
      {showSectionIntro && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-blue-600/50 max-w-md w-full rounded-2xl p-6 shadow-2xl text-center">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/20 text-blue-400 mx-auto flex items-center justify-center mb-4 border border-blue-500/30">
              <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold font-serif text-white mb-2">
              {showSectionIntro}
            </h3>
            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              You are now entering {showSectionIntro}. Remember that answers cannot be shuffled between sections. Work steadily through the questions.
            </p>
            <button
              type="button"
              onClick={() => setShowSectionIntro(null)}
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-blue-600/30 transition-all"
            >
              Begin This Section
            </button>
          </div>
        </div>
      )}

      {/* =========================================================================
          FINAL SUBMISSION CONFIRMATION MODAL
      ========================================================================== */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-slate-700 max-w-lg w-full rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Final Test Submission Confirmation</h3>
                <p className="text-xs text-slate-400">Are you sure you want to finalize and submit your test?</p>
              </div>
            </div>

            {/* Test Summary Stats */}
            <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 space-y-2.5 my-4">
              <div className="flex justify-between text-xs py-1 border-b border-slate-900">
                <span className="text-slate-400">Total Examination Questions:</span>
                <span className="font-bold text-white">100</span>
              </div>
              <div className="flex justify-between text-xs py-1 border-b border-slate-900">
                <span className="text-emerald-400 font-semibold">Answered Questions:</span>
                <span className="font-bold text-emerald-400">{answeredCount}</span>
              </div>
              <div className="flex justify-between text-xs py-1 border-b border-slate-900">
                <span className="text-amber-400 font-semibold">Marked for Review:</span>
                <span className="font-bold text-amber-400">{reviewCount}</span>
              </div>
              <div className="flex justify-between text-xs py-1">
                <span className="text-red-400 font-semibold">Unattempted Questions:</span>
                <span className="font-bold text-red-400">{unattemptedCount}</span>
              </div>
            </div>

            {unattemptedCount > 0 && (
              <p className="text-xs text-amber-300/90 bg-amber-950/40 border border-amber-600/30 p-3 rounded-lg mb-4">
                Warning: You still have <strong>{unattemptedCount}</strong> unanswered questions. Unanswered questions will receive 0 marks.
              </p>
            )}

            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmSubmit(false)}
                className="px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
              >
                Return to Test
              </button>
              <button
                type="button"
                onClick={handleFinalSubmitConfirm}
                className="px-6 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl shadow-lg shadow-emerald-900/40 transition-all flex items-center space-x-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Confirm & Submit</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
