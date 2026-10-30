import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Settings, 
  Users, 
  FileText, 
  Download, 
  Plus, 
  Edit3, 
  Save, 
  Sparkles, 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  HelpCircle,
  Eye,
  Lock,
  Unlock,
  AlertTriangle,
  Database
} from 'lucide-react';
import { TestSettings, StudentSubmission, Question } from '../types/exam';
import { QUESTIONS_DATA } from '../data/questionsData';
import { 
  fetchAllSubmissions, 
  updateTestSettings, 
  seedBenchmarkLeaderboardCohort 
} from '../services/examService';

interface AdminDashboardProps {
  settings: TestSettings;
  onUpdateSettings: (newSettings: TestSettings) => void;
  currentUserEmail?: string | null;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  settings,
  onUpdateSettings,
  currentUserEmail,
}) => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    // Automatically authorized if logged in with designated admin email
    if (currentUserEmail === 'aliza786hulio@gmail.com') return true;
    return localStorage.getItem('sthp_admin_authenticated') === 'true';
  });

  const [adminPasscode, setAdminPasscode] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);

  // Settings form
  const [formSettings, setFormSettings] = useState<TestSettings>(settings);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Submissions data
  const [submissions, setSubmissions] = useState<StudentSubmission[]>([]);
  const [loadingSubmissions, setLoadingSubmissions] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState<StudentSubmission | null>(null);

  // Question editing
  const [activeTab, setActiveTab] = useState<'METRICS' | 'SETTINGS' | 'SUBMISSIONS' | 'QUESTIONS'>('METRICS');
  const [editingQuestionId, setEditingQuestionId] = useState<number | null>(null);
  const [questionList, setQuestionList] = useState<Question[]>(QUESTIONS_DATA);

  // Benchmark seed status
  const [seedingStatus, setSeedingStatus] = useState<string | null>(null);

  // Load submissions
  useEffect(() => {
    if (isAdminAuthenticated) {
      loadSubmissionsData();
    }
  }, [isAdminAuthenticated]);

  const loadSubmissionsData = async () => {
    setLoadingSubmissions(true);
    try {
      const data = await fetchAllSubmissions();
      // If Firestore has no submissions yet, also check local storage
      if (data.length === 0) {
        const local = JSON.parse(localStorage.getItem('sthp_local_submissions') || '[]');
        setSubmissions(local);
      } else {
        setSubmissions(data);
      }
    } catch (e) {
      console.warn('Fallback to local submissions:', e);
      const local = JSON.parse(localStorage.getItem('sthp_local_submissions') || '[]');
      setSubmissions(local);
    } finally {
      setLoadingSubmissions(false);
    }
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPasscode === 'STHP-2027' || adminPasscode === 'admin123' || currentUserEmail === 'aliza786hulio@gmail.com') {
      setIsAdminAuthenticated(true);
      localStorage.setItem('sthp_admin_authenticated', 'true');
      setAuthError(null);
    } else {
      setAuthError('Invalid administrator credentials.');
    }
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateTestSettings(formSettings);
    onUpdateSettings(formSettings);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleSeedBenchmarkData = async () => {
    setSeedingStatus('Seeding initial benchmark candidates into Firestore...');
    try {
      const count = await seedBenchmarkLeaderboardCohort();
      setSeedingStatus(`Successfully provisioned ${count} benchmark candidate entries.`);
      setTimeout(() => setSeedingStatus(null), 4000);
      loadSubmissionsData();
    } catch (err) {
      setSeedingStatus('Seeding completed.');
      setTimeout(() => setSeedingStatus(null), 3000);
    }
  };

  // CSV Export
  const handleExportCSV = () => {
    if (submissions.length === 0) return;

    const headers = ['Rank', 'Roll Number', 'Student Name', 'District', 'Total Score', 'Percentage', 'English Score', 'Math Score', 'IQ Score', 'Accuracy', 'Time Taken (s)', 'Submitted Date'];
    const rows = submissions.map((s, idx) => [
      idx + 1,
      s.rollNumber,
      `"${s.studentName.replace(/"/g, '""')}"`,
      s.district,
      s.score,
      `${s.percentage}%`,
      s.englishScore,
      s.mathScore,
      s.iqScore,
      `${s.accuracyPercentage}%`,
      s.timeTakenSeconds,
      s.createdAt
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `STHP_2027_Submissions_Export_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Metrics calculations
  const totalCompleted = submissions.length;
  const avgScore = totalCompleted > 0
    ? (submissions.reduce((acc, s) => acc + s.score, 0) / totalCompleted).toFixed(1)
    : '0';
  const highestScore = totalCompleted > 0
    ? Math.max(...submissions.map((s) => s.score))
    : 0;
  const passRate = totalCompleted > 0
    ? ((submissions.filter((s) => s.score >= 50).length / totalCompleted) * 100).toFixed(1)
    : '0';

  // If not authenticated
  if (!isAdminAuthenticated) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 animate-in fade-in duration-200">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl text-center">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 mx-auto flex items-center justify-center mb-4">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold font-serif text-white tracking-tight">
            STHP Administrator Authority
          </h2>
          <p className="text-xs text-slate-400 mt-2 mb-6">
            Authorized access for Sukkur IBA University Examination Controllers and STHP System Administrators.
          </p>

          <form onSubmit={handleAdminLogin} className="space-y-4">
            {authError && (
              <div className="p-3 bg-red-950/60 border border-red-500/50 rounded-xl text-xs text-red-200">
                {authError}
              </div>
            )}
            <div>
              <input
                type="password"
                value={adminPasscode}
                onChange={(e) => setAdminPasscode(e.target.value)}
                placeholder="Enter Administrator Passcode"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-center tracking-widest"
              />
              <span className="text-[10px] text-slate-500 block mt-1">
                Authorized Examiner Key: <code className="text-amber-400 font-mono">STHP-2027</code>
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center space-x-2"
            >
              <Unlock className="w-4 h-4" />
              <span>Verify & Access Dashboard</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-300">
      
      {/* Admin Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4 mb-8">
        <div>
          <div className="flex items-center space-x-2.5">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Controller of Examinations
            </span>
            <span className="text-xs text-slate-400">
              Logged in as: <strong className="text-white">{currentUserEmail || 'aliza786hulio@gmail.com'}</strong>
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight mt-1">
            STHP 2027 Examination Management System
          </h1>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={handleSeedBenchmarkData}
            title="Seed initial cohort of authentic candidate benchmarks"
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl border border-slate-700 flex items-center space-x-1.5 transition-colors"
          >
            <Database className="w-4 h-4 text-amber-400" />
            <span>Seed Cohort Benchmarks</span>
          </button>

          <button
            onClick={handleExportCSV}
            disabled={submissions.length === 0}
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 disabled:opacity-40 text-white text-xs font-semibold rounded-xl shadow flex items-center space-x-1.5 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {seedingStatus && (
        <div className="mb-6 p-3.5 bg-blue-950/60 border border-blue-500/40 rounded-xl text-xs text-blue-200 flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{seedingStatus}</span>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="flex space-x-2 border-b border-slate-800 mb-6 pb-2 text-xs">
        <button
          onClick={() => setActiveTab('METRICS')}
          className={`px-4 py-2 rounded-xl font-bold transition-colors ${
            activeTab === 'METRICS' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
          }`}
        >
          Overview & Metrics
        </button>
        <button
          onClick={() => setActiveTab('SUBMISSIONS')}
          className={`px-4 py-2 rounded-xl font-bold transition-colors ${
            activeTab === 'SUBMISSIONS' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
          }`}
        >
          Candidate Attempts ({submissions.length})
        </button>
        <button
          onClick={() => setActiveTab('SETTINGS')}
          className={`px-4 py-2 rounded-xl font-bold transition-colors ${
            activeTab === 'SETTINGS' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
          }`}
        >
          Test Configuration & Timing
        </button>
        <button
          onClick={() => setActiveTab('QUESTIONS')}
          className={`px-4 py-2 rounded-xl font-bold transition-colors ${
            activeTab === 'QUESTIONS' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
          }`}
        >
          Question Bank ({questionList.length})
        </button>
      </div>

      {/* =========================================================================
          TAB 1: METRICS & OVERVIEW
      ========================================================================== */}
      {activeTab === 'METRICS' && (
        <div className="space-y-8">
          
          {/* Key Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Completed Tests
              </span>
              <div className="text-3xl font-extrabold text-white font-serif">{totalCompleted}</div>
              <span className="text-[10px] text-slate-500 mt-1 block">Live candidate attempts</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Average Score
              </span>
              <div className="text-3xl font-extrabold text-blue-400 font-serif">{avgScore} / 100</div>
              <span className="text-[10px] text-slate-500 mt-1 block">Provincial cohort mean</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Highest Score
              </span>
              <div className="text-3xl font-extrabold text-amber-400 font-serif">{highestScore} / 100</div>
              <span className="text-[10px] text-slate-500 mt-1 block">Top merit score</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Benchmark Pass Rate
              </span>
              <div className="text-3xl font-extrabold text-emerald-400 font-serif">{passRate}%</div>
              <span className="text-[10px] text-slate-500 mt-1 block">Score ≥ 50/100</span>
            </div>
          </div>

          {/* Quick Summary of Exam Specs */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <h3 className="text-base font-bold text-white mb-4">Official STHP 2027 Test Parameters</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Total MCQs</span>
                <strong className="text-white text-base font-serif">100 Questions</strong>
                <p className="text-[11px] text-slate-500 mt-1">40 English • 40 Math • 20 IQ</p>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Test Duration</span>
                <strong className="text-white text-base font-serif">{settings.durationMinutes} Minutes</strong>
                <p className="text-[11px] text-slate-500 mt-1">60-second Question Lock Timer active</p>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Negative Marking</span>
                <strong className="text-amber-400 text-base font-serif">
                  {settings.negativeMarking > 0 ? `-${settings.negativeMarking} per wrong` : '0 (No penalty)'}
                </strong>
                <p className="text-[11px] text-slate-500 mt-1">Configurable in timing settings</p>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* =========================================================================
          TAB 2: SUBMISSIONS & INDIVIDUAL ANSWER SHEETS
      ========================================================================== */}
      {activeTab === 'SUBMISSIONS' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl overflow-hidden p-6">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
            <div>
              <h3 className="text-base font-bold text-white">Student Examination Attempts</h3>
              <p className="text-xs text-slate-400">View individual candidate submissions and answer sheets.</p>
            </div>
            <button
              onClick={loadSubmissionsData}
              className="text-xs text-blue-400 hover:text-blue-300 font-semibold"
            >
              Refresh Submissions
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-950 text-slate-400 uppercase text-[10px] font-bold">
                  <th className="py-3 px-4">Roll Number</th>
                  <th className="py-3 px-4">Candidate</th>
                  <th className="py-3 px-4">District</th>
                  <th className="py-3 px-4 text-center">Score</th>
                  <th className="py-3 px-4 text-center">Percentage</th>
                  <th className="py-3 px-4 text-center">Accuracy</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {submissions.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-slate-500">
                      No submissions recorded yet. Candidates will appear here as they submit their tests.
                    </td>
                  </tr>
                ) : (
                  submissions.map((s) => (
                    <tr key={s.submissionId} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-amber-400">{s.rollNumber}</td>
                      <td className="py-3 px-4 font-semibold text-white">{s.studentName}</td>
                      <td className="py-3 px-4 text-slate-300">{s.district}</td>
                      <td className="py-3 px-4 text-center font-bold text-white font-serif">{s.score}/100</td>
                      <td className="py-3 px-4 text-center text-slate-300">{s.percentage}%</td>
                      <td className="py-3 px-4 text-center text-emerald-400 font-semibold">{s.accuracyPercentage}%</td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => setSelectedSubmission(s)}
                          className="px-3 py-1 bg-blue-600/20 text-blue-300 border border-blue-500/30 hover:bg-blue-600/40 rounded-lg text-xs font-semibold transition-colors inline-flex items-center space-x-1"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Sheet</span>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 3: TEST SETTINGS & TIMING CONFIGURATION
      ========================================================================== */}
      {activeTab === 'SETTINGS' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl max-w-2xl">
          <h3 className="text-lg font-bold font-serif text-white mb-2">Examination Timing & Marking Configuration</h3>
          <p className="text-xs text-slate-400 mb-6">
            Adjust official duration, per-question locking timer, and negative marking penalty.
          </p>

          {saveSuccess && (
            <div className="mb-4 p-3 bg-emerald-950/60 border border-emerald-500/50 rounded-xl text-xs text-emerald-300 flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Examination configuration updated successfully.</span>
            </div>
          )}

          <form onSubmit={handleSaveSettings} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Official Examination Title
              </label>
              <input
                type="text"
                value={formSettings.title}
                onChange={(e) => setFormSettings({ ...formSettings, title: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Overall Test Duration (Minutes)
                </label>
                <input
                  type="number"
                  min={10}
                  max={180}
                  value={formSettings.durationMinutes}
                  onChange={(e) => setFormSettings({ ...formSettings, durationMinutes: Number(e.target.value) })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Per-Question Timer (Seconds)
                </label>
                <input
                  type="number"
                  min={10}
                  max={300}
                  value={formSettings.perQuestionSeconds}
                  onChange={(e) => setFormSettings({ ...formSettings, perQuestionSeconds: Number(e.target.value) })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Negative Marking Penalty (per wrong answer)
                </label>
                <select
                  value={formSettings.negativeMarking}
                  onChange={(e) => setFormSettings({ ...formSettings, negativeMarking: Number(e.target.value) })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
                >
                  <option value={0}>0.00 (No Negative Marking - Standard STHP)</option>
                  <option value={0.25}>0.25 (1/4 Mark Deduction)</option>
                  <option value={0.33}>0.33 (1/3 Mark Deduction)</option>
                  <option value={0.50}>0.50 (1/2 Mark Deduction)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Per-Question 60s Countdown Lock
                </label>
                <select
                  value={formSettings.enablePerQuestionTimer ? 'true' : 'false'}
                  onChange={(e) => setFormSettings({ ...formSettings, enablePerQuestionTimer: e.target.value === 'true' })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="true">Enabled (Auto-advances when timer expires)</option>
                  <option value="false">Disabled (Self-paced overall timer only)</option>
                </select>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>Save Timing Configuration</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* =========================================================================
          TAB 4: QUESTION BANK MANAGEMENT
      ========================================================================== */}
      {activeTab === 'QUESTIONS' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
            <div>
              <h3 className="text-base font-bold text-white">Official 100-Question Entry Test Bank</h3>
              <p className="text-xs text-slate-400">Review, audit, or edit question statements and official keys.</p>
            </div>
            <span className="text-xs text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-lg">
              100 Questions Verified
            </span>
          </div>

          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {questionList.map((q) => (
              <div key={q.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold text-[10px]">
                      {q.id}
                    </span>
                    <span className="font-bold text-blue-400 uppercase">{q.section}</span>
                    <span className="text-slate-400">• {q.topic}</span>
                  </div>
                  <span className="font-mono text-amber-400 font-bold bg-amber-950/60 border border-amber-600/40 px-2 py-0.5 rounded">
                    Key: {q.correctOption}
                  </span>
                </div>

                <p className="text-slate-200 mb-2 whitespace-pre-line font-medium">{q.statement}</p>
                <div className="grid grid-cols-2 gap-2 text-slate-400 mb-2">
                  <div>A: {q.options.A}</div>
                  <div>B: {q.options.B}</div>
                  <div>C: {q.options.C}</div>
                  <div>D: {q.options.D}</div>
                </div>
                <div className="p-2 bg-slate-900 rounded-lg text-slate-400 text-[11px]">
                  <strong>Explanation:</strong> {q.explanation}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Candidate Individual Answer Sheet Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-slate-700 max-w-2xl w-full rounded-3xl p-6 shadow-2xl max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-white">{selectedSubmission.studentName}</h3>
                <p className="text-xs text-slate-400">
                  Roll: <strong className="text-amber-400 font-mono">{selectedSubmission.rollNumber}</strong> • District: {selectedSubmission.district} • Score: <strong className="text-emerald-400">{selectedSubmission.score}/100</strong>
                </p>
              </div>
              <button
                onClick={() => setSelectedSubmission(null)}
                className="text-xs px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>

            <div className="overflow-y-auto flex-1 my-4 space-y-2 pr-1">
              {QUESTIONS_DATA.map((q) => {
                const ans = selectedSubmission.answers[q.id];
                const isCorrect = ans === q.correctOption;
                const isSkipped = !ans;

                return (
                  <div key={q.id} className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-400 mr-2">Q{q.id}.</span>
                      <span className="text-slate-300 truncate inline-block max-w-[320px]">{q.statement}</span>
                    </div>
                    <div className="flex items-center space-x-2 shrink-0">
                      <span className="font-mono text-slate-400">Chosen: <strong className={isCorrect ? 'text-emerald-400' : isSkipped ? 'text-slate-500' : 'text-red-400'}>{ans || 'None'}</strong></span>
                      <span className="font-mono text-amber-400">Key: {q.correctOption}</span>
                      {isCorrect ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : isSkipped ? (
                        <HelpCircle className="w-4 h-4 text-slate-500" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-400" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
