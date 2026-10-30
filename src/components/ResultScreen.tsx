import React, { useState, useEffect } from 'react';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Clock, 
  Trophy, 
  Printer, 
  ArrowRight, 
  RotateCcw, 
  BookOpen, 
  Calculator, 
  BrainCircuit, 
  BarChart2, 
  Filter, 
  Search,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { StudentSubmission, Question } from '../types/exam';
import { QUESTIONS_DATA } from '../data/questionsData';

interface ResultScreenProps {
  submission: StudentSubmission;
  onViewLeaderboard: () => void;
  onRetakeExam: () => void;
  leaderboardRank?: number;
  totalParticipants?: number;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  submission,
  onViewLeaderboard,
  onRetakeExam,
  leaderboardRank,
  totalParticipants = 1,
}) => {
  const [filterType, setFilterType] = useState<'ALL' | 'CORRECT' | 'INCORRECT' | 'UNATTEMPTED'>('ALL');
  const [filterSection, setFilterSection] = useState<'ALL' | 'ENGLISH' | 'MATHEMATICS' | 'INTELLIGENCE'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedExplanation, setExpandedExplanation] = useState<Record<number, boolean>>({});

  // Celebrate with confetti if score is high (≥ 50%)
  useEffect(() => {
    if (submission.score >= 50) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [submission.score]);

  const toggleExplanation = (id: number) => {
    setExpandedExplanation(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const formatDuration = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}m ${s}s`;
  };

  // Filter questions for detailed answer review
  const filteredQuestions = QUESTIONS_DATA.filter((q) => {
    const studentAns = submission.answers[q.id];
    const isCorrect = studentAns === q.correctOption;
    const isUnattempted = !studentAns;
    const isIncorrect = !!studentAns && !isCorrect;

    // Filter by attempt status
    if (filterType === 'CORRECT' && !isCorrect) return false;
    if (filterType === 'INCORRECT' && !isIncorrect) return false;
    if (filterType === 'UNATTEMPTED' && !isUnattempted) return false;

    // Filter by section
    if (filterSection !== 'ALL' && q.section !== filterSection) return false;

    // Filter by search text
    if (searchQuery.trim()) {
      const qText = `${q.statement} ${q.topic}`.toLowerCase();
      if (!qText.includes(searchQuery.toLowerCase())) return false;
    }

    return true;
  });

  const isQualified = submission.score >= 50 && submission.englishScore >= 16 && submission.mathScore >= 16;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-300">
      
      {/* =========================================================================
          RESULT BANNER & SCORECARD (PRINTABLE)
      ========================================================================== */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden mb-8">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 p-6 sm:p-8 border-b border-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-amber-500 p-0.5 shadow-xl flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Trophy className="w-8 h-8 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold font-serif tracking-tight">
                  Official CBT Result Card
                </h1>
                <span className={`px-2.5 py-0.5 text-xs font-bold rounded-full ${
                  isQualified 
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                }`}>
                  {isQualified ? 'STHP BENCHMARK QUALIFIED' : 'ATTEMPTED'}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Candidate: <strong className="text-white">{submission.studentName}</strong> • Roll No: <strong className="text-amber-400 font-mono">{submission.rollNumber}</strong> • District: <strong className="text-white">{submission.district}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 flex items-center space-x-1.5 transition-colors print:hidden"
            >
              <Printer className="w-4 h-4" />
              <span>Print Slip</span>
            </button>
            <button
              onClick={onViewLeaderboard}
              className="px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-amber-500/20 flex items-center space-x-1.5 transition-all"
            >
              <Trophy className="w-4 h-4" />
              <span>Live Leaderboard</span>
            </button>
          </div>
        </div>

        {/* Big Metrics Grid */}
        <div className="p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-5 gap-4 bg-slate-900/60">
          
          {/* Total Score */}
          <div className="col-span-2 sm:col-span-1 p-5 rounded-2xl bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-600/40 text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300 block mb-1">
              Total Score
            </span>
            <div className="text-4xl font-extrabold text-white font-serif">
              {submission.score} <span className="text-sm font-normal text-slate-400 font-sans">/ 100</span>
            </div>
            <span className="text-xs text-blue-400 font-semibold mt-1 inline-block">
              {submission.percentage}% Score
            </span>
          </div>

          {/* Sectional English */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
            <div className="flex items-center justify-center space-x-1 text-blue-400 text-xs font-semibold mb-1">
              <BookOpen className="w-3.5 h-3.5" />
              <span>English</span>
            </div>
            <div className="text-2xl font-bold text-white font-serif">
              {submission.englishScore} <span className="text-xs text-slate-500 font-sans">/ 40</span>
            </div>
            <div className="text-[10px] text-slate-400 mt-1">
              Accuracy: {((submission.englishScore / 40) * 100).toFixed(0)}%
            </div>
          </div>

          {/* Sectional Mathematics */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
            <div className="flex items-center justify-center space-x-1 text-emerald-400 text-xs font-semibold mb-1">
              <Calculator className="w-3.5 h-3.5" />
              <span>Mathematics</span>
            </div>
            <div className="text-2xl font-bold text-white font-serif">
              {submission.mathScore} <span className="text-xs text-slate-500 font-sans">/ 40</span>
            </div>
            <div className="text-[10px] text-slate-400 mt-1">
              Accuracy: {((submission.mathScore / 40) * 100).toFixed(0)}%
            </div>
          </div>

          {/* Sectional IQ */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
            <div className="flex items-center justify-center space-x-1 text-purple-400 text-xs font-semibold mb-1">
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>Intelligence / IQ</span>
            </div>
            <div className="text-2xl font-bold text-white font-serif">
              {submission.iqScore} <span className="text-xs text-slate-500 font-sans">/ 20</span>
            </div>
            <div className="text-[10px] text-slate-400 mt-1">
              Accuracy: {((submission.iqScore / 20) * 100).toFixed(0)}%
            </div>
          </div>

          {/* Leaderboard Rank & Time */}
          <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-gradient-to-br from-amber-950/30 to-slate-950 border border-amber-600/30 text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block mb-1">
              Leaderboard Rank
            </span>
            <div className="text-2xl font-black text-amber-400 font-serif">
              #{leaderboardRank || 1}
            </div>
            <span className="text-[11px] text-slate-400 mt-1 inline-flex items-center gap-1 justify-center">
              <Clock className="w-3 h-3" />
              {formatDuration(submission.timeTakenSeconds)}
            </span>
          </div>

        </div>

        {/* Detailed Stats Row */}
        <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800 flex flex-wrap items-center justify-around gap-4 text-xs">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-400">Correct:</span>
            <strong className="text-emerald-400 font-bold">{submission.correctCount}</strong>
          </div>
          <div className="flex items-center space-x-2">
            <XCircle className="w-4 h-4 text-red-400" />
            <span className="text-slate-400">Incorrect:</span>
            <strong className="text-red-400 font-bold">{submission.incorrectCount}</strong>
          </div>
          <div className="flex items-center space-x-2">
            <HelpCircle className="w-4 h-4 text-slate-400" />
            <span className="text-slate-400">Unattempted:</span>
            <strong className="text-slate-200 font-bold">{submission.unattemptedCount}</strong>
          </div>
          <div className="flex items-center space-x-2">
            <BarChart2 className="w-4 h-4 text-blue-400" />
            <span className="text-slate-400">Accuracy Rate:</span>
            <strong className="text-blue-300 font-bold">{submission.accuracyPercentage}%</strong>
          </div>
        </div>

      </div>

      {/* =========================================================================
          DETAILED QUESTION-BY-QUESTION REVIEW
      ========================================================================== */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl overflow-hidden p-6 sm:p-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
          <div>
            <h2 className="text-xl font-bold font-serif text-white tracking-tight flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <span>Full Question Solution & Explanation Review</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Verify your chosen response against official Sukkur IBA keys with comprehensive step-by-step academic explanations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Status Filter */}
            <div className="flex rounded-xl bg-slate-950 p-1 border border-slate-800 text-xs">
              <button
                onClick={() => setFilterType('ALL')}
                className={`px-3 py-1 rounded-lg font-semibold transition-colors ${
                  filterType === 'ALL' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                All (100)
              </button>
              <button
                onClick={() => setFilterType('CORRECT')}
                className={`px-3 py-1 rounded-lg font-semibold transition-colors ${
                  filterType === 'CORRECT' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Correct ({submission.correctCount})
              </button>
              <button
                onClick={() => setFilterType('INCORRECT')}
                className={`px-3 py-1 rounded-lg font-semibold transition-colors ${
                  filterType === 'INCORRECT' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Incorrect ({submission.incorrectCount})
              </button>
              <button
                onClick={() => setFilterType('UNATTEMPTED')}
                className={`px-3 py-1 rounded-lg font-semibold transition-colors ${
                  filterType === 'UNATTEMPTED' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Skipped ({submission.unattemptedCount})
              </button>
            </div>

            {/* Section Filter */}
            <select
              value={filterSection}
              onChange={(e) => setFilterSection(e.target.value as any)}
              className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-blue-500"
            >
              <option value="ALL">All Sections</option>
              <option value="ENGLISH">English (1-40)</option>
              <option value="MATHEMATICS">Mathematics (41-80)</option>
              <option value="INTELLIGENCE">IQ / Reasoning (81-100)</option>
            </select>
          </div>
        </div>

        {/* Question Cards List */}
        <div className="space-y-6 mt-6">
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-sm">
              No questions match the selected filter criteria.
            </div>
          ) : (
            filteredQuestions.map((q) => {
              const studentChoice = submission.answers[q.id];
              const isCorrect = studentChoice === q.correctOption;
              const isUnattempted = !studentChoice;
              const isExpanded = expandedExplanation[q.id] !== false; // Default expanded for convenience

              return (
                <div
                  key={q.id}
                  className={`rounded-2xl border p-5 sm:p-6 transition-all ${
                    isCorrect
                      ? 'bg-emerald-950/20 border-emerald-800/40'
                      : isUnattempted
                      ? 'bg-slate-950/60 border-slate-800'
                      : 'bg-red-950/20 border-red-800/40'
                  }`}
                >
                  {/* Question Meta Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="w-8 h-8 rounded-lg bg-slate-800 text-white flex items-center justify-center font-bold text-xs border border-slate-700">
                        {q.id}
                      </span>
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                        {q.section}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        • {q.topic}
                      </span>
                    </div>

                    <div>
                      {isCorrect ? (
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Correct (+1.0)
                        </span>
                      ) : isUnattempted ? (
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-400 border border-slate-700 flex items-center gap-1">
                          <HelpCircle className="w-3.5 h-3.5" />
                          Unattempted (0.0)
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-300 border border-red-500/30 flex items-center gap-1">
                          <XCircle className="w-3.5 h-3.5" />
                          Incorrect
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Reading Passage if attached */}
                  {q.passage && (
                    <div className="p-4 mb-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 leading-relaxed font-serif max-h-48 overflow-y-auto">
                      <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1">
                        {q.passageTitle}
                      </div>
                      {q.passage}
                    </div>
                  )}

                  {/* Question Statement */}
                  <div className="text-sm sm:text-base font-medium text-slate-100 whitespace-pre-line mb-4">
                    {q.statement}
                  </div>

                  {/* Options List with Status Highlighting */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                    {(['A', 'B', 'C', 'D'] as const).map((optKey) => {
                      const isOptionCorrect = q.correctOption === optKey;
                      const isOptionSelected = studentChoice === optKey;

                      let optClass = 'bg-slate-900/60 border-slate-800 text-slate-300';
                      if (isOptionCorrect) {
                        optClass = 'bg-emerald-900/30 border-emerald-500 text-emerald-100 ring-1 ring-emerald-500/50';
                      } else if (isOptionSelected && !isOptionCorrect) {
                        optClass = 'bg-red-900/30 border-red-500 text-red-200 ring-1 ring-red-500/50';
                      }

                      return (
                        <div
                          key={optKey}
                          className={`p-3 rounded-xl border flex items-start space-x-3 text-xs ${optClass}`}
                        >
                          <div className={`w-6 h-6 rounded-md flex items-center justify-center font-bold shrink-0 ${
                            isOptionCorrect 
                              ? 'bg-emerald-600 text-white' 
                              : isOptionSelected 
                              ? 'bg-red-600 text-white' 
                              : 'bg-slate-800 text-slate-400'
                          }`}>
                            {optKey}
                          </div>
                          <div className="pt-0.5 flex-1 leading-relaxed">
                            {q.options[optKey]}
                            {isOptionCorrect && (
                              <span className="ml-2 font-bold text-emerald-400 text-[10px]">
                                (Correct Answer)
                              </span>
                            )}
                            {isOptionSelected && !isOptionCorrect && (
                              <span className="ml-2 font-bold text-red-400 text-[10px]">
                                (Your Selection)
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Academic Step-by-Step Solution & Explanation */}
                  <div className="mt-4 pt-3.5 border-t border-slate-800/80">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        Explanation & Academic Solution:
                      </span>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans bg-slate-950/70 p-3.5 rounded-xl border border-slate-800">
                      {q.explanation}
                    </p>
                  </div>

                </div>
              );
            })
          )}
        </div>

        {/* Retake / Return buttons */}
        <div className="pt-8 mt-8 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onRetakeExam}
            className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center space-x-2 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake STHP Mock Test</span>
          </button>

          <button
            onClick={onViewLeaderboard}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-600/30 flex items-center space-x-2 transition-all"
          >
            <span>Proceed to Global Leaderboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
