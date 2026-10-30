import React from 'react';
import { BookOpen, User, Trophy, Bell, LayoutDashboard } from 'lucide-react';
import { StudentProfile } from '../types/exam';

interface HeaderProps {
  currentTab: 'home' | 'tests' | 'announcements' | 'leaderboard';
  setCurrentTab: (tab: 'home' | 'tests' | 'announcements' | 'leaderboard') => void;
  student: StudentProfile | null;
  onOpenRegister: () => void;
  examInProgress: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  student,
  onOpenRegister,
  examInProgress,
}) => {
  return (
    <header className="bg-white border-b border-slate-200 text-slate-800 sticky top-0 z-40 shadow-2xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Brand */}
          <button
            onClick={() => !examInProgress && setCurrentTab('home')}
            className="flex items-center space-x-2 text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
              IBA
            </div>
            <div>
              <span className="font-bold text-slate-900 text-sm block leading-tight">
                STHP 2027
              </span>
              <span className="text-[11px] text-slate-500 block leading-tight">
                Student Portal
              </span>
            </div>
          </button>

          {/* Clean Navigation (Hidden during exam) */}
          {!examInProgress ? (
            <nav className="flex items-center space-x-1 sm:space-x-2 text-xs font-semibold">
              <button
                onClick={() => setCurrentTab('home')}
                className={`px-3 py-1.5 rounded-lg transition-colors flex items-center space-x-1.5 ${
                  currentTab === 'home'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>Student Portal</span>
              </button>

              <button
                onClick={() => setCurrentTab('tests')}
                className={`px-3 py-1.5 rounded-lg transition-colors flex items-center space-x-1.5 ${
                  currentTab === 'tests'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Tests</span>
              </button>

              <button
                onClick={() => setCurrentTab('announcements')}
                className={`px-3 py-1.5 rounded-lg transition-colors flex items-center space-x-1.5 ${
                  currentTab === 'announcements'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Bell className="w-3.5 h-3.5" />
                <span>Announcements</span>
              </button>

              <button
                onClick={() => setCurrentTab('leaderboard')}
                className={`px-3 py-1.5 rounded-lg transition-colors flex items-center space-x-1.5 ${
                  currentTab === 'leaderboard'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Trophy className="w-3.5 h-3.5" />
                <span>Leaderboard</span>
              </button>
            </nav>
          ) : (
            <div className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Exam in progress
            </div>
          )}

          {/* Student Profile Indicator */}
          {!examInProgress && (
            <div className="flex items-center space-x-2">
              {student ? (
                <button
                  onClick={onOpenRegister}
                  className="flex items-center space-x-2 text-xs text-slate-700 hover:text-slate-900 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                  title="Edit registration details"
                >
                  <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-[10px]">
                    {student.fullName.charAt(0).toUpperCase()}
                  </div>
                  <span className="font-medium hidden sm:inline">{student.fullName}</span>
                </button>
              ) : (
                <button
                  onClick={onOpenRegister}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  Register
                </button>
              )}
            </div>
          )}

        </div>
      </div>
    </header>
  );
};
