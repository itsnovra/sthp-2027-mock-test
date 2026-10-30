import React, { useState } from 'react';
import { User, MapPin, X, Sparkles } from 'lucide-react';
import { StudentProfile } from '../types/exam';
import { saveStudentProfile } from '../services/examService';
import { auth } from '../firebase';

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
  const [district, setDistrict] = useState(existingProfile?.district || 'Sukkur');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const generatedRollNumber = existingProfile?.rollNumber || 
      `STHP-2027-${Math.floor(1000 + Math.random() * 9000)}`;

    const userId = existingProfile?.userId || 
      auth.currentUser?.uid ||
      `user_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

    // Fallback email based on clean name or auth for compatibility with Firebase schema
    const email = existingProfile?.email || 
      auth.currentUser?.email || 
      `${fullName.trim().toLowerCase().replace(/[^a-z0-9]/g, '') || 'candidate'}@sthp2027.edu.pk`;

    const profile: StudentProfile = {
      userId,
      fullName: fullName.trim(),
      email,
      rollNumber: generatedRollNumber,
      district,
      collegeOrSchool: existingProfile?.collegeOrSchool || 'Sindh Secondary / Intermediate',
      createdAt: existingProfile?.createdAt || new Date().toISOString(),
    };

    try {
      await saveStudentProfile(profile);
      localStorage.setItem('sthp_student_profile', JSON.stringify(profile));
      onSuccess(profile);
      onClose();
    } catch (err) {
      console.warn('Profile saved locally:', err);
      localStorage.setItem('sthp_student_profile', JSON.stringify(profile));
      onSuccess(profile);
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
      <div className="bg-white border border-slate-200 w-full max-w-md rounded-2xl shadow-xl overflow-hidden text-slate-800">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
          <div>
            <h3 className="text-base font-bold text-slate-800">
              Student Registration
            </h3>
            <p className="text-xs text-slate-500">
              Enter your name and district to begin
            </p>
          </div>
          {existingProfile && (
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Minimal Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-blue-600" />
              Full Name *
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Suhail Ahmed"
              className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
              autoFocus
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              District *
            </label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            >
              {SINDH_DISTRICTS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div className="pt-2 flex items-center justify-end space-x-3">
            {existingProfile && (
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-slate-500 hover:text-slate-800 text-xs font-medium rounded-lg"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
            >
              <span>{isSubmitting ? 'Registering...' : 'Continue to Portal'}</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
