import React from 'react';
import { PERSONAL_INFO, EXPERIENCE_DATA, CERTIFICATIONS_DATA, CORE_COMPETENCIES } from '../data/cvData';
import { X, Printer, MapPin, Mail, Phone, Linkedin, Shield } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-black/10 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Top Action Bar */}
        <div className="p-4 sm:px-8 border-b border-black/[0.06] flex items-center justify-between bg-[#FBFBFD] sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#0071E3]" />
            <span className="text-sm font-bold text-[#1D1D1F]">
              Erdal Birinci — Executive Resume Summary
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1D1D1F] bg-white border border-black/10 hover:bg-neutral-50 rounded-xl transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#6E6E73]" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-black/[0.05] hover:bg-black/[0.1] flex items-center justify-center text-[#1D1D1F] transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-xs text-[#333336]">
          {/* Header */}
          <div className="border-b border-black/[0.08] pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              ERDAL BIRINCI
            </h1>
            <div className="text-sm font-semibold text-[#0071E3] mt-1">
              Senior Governance, Risk, and Compliance (GRC) Manager & Enterprise Security Architect
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-[#6E6E73]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {PERSONAL_INFO.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                {PERSONAL_INFO.phone}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                {PERSONAL_INFO.email}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5" />
                {PERSONAL_INFO.linkedinHandle}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold text-[#1D1D1F] uppercase tracking-wider mb-2 border-b border-black/[0.06] pb-1">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs leading-relaxed text-[#424245]">
              {PERSONAL_INFO.summaryText}
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="text-xs font-bold text-[#1D1D1F] uppercase tracking-wider mb-3 border-b border-black/[0.06] pb-1">
              CORE COMPETENCIES & FRAMEWORKS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CORE_COMPETENCIES.map((c, i) => (
                <div key={i} className="bg-[#FBFBFD] p-3 rounded-xl border border-black/[0.04]">
                  <div className="font-bold text-[#1D1D1F] mb-1.5">{c.title}</div>
                  <div className="space-y-1">
                    {c.items.slice(0, 4).map((item, idx) => (
                      <div key={idx} className="text-[11px] text-[#555] flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#0071E3]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-bold text-[#1D1D1F] uppercase tracking-wider mb-3 border-b border-black/[0.06] pb-1">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-5">
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-[#1D1D1F] text-sm">
                      {exp.company} — <span className="font-medium text-[#0071E3]">{exp.role}</span>
                    </span>
                    <span className="text-[11px] text-[#86868B]">{exp.period} | {exp.location}</span>
                  </div>
                  <ul className="space-y-1 mt-1.5 pl-3">
                    {exp.responsibilities.slice(0, 3).map((r, rIdx) => (
                      <li key={rIdx} className="list-disc text-[11px] text-[#424245] leading-relaxed">
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold text-[#1D1D1F] uppercase tracking-wider mb-3 border-b border-black/[0.06] pb-1">
              CERTIFICATIONS & CREDENTIALS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div key={cert.id} className="text-[11px] text-[#424245] flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span className="font-medium text-[#1D1D1F]">{cert.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
