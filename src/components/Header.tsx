import React from 'react';
import { Award, BookOpen, Clock, ShieldCheck, Trophy, User, LogOut } from 'lucide-react';
import { StudentProfile } from '../types/exam';

interface HeaderProps {
  currentTab: 'exam' | 'leaderboard' | 'admin' | 'result';
  setCurrentTab: (tab: 'exam' | 'leaderboard' | 'admin') => void;
  student: StudentProfile | null;
  onLogout: () => void;
  onOpenRegister: () => void;
  examInProgress: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  student,
  onLogout,
  onOpenRegister,
  examInProgress,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & University Branding */}
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-amber-500 p-0.5 shadow-md flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-serif font-black text-amber-400 text-xl tracking-tighter">
                SIBA
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg tracking-tight font-serif text-white flex items-center gap-1.5">
                  STHP 2027
                  <span className="text-xs font-sans px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-semibold border border-blue-400/30">
                    OFFICIAL MOCK CBT
                  </span>
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Sindh Talent Hunt Program • Sukkur IBA University Entry Test Simulation
              </p>
            </div>
          </div>

          {/* Navigation Links (Hidden while exam is active to maintain strict focus) */}
          {!examInProgress ? (
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button
                onClick={() => setCurrentTab('exam')}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-2 ${
                  currentTab === 'exam'
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Examination</span>
              </button>

              <button
                onClick={() => setCurrentTab('leaderboard')}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-2 ${
                  currentTab === 'leaderboard'
                    ? 'bg-amber-600 text-white shadow-sm shadow-amber-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <Trophy className="w-4 h-4 text-amber-300" />
                <span>Live Leaderboard</span>
              </button>

              <button
                onClick={() => setCurrentTab('admin')}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-2 ${
                  currentTab === 'admin'
                    ? 'bg-slate-700 text-white border border-slate-600'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Admin</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-3 bg-red-950/60 border border-red-500/40 text-red-200 px-4 py-1.5 rounded-full text-xs font-semibold animate-pulse">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span>LIVE TEST SESSION IN PROGRESS</span>
            </div>
          )}

          {/* Student Identity / Register Profile */}
          <div className="flex items-center space-x-3">
            {student ? (
              <div className="flex items-center space-x-2.5 bg-slate-800/80 border border-slate-700/80 rounded-xl px-3 py-1.5">
                <div className="w-8 h-8 rounded-full bg-blue-700/60 text-blue-200 flex items-center justify-center font-bold text-xs uppercase border border-blue-400/30">
                  {student.fullName.charAt(0)}
                </div>
                <div className="text-left hidden md:block">
                  <div className="text-xs font-semibold text-white leading-tight">
                    {student.fullName}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Roll: <span className="text-amber-400 font-mono font-medium">{student.rollNumber}</span> • {student.district}
                  </div>
                </div>
                {!examInProgress && (
                  <button
                    onClick={onLogout}
                    title="Change Student Profile"
                    className="ml-1 text-slate-400 hover:text-red-400 p-1 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                )}
              </div>
            ) : (
              !examInProgress && (
                <button
                  onClick={onOpenRegister}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold rounded-lg shadow-md transition-all flex items-center space-x-1.5"
                >
                  <User className="w-4 h-4" />
                  <span>Register Candidate</span>
                </button>
              )
            )}
          </div>

        </div>
      </div>
    </header>
  );
};
