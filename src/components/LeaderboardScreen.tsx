import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Search, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  RefreshCw,
  Medal
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
  const pageSize = 15;

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

  const uniqueDistricts = Array.from(new Set(entries.map((e) => e.district).filter(Boolean))).sort();

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

  const totalPages = Math.max(1, Math.ceil(filteredEntries.length / pageSize));
  const paginatedEntries = filteredEntries.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const currentStudentRank = currentStudent
    ? entries.findIndex((e) => e.userId === currentStudent.userId) + 1
    : 0;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      
      {/* Page Title */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Leaderboard</h2>
          <p className="text-xs text-slate-500 mt-0.5">Rankings for STHP 2027 Mock Test</p>
        </div>
        
        {currentStudentRank > 0 ? (
          <div className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-700">
            Your Rank: #{currentStudentRank} of {entries.length}
          </div>
        ) : (
          <button
            onClick={onTakeExamClick}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            Take Test to Join Rankings
          </button>
        )}
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white border border-slate-200 rounded-xl p-3 mb-4 flex flex-col sm:flex-row gap-3 items-center justify-between shadow-2xs">
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search student name..."
            className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600"
          />
        </div>

        <div className="flex items-center space-x-2 text-xs text-slate-500 w-full sm:w-auto">
          <span>District:</span>
          <select
            value={districtFilter}
            onChange={(e) => {
              setDistrictFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-700 focus:outline-none focus:border-blue-600"
          >
            <option value="ALL">All Districts</option>
            {uniqueDistricts.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Rankings Table */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold text-[11px]">
                <th className="py-3 px-4 text-center w-14">Rank</th>
                <th className="py-3 px-4">Student Name</th>
                <th className="py-3 px-4">District</th>
                <th className="py-3 px-4 text-center">Score</th>
                <th className="py-3 px-4 text-right">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-slate-400">
                    <RefreshCw className="w-5 h-5 animate-spin mx-auto mb-1 text-blue-600" />
                    Loading leaderboard...
                  </td>
                </tr>
              ) : paginatedEntries.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-slate-500">
                    No submissions found.
                  </td>
                </tr>
              ) : (
                paginatedEntries.map((entry, idx) => {
                  const rank = (currentPage - 1) * pageSize + idx + 1;
                  const isCurrent = currentStudent?.userId === entry.userId;

                  let rankDisplay = <span className="font-semibold text-slate-500">#{rank}</span>;
                  if (rank === 1) rankDisplay = <span className="font-bold text-amber-600">🥇 1</span>;
                  else if (rank === 2) rankDisplay = <span className="font-bold text-slate-500">🥈 2</span>;
                  else if (rank === 3) rankDisplay = <span className="font-bold text-amber-700">🥉 3</span>;

                  return (
                    <tr
                      key={entry.submissionId}
                      className={isCurrent ? 'bg-blue-50/70 font-medium' : 'hover:bg-slate-50'}
                    >
                      <td className="py-3 px-4 text-center">{rankDisplay}</td>
                      <td className="py-3 px-4 font-semibold text-slate-800">
                        {entry.studentName}
                        {isCurrent && (
                          <span className="ml-2 text-[10px] bg-blue-600 text-white px-1.5 py-0.5 rounded font-bold">
                            You
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-slate-600">{entry.district}</td>
                      <td className="py-3 px-4 text-center font-bold text-blue-600">
                        {entry.score} <span className="text-[10px] text-slate-400 font-normal">/ 100</span>
                      </td>
                      <td className="py-3 px-4 text-right text-slate-500 font-mono">
                        {formatDuration(entry.timeTakenSeconds)}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Page {currentPage} of {totalPages}</span>
            <div className="flex space-x-1">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                className="px-2.5 py-1 rounded border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                className="px-2.5 py-1 rounded border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};
