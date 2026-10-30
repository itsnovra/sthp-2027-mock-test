import React, { useState } from 'react';
import { Trophy, CheckCircle2, XCircle, HelpCircle, Clock, Calendar, ArrowRight, RotateCcw, BookOpen } from 'lucide-react';
import { StudentSubmission } from '../types/exam';
import { QUESTIONS_DATA } from '../data/questionsData';

interface ResultScreenProps {
  submission: StudentSubmission;
  onViewLeaderboard: () => void;
  onRetakeExam: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  submission,
  onViewLeaderboard,
  onRetakeExam,
}) => {
  const [showReview, setShowReview] = useState(false);

  const formatDuration = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}m ${s}s`;
  };

  const formattedDate = new Date(submission.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      
      {/* Result Card */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-xs p-6 sm:p-8">
        
        <div className="text-center pb-6 border-b border-slate-100">
          <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3">
            <Trophy className="w-7 h-7" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Test Result</h2>
          <p className="text-sm text-slate-500 mt-1">STHP Mock Test 2027</p>
        </div>

        {/* Essential 7 Fields Only */}
        <div className="py-6 space-y-3.5 text-sm">
          
          <div className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Student Name</span>
            <span className="font-semibold text-slate-900">{submission.studentName}</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Score</span>
            <span className="text-xl font-bold text-blue-600">
              {submission.score} <span className="text-xs font-normal text-slate-400">/ 100</span>
            </span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Correct Answers</span>
            <span className="font-semibold text-emerald-600">{submission.correctCount}</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Incorrect Answers</span>
            <span className="font-semibold text-red-600">{submission.incorrectCount}</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Unanswered Questions</span>
            <span className="font-semibold text-slate-600">{submission.unattemptedCount}</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Time Taken</span>
            <span className="font-semibold text-slate-800">{formatDuration(submission.timeTakenSeconds)}</span>
          </div>

          <div className="flex justify-between items-center py-2">
            <span className="text-slate-500 font-medium">Test Date</span>
            <span className="font-semibold text-slate-800">{formattedDate}</span>
          </div>

        </div>

        {/* Actions */}
        <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => setShowReview(!showReview)}
            className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg transition-colors flex items-center space-x-1.5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{showReview ? 'Hide Answers' : 'Review Questions & Explanations'}</span>
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={onRetakeExam}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors flex items-center space-x-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Test</span>
            </button>

            <button
              onClick={onViewLeaderboard}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors flex items-center space-x-1"
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>Leaderboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Optional Clean Solution Review */}
      {showReview && (
        <div className="mt-8 bg-white border border-slate-200 rounded-2xl shadow-xs p-6 space-y-6">
          <h3 className="font-bold text-slate-900 text-base">Answers & Academic Solutions</h3>
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {QUESTIONS_DATA.map((q) => {
              const studentChoice = submission.answers[q.id];
              const isCorrect = studentChoice === q.correctOption;
              const isSkipped = !studentChoice;

              return (
                <div 
                  key={q.id} 
                  className={`p-4 rounded-xl border text-xs ${
                    isCorrect 
                      ? 'bg-emerald-50/50 border-emerald-200' 
                      : isSkipped 
                      ? 'bg-slate-50 border-slate-200' 
                      : 'bg-red-50/50 border-red-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-800">Q{q.id}. {q.topic}</span>
                    <span className={`px-2 py-0.5 rounded font-semibold text-[11px] ${
                      isCorrect 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : isSkipped 
                        ? 'bg-slate-200 text-slate-700' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {isCorrect ? 'Correct (+1.0)' : isSkipped ? 'Unanswered' : 'Incorrect'}
                    </span>
                  </div>

                  <p className="text-slate-800 mb-2 font-medium">{q.statement}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-600 mb-2">
                    <div>A: {q.options.A}</div>
                    <div>B: {q.options.B}</div>
                    <div>C: {q.options.C}</div>
                    <div>D: {q.options.D}</div>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                    <span>Your choice: <strong className={isCorrect ? 'text-emerald-700' : 'text-red-700'}>{studentChoice || 'None'}</strong></span>
                    <span>Correct key: <strong className="text-emerald-700">{q.correctOption}</strong></span>
                  </div>

                  <div className="mt-2 p-2.5 bg-white rounded-lg border border-slate-200 text-slate-600 text-[11px]">
                    <strong>Explanation:</strong> {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};
