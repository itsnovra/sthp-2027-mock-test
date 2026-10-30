import React from 'react';
import { Bell, Calendar, ChevronRight, FileText, CheckCircle } from 'lucide-react';

export const AnnouncementsView: React.FC<{ onEnterTests: () => void }> = ({ onEnterTests }) => {
  const announcements = [
    {
      id: 1,
      title: 'STHP 2027 Computer-Based Entry Test Schedule Announced',
      date: 'Official Notice • IBA Sukkur',
      priority: 'Important',
      content:
        'The Sindh Talent Hunt Program (STHP 2027) entrance examination will be conducted in computer-based testing (CBT) format. The test contains 100 MCQs (40 English, 40 Mathematics, 20 Intelligence/IQ) with an 80-minute duration. Candidates are advised to practice using this official mock portal.',
    },
    {
      id: 2,
      title: 'Examination Guidelines & Marking Criteria',
      date: 'Academic Directive',
      priority: 'Standard',
      content:
        'Each correct MCQ carries 1.0 mark. No negative marking is applied by default. Students may navigate freely between questions and review or alter their chosen responses before clicking Submit Test.',
    },
    {
      id: 3,
      title: 'Sindh District Merit Distribution & Domicile Verification',
      date: 'Admissions Office',
      priority: 'Notice',
      content:
        'Selected scholars will receive fully funded undergraduate education, monthly stipends, and residential allowances at Sukkur IBA University. Ensure your official domicile certificate is current.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Announcements</h2>
          <p className="text-xs text-slate-500 mt-0.5">Official STHP 2027 entrance updates and examination notices</p>
        </div>
        <button
          onClick={onEnterTests}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-xs flex items-center space-x-1.5 transition-colors"
        >
          <span>Enter Tests</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="space-y-4">
        {announcements.map((item) => (
          <div key={item.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                {item.priority}
              </span>
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {item.date}
              </span>
            </div>
            <h3 className="text-base font-semibold text-slate-800 mb-2">{item.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
