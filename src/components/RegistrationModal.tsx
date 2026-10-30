import React, { useState } from 'react';
import { User, MapPin, School, Mail, CheckCircle2, Sparkles, X, LogIn } from 'lucide-react';
import { StudentProfile } from '../types/exam';
import { saveStudentProfile } from '../services/examService';
import { auth, googleProvider, signInWithPopup } from '../firebase';

const SINDH_DISTRICTS = [
  'Sukkur',
  'Khairpur',
  'Larkana',
  'Ghotki',
  'Shikarpur',
  'Jacobabad',
  'Kashmore-Kandhkot',
  'Kambar-Shahdadkot',
  'Hyderabad',
  'Matiari',
  'Tando Allahyar',
  'Tando Muhammad Khan',
  'Badin',
  'Sujawal',
  'Thatta',
  'Jamshoro',
  'Dadu',
  'Mirpurkhas',
  'Umerkot',
  'Tharparkar (Mithi)',
  'Shaheed Benazirabad (Nawabshah)',
  'Sanghar',
  'Naushahro Feroze',
  'Karachi Central',
  'Karachi East',
  'Karachi South',
  'Karachi West',
  'Korangi',
  'Malir',
  'Keamari'
];

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (profile: StudentProfile) => void;
  existingProfile?: StudentProfile | null;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  existingProfile,
}) => {
  const [fullName, setFullName] = useState(existingProfile?.fullName || '');
  const [email, setEmail] = useState(existingProfile?.email || '');
  const [district, setDistrict] = useState(existingProfile?.district || 'Sukkur');
  const [collegeOrSchool, setCollegeOrSchool] = useState(existingProfile?.collegeOrSchool || '');
  const [authUid, setAuthUid] = useState<string | null>(auth.currentUser?.uid || null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleGoogleSignIn = async () => {
    setError(null);
    try {
      const res = await signInWithPopup(auth, googleProvider);
      if (res.user) {
        if (res.user.displayName) setFullName(res.user.displayName);
        if (res.user.email) setEmail(res.user.email);
        setAuthUid(res.user.uid);
      }
    } catch (err: any) {
      console.warn('Google sign-in optional notice:', err);
      setError('Google Sign-in was dismissed. You can continue by entering details manually.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError('Please provide your full legal name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const generatedRollNumber = existingProfile?.rollNumber || 
      `STHP-2027-${Math.floor(1000 + Math.random() * 9000)}`;

    const userId = existingProfile?.userId || 
      authUid || 
      auth.currentUser?.uid ||
      `user_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

    const profile: StudentProfile = {
      userId,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      rollNumber: generatedRollNumber,
      district,
      collegeOrSchool: collegeOrSchool.trim() || 'Govt Degree College',
      createdAt: existingProfile?.createdAt || new Date().toISOString(),
    };

    try {
      await saveStudentProfile(profile);
      localStorage.setItem('sthp_student_profile', JSON.stringify(profile));
      onSuccess(profile);
      onClose();
    } catch (err) {
      console.warn('Profile sync notice:', err);
      localStorage.setItem('sthp_student_profile', JSON.stringify(profile));
      onSuccess(profile);
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden text-white">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 px-6 py-5 border-b border-slate-700 relative">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500/20 text-blue-300 rounded-lg border border-blue-400/30">
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif tracking-tight text-white">
                STHP 2027 Candidate Registration
              </h3>
              <p className="text-xs text-blue-200">
                Official Sindh Talent Hunt Program Computer-Based Test Roll
              </p>
            </div>
          </div>
          {existingProfile && (
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Quick Google Sign In */}
        <div className="px-6 pt-5 pb-1">
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-xs font-semibold text-white flex items-center justify-center space-x-2 transition-colors shadow-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span>{auth.currentUser ? 'Google Account Connected' : 'Auto-fill with Google'}</span>
          </button>
          <div className="relative my-4 text-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-800"></div></div>
            <span className="relative bg-slate-900 px-3 text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Or enter manually</span>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4">
          {error && (
            <div className="p-3 bg-red-900/40 border border-red-500/50 rounded-lg text-xs text-red-200">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-blue-400" />
              Candidate Full Name (as on Matric/Intermediate certificate) *
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Suhail Ahmed Brohi"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              Email Address (Private - Never displayed publicly) *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. suhail.brohi@example.com"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                Sindh Domicile District *
              </label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                {SINDH_DISTRICTS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                <School className="w-3.5 h-3.5 text-blue-400" />
                College / Higher Secondary School
              </label>
              <input
                type="text"
                value={collegeOrSchool}
                onChange={(e) => setCollegeOrSchool(e.target.value)}
                placeholder="e.g. Govt Degree College, Sukkur"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
          </div>

          <div className="p-3.5 bg-blue-950/40 border border-blue-800/40 rounded-xl flex items-start space-x-3 text-xs text-blue-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Upon confirmation, an official Sukkur IBA STHP candidate slip with your roll number will be generated for your computer-based test session.
            </p>
          </div>

          <div className="pt-2 flex items-center justify-end space-x-3">
            {existingProfile && (
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-slate-400 hover:text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white text-xs font-bold rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center space-x-2"
            >
              <span>{existingProfile ? 'Save Changes' : 'Generate Candidate Slip & Proceed'}</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
