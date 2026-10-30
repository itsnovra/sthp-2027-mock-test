import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Medal, 
  Search, 
  Filter, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  User, 
  Sparkles,
  MapPin,
  RefreshCw,
  Crown
} from 'lucide-react';
import { LeaderboardEntry, StudentProfile } from '../types/exam';
import { subscribeToLeaderboard } from '../services/examService';

interface LeaderboardScreenProps {
  currentStudent: StudentProfile | null;
  onTakeExamClick: () => void;
}

export const LeaderboardScreen: React.FC<LeaderboardScreenProps> = ({
  currentStudent,
  onTakeExamClick,
}) => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [districtFilter, setDistrictFilter] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  // Real-time Firestore subscription
  useEffect(() => {
    setLoading(true);
    const unsubscribe = subscribeToLeaderboard((sortedList) => {
      setEntries(sortedList);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const formatDuration = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}m ${s}s`;
  };

  // Unique districts for filter
  const uniqueDistricts = Array.from(new Set(entries.map((e) => e.district).filter(Boolean))).sort();

  // Filter entries
  const filteredEntries = entries.filter((e) => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      if (!e.studentName.toLowerCase().includes(q)) return false;
    }
    if (districtFilter !== 'ALL' && e.district !== districtFilter) {
      return false;
    }
    return true;
  });

  // Current student rank
  const currentStudentRank = currentStudent
    ? entries.findIndex((e) => e.userId === currentStudent.userId) + 1
    : 0;

  const currentStudentEntry = currentStudent
    ? entries.find((e) => e.userId === currentStudent.userId)
    : null;

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredEntries.length / pageSize));
  const paginatedEntries = filteredEntries.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  // Top 3 Podium
  const rank1 = entries[0];
  const rank2 = entries[1];
  const rank3 = entries[2];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-300">
      
      {/* Page Title & Subtitle */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-3">
          <Crown className="w-3.5 h-3.5" />
          <span>Real-Time Cloud Firestore Standings</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-white tracking-tight">
          STHP 2027 Live Global Leaderboard
        </h1>
        <p className="text-sm text-slate-400 mt-2 leading-relaxed">
          Official ranking of Sindh Talent Hunt Program candidates based on verified score, accuracy, and test completion duration.
        </p>
      </div>

      {/* Prominent Current Student Standings Banner (if registered/participated) */}
      {currentStudent && (
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-slate-900 border border-blue-500/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
              {currentStudentRank > 0 ? `#${currentStudentRank}` : '–'}
            </div>
            <div>
              <div className="text-xs font-semibold text-blue-300 uppercase tracking-wider">
                Your Current Merit Position
              </div>
              <div className="text-base font-bold text-white">
                {currentStudent.fullName} • <span className="font-mono text-amber-400">{currentStudent.rollNumber}</span>
              </div>
              <div className="text-xs text-slate-400">
                District: {currentStudent.district}
                {currentStudentEntry && ` • Score: ${currentStudentEntry.score}/100 (${currentStudentEntry.percentage}%)`}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {currentStudentRank > 0 ? (
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1.5 rounded-lg">
                Official Attempt Recorded
              </span>
            ) : (
              <button
                onClick={onTakeExamClick}
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center space-x-2"
              >
                <span>Attempt 100-MCQ Exam Now</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          TOP 3 PODIUM
      ========================================================================== */}
      {entries.length >= 3 && (
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end max-w-4xl mx-auto pt-8">
            
            {/* SILVER - RANK 2 */}
            <div className="order-2 md:order-1 flex flex-col items-center">
              <div className="relative mb-3 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-slate-800 border-4 border-slate-300 shadow-xl flex items-center justify-center text-slate-100 font-extrabold text-xl font-serif">
                  {rank2.studentName.charAt(0)}
                </div>
                <div className="absolute -bottom-2 bg-slate-300 text-slate-900 text-xs font-black px-2.5 py-0.5 rounded-full shadow">
                  #2 SILVER
                </div>
              </div>
              <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center shadow-lg">
                <div className="font-bold text-white text-sm truncate" title={rank2.studentName}>
                  {rank2.studentName}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">{rank2.district}</div>
                <div className="mt-3 pt-3 border-t border-slate-800 flex justify-around text-xs">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block font-semibold">Score</span>
                    <strong className="text-base font-bold text-slate-100 font-serif">{rank2.score}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block font-semibold">Accuracy</span>
                    <strong className="text-base font-bold text-emerald-400 font-serif">{rank2.accuracyPercentage}%</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block font-semibold">Time</span>
                    <strong className="text-xs font-mono text-slate-300 block mt-1">{formatDuration(rank2.timeTakenSeconds)}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* GOLD - RANK 1 (CHAMPION) */}
            <div className="order-1 md:order-2 flex flex-col items-center -mt-6">
              <div className="relative mb-3 flex flex-col items-center">
                <Crown className="w-8 h-8 text-amber-400 mb-1 animate-bounce" />
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-200 border-4 border-amber-300 shadow-2xl flex items-center justify-center text-slate-950 font-black text-2xl font-serif">
                  {rank1.studentName.charAt(0)}
                </div>
                <div className="absolute -bottom-2 bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 text-xs font-black px-3.5 py-0.5 rounded-full shadow-lg">
                  #1 GOLD • FIRST
                </div>
              </div>
              <div className="w-full bg-gradient-to-b from-amber-950/40 via-slate-900 to-slate-900 border-2 border-amber-500/50 rounded-2xl p-6 text-center shadow-2xl ring-1 ring-amber-400/20">
                <div className="font-extrabold text-white text-base truncate" title={rank1.studentName}>
                  {rank1.studentName}
                </div>
                <div className="text-xs text-amber-400 font-medium mt-0.5">{rank1.district}</div>
                <div className="mt-4 pt-4 border-t border-amber-500/20 flex justify-around text-xs">
                  <div>
                    <span className="text-[10px] text-amber-300/80 uppercase block font-semibold">Score</span>
                    <strong className="text-xl font-black text-amber-300 font-serif">{rank1.score}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-amber-300/80 uppercase block font-semibold">Accuracy</span>
                    <strong className="text-xl font-black text-emerald-400 font-serif">{rank1.accuracyPercentage}%</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-amber-300/80 uppercase block font-semibold">Time</span>
                    <strong className="text-xs font-mono text-slate-200 block mt-1">{formatDuration(rank1.timeTakenSeconds)}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* BRONZE - RANK 3 */}
            <div className="order-3 flex flex-col items-center">
              <div className="relative mb-3 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-slate-800 border-4 border-amber-700 shadow-xl flex items-center justify-center text-amber-200 font-extrabold text-xl font-serif">
                  {rank3.studentName.charAt(0)}
                </div>
                <div className="absolute -bottom-2 bg-amber-700 text-amber-100 text-xs font-black px-2.5 py-0.5 rounded-full shadow">
                  #3 BRONZE
                </div>
              </div>
              <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center shadow-lg">
                <div className="font-bold text-white text-sm truncate" title={rank3.studentName}>
                  {rank3.studentName}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">{rank3.district}</div>
                <div className="mt-3 pt-3 border-t border-slate-800 flex justify-around text-xs">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block font-semibold">Score</span>
                    <strong className="text-base font-bold text-amber-200 font-serif">{rank3.score}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block font-semibold">Accuracy</span>
                    <strong className="text-base font-bold text-emerald-400 font-serif">{rank3.accuracyPercentage}%</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block font-semibold">Time</span>
                    <strong className="text-xs font-mono text-slate-300 block mt-1">{formatDuration(rank3.timeTakenSeconds)}</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* =========================================================================
          FILTER & SEARCH TOOLBAR
      ========================================================================== */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search candidate name..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <Filter className="w-3.5 h-3.5" />
            <span>District:</span>
            <select
              value={districtFilter}
              onChange={(e) => {
                setDistrictFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
            >
              <option value="ALL">All Sindh Districts</option>
              {uniqueDistricts.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div className="text-xs text-slate-400 font-medium">
            Total Candidates: <strong className="text-white">{filteredEntries.length}</strong>
          </div>
        </div>

      </div>

      {/* =========================================================================
          COMPLETE STUDENT RANKING TABLE
      ========================================================================== */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                <th className="py-4 px-6 text-center w-16">Rank</th>
                <th className="py-4 px-6">Student Name</th>
                <th className="py-4 px-6">District</th>
                <th className="py-4 px-6 text-center">English (40)</th>
                <th className="py-4 px-6 text-center">Math (40)</th>
                <th className="py-4 px-6 text-center">IQ (20)</th>
                <th className="py-4 px-6 text-center">Total Score</th>
                <th className="py-4 px-6 text-center">Percentage</th>
                <th className="py-4 px-6 text-center">Accuracy</th>
                <th className="py-4 px-6 text-right">Time Taken</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {loading ? (
                <tr>
                  <td colSpan={10} className="py-12 text-center text-slate-500">
                    <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-blue-500" />
                    Loading verified STHP leaderboard standings...
                  </td>
                </tr>
              ) : paginatedEntries.length === 0 ? (
                <tr>
                  <td colSpan={10} className="py-12 text-center text-slate-500">
                    No student submissions found matching the criteria.
                  </td>
                </tr>
              ) : (
                paginatedEntries.map((entry, idx) => {
                  const globalRank = (currentPage - 1) * pageSize + idx + 1;
                  const isCurrent = currentStudent?.userId === entry.userId;

                  let rankBadge = (
                    <span className="font-bold text-slate-400 font-mono">#{globalRank}</span>
                  );
                  if (globalRank === 1) {
                    rankBadge = (
                      <span className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 inline-flex items-center justify-center font-black">
                        🥇 1
                      </span>
                    );
                  } else if (globalRank === 2) {
                    rankBadge = (
                      <span className="w-7 h-7 rounded-full bg-slate-300/20 text-slate-200 border border-slate-300/40 inline-flex items-center justify-center font-black">
                        🥈 2
                      </span>
                    );
                  } else if (globalRank === 3) {
                    rankBadge = (
                      <span className="w-7 h-7 rounded-full bg-amber-700/20 text-amber-200 border border-amber-700/40 inline-flex items-center justify-center font-black">
                        🥉 3
                      </span>
                    );
                  }

                  return (
                    <tr
                      key={entry.submissionId}
                      className={`transition-colors ${
                        isCurrent
                          ? 'bg-blue-900/30 hover:bg-blue-900/40 ring-1 ring-blue-500/40'
                          : 'hover:bg-slate-800/50'
                      }`}
                    >
                      <td className="py-3.5 px-6 text-center font-medium">
                        {rankBadge}
                      </td>
                      <td className="py-3.5 px-6 font-semibold text-white">
                        <div className="flex items-center space-x-2">
                          <span>{entry.studentName}</span>
                          {isCurrent && (
                            <span className="px-2 py-0.5 rounded-full bg-blue-500 text-white text-[9px] font-bold">
                              YOU
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3.5 px-6 text-slate-300">
                        {entry.district || 'Sindh'}
                      </td>
                      <td className="py-3.5 px-6 text-center font-mono text-slate-300">
                        {entry.englishScore ?? '–'}
                      </td>
                      <td className="py-3.5 px-6 text-center font-mono text-slate-300">
                        {entry.mathScore ?? '–'}
                      </td>
                      <td className="py-3.5 px-6 text-center font-mono text-slate-300">
                        {entry.iqScore ?? '–'}
                      </td>
                      <td className="py-3.5 px-6 text-center">
                        <span className="font-extrabold text-sm text-amber-400 font-serif">
                          {entry.score}
                        </span>
                        <span className="text-[10px] text-slate-500 font-sans">/100</span>
                      </td>
                      <td className="py-3.5 px-6 text-center font-medium text-slate-300">
                        {entry.percentage}%
                      </td>
                      <td className="py-3.5 px-6 text-center">
                        <span className="text-emerald-400 font-semibold">
                          {entry.accuracyPercentage}%
                        </span>
                      </td>
                      <td className="py-3.5 px-6 text-right font-mono text-slate-400">
                        {formatDuration(entry.timeTakenSeconds)}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <div>
              Showing Page <strong className="text-white">{currentPage}</strong> of <strong className="text-white">{totalPages}</strong>
            </div>
            <div className="flex items-center space-x-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 transition-colors flex items-center space-x-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev</span>
              </button>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 transition-colors flex items-center space-x-1"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
