import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Clock, 
  AlertCircle, 
  ChevronLeft, 
  ChevronRight, 
  Send, 
  BookOpen, 
  Calculator, 
  CheckCircle2,
  FileText
} from 'lucide-react';
import { StudentProfile, TestSettings, ClientQuestion } from '../types/exam';
import { getClientQuestions } from '../data/questionsData';
import { ScientificCalculator } from './ScientificCalculator';
import { MathFormulasModal } from './MathFormulasModal';

interface ExamScreenProps {
  student: StudentProfile;
  settings: TestSettings;
  onSubmitExam: (answers: Record<number, string>, timeTakenSeconds: number) => void;
}

export const ExamScreen: React.FC<ExamScreenProps> = ({
  student,
  onSubmitExam,
}) => {
  const clientQuestions: ClientQuestion[] = useMemo(() => getClientQuestions(), []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  
  // Single 80-minute countdown timer (80 * 60 = 4800 seconds)
  const totalExamDurationSeconds = 80 * 60;
  const [timeLeft, setTimeLeft] = useState(totalExamDurationSeconds);

  // Modals
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showFormulas, setShowFormulas] = useState(false);

  const currentQuestion = clientQuestions[currentIndex];
  const startTimeRef = useRef(Date.now());

  // Countdown timer for 80 minutes
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
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

  const handleAutoSubmit = () => {
    const timeTaken = Math.min(totalExamDurationSeconds, Math.floor((Date.now() - startTimeRef.current) / 1000));
    onSubmitExam(answers, timeTaken);
  };

  const handleManualSubmit = () => {
    setShowConfirmSubmit(false);
    handleAutoSubmit();
  };

  const handleSelectOption = (option: 'A' | 'B' | 'C' | 'D') => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: option,
    }));
  };

  const handleClearAnswer = () => {
    setAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentQuestion.id];
      return copy;
    });
  };

  const handleNext = () => {
    if (currentIndex < clientQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Format 80m countdown
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(answers).length;
  const unansweredCount = clientQuestions.length - answeredCount;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      
      {/* Top Test Header */}
      <div className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center space-x-3">
            <span className="font-bold text-slate-900 text-sm">
              STHP MOCK TEST 2027
            </span>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <span className="text-xs text-slate-600 hidden sm:inline">
              Candidate: <strong className="text-slate-900">{student.fullName}</strong> ({student.district})
            </span>
          </div>

          {/* Tools & Timer */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Scientific Calculator Button */}
            <button
              type="button"
              onClick={() => setShowCalculator(true)}
              className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 flex items-center space-x-1.5 transition-colors shadow-2xs"
            >
              <Calculator className="w-3.5 h-3.5 text-blue-600" />
              <span>Calculator</span>
            </button>

            {/* Math Formulas Button */}
            <button
              type="button"
              onClick={() => setShowFormulas(true)}
              className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 flex items-center space-x-1.5 transition-colors shadow-2xs"
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
              <span>Math Formulas</span>
            </button>

            {/* 80m Countdown Timer */}
            <div 
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono font-bold ${
                timeLeft <= 300 
                  ? 'bg-red-50 border-red-300 text-red-600 animate-pulse' 
                  : 'bg-blue-50 border-blue-200 text-blue-700'
              }`}
              title="Total Test Time Remaining"
            >
              <Clock className="w-3.5 h-3.5" />
              <span>{formatTime(timeLeft)}</span>
            </div>

            {/* Submit Test Button */}
            <button
              type="button"
              onClick={() => setShowConfirmSubmit(true)}
              className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-xs flex items-center space-x-1.5 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Test</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Examination Workspace */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 flex-1 flex flex-col lg:flex-row gap-6">
        
        {/* Question Area */}
        <div className="flex-1 flex flex-col bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
          
          {/* Question Header */}
          <div className="px-6 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="font-bold text-slate-900 text-sm">
                Question {currentQuestion.id} of {clientQuestions.length}
              </span>
              <span className="text-xs text-slate-500 font-medium px-2.5 py-0.5 rounded bg-slate-200/60">
                {currentQuestion.section} • {currentQuestion.topic}
              </span>
            </div>
            {answers[currentQuestion.id] && (
              <span className="text-xs text-emerald-700 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Answer Selected
              </span>
            )}
          </div>

          {/* Reading Comprehension passage if present */}
          {currentQuestion.passage && (
            <div className="p-5 bg-slate-50/70 border-b border-slate-200 text-xs text-slate-700 leading-relaxed max-h-56 overflow-y-auto">
              <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-blue-600" />
                <span>{currentQuestion.passageTitle || 'Reading Comprehension Passage'}</span>
              </div>
              <p className="whitespace-pre-line font-serif">{currentQuestion.passage}</p>
            </div>
          )}

          {/* Question Statement & Options */}
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <div className="text-base font-medium text-slate-900 leading-relaxed whitespace-pre-line mb-6">
                {currentQuestion.statement}
              </div>

              {/* Options */}
              <div className="space-y-3">
                {(['A', 'B', 'C', 'D'] as const).map((optKey) => {
                  const isSelected = answers[currentQuestion.id] === optKey;
                  return (
                    <button
                      key={optKey}
                      type="button"
                      onClick={() => handleSelectOption(optKey)}
                      className={`w-full text-left p-4 rounded-xl border transition-colors flex items-start space-x-3 ${
                        isSelected
                          ? 'bg-blue-50/70 border-blue-600 text-blue-900 ring-1 ring-blue-600'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs shrink-0 ${
                        isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {optKey}
                      </div>
                      <div className="text-sm pt-0.5 flex-1">
                        {currentQuestion.options[optKey]}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Navigation Buttons */}
            <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
              <button
                type="button"
                onClick={handleClearAnswer}
                disabled={!answers[currentQuestion.id]}
                className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800 disabled:opacity-30 transition-colors"
              >
                Clear Choice
              </button>

              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="px-4 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-40 text-xs font-semibold text-slate-700 flex items-center space-x-1.5 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                {currentIndex < clientQuestions.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs flex items-center space-x-1.5 transition-colors"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowConfirmSubmit(true)}
                    className="px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs flex items-center space-x-1.5 transition-colors"
                  >
                    <span>Finish Test</span>
                    <Send className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* Right Palette: Question Numbers */}
        <div className="w-full lg:w-72 bg-white border border-slate-200 rounded-xl shadow-xs p-4 flex flex-col">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
            <span className="text-xs font-bold text-slate-800">Question Navigation</span>
            <span className="text-[11px] text-slate-500">100 MCQs</span>
          </div>

          {/* Simple Legend */}
          <div className="flex items-center justify-between text-[11px] text-slate-600 mb-3 px-1">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-emerald-600"></span>
              Answered ({answeredCount})
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-slate-200 border border-slate-300"></span>
              Unanswered ({unansweredCount})
            </span>
          </div>

          {/* Numbers Grid */}
          <div className="flex-1 max-h-[460px] overflow-y-auto pr-1">
            <div className="grid grid-cols-5 gap-1.5">
              {clientQuestions.map((q, idx) => {
                const isAnswered = !!answers[q.id];
                const isCurrent = idx === currentIndex;

                let btnClass = 'bg-slate-100 text-slate-700 hover:bg-slate-200';
                if (isAnswered) {
                  btnClass = 'bg-emerald-600 text-white font-semibold';
                }
                if (isCurrent) {
                  btnClass = isAnswered 
                    ? 'bg-emerald-600 text-white font-bold ring-2 ring-blue-600 ring-offset-1'
                    : 'bg-blue-600 text-white font-bold ring-2 ring-blue-600 ring-offset-1';
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-8 rounded text-xs flex items-center justify-center transition-all ${btnClass}`}
                  >
                    {q.id}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-3 mt-3 border-t border-slate-200">
            <button
              type="button"
              onClick={() => setShowConfirmSubmit(true)}
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
            >
              Submit Test
            </button>
          </div>
        </div>

      </div>

      {/* Confirmation Modal */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white border border-slate-200 max-w-sm w-full rounded-2xl p-6 shadow-xl text-center">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 mx-auto flex items-center justify-center mb-3">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-800 mb-1">
              Confirm Submission?
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              You have answered <strong>{answeredCount}</strong> out of <strong>{clientQuestions.length}</strong> questions.
              {unansweredCount > 0 && ` ${unansweredCount} questions remain unanswered.`}
            </p>

            <div className="flex space-x-2 justify-center">
              <button
                type="button"
                onClick={() => setShowConfirmSubmit(false)}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                Continue Test
              </button>
              <button
                type="button"
                onClick={handleManualSubmit}
                className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs"
              >
                Yes, Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scientific Calculator Modal */}
      <ScientificCalculator
        isOpen={showCalculator}
        onClose={() => setShowCalculator(false)}
      />

      {/* Mathematics Formulas Modal */}
      <MathFormulasModal
        isOpen={showFormulas}
        onClose={() => setShowFormulas(false)}
      />

    </div>
  );
};
