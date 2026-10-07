import React, { useState } from 'react';
import { CERTIFICATIONS_DATA } from '../data/cvData';
import { Award, CheckCircle2, Shield, Cloud, Terminal } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All (13+)' },
    { id: 'Audit & Governance', label: 'Audit & GRC' },
    { id: 'Cloud Architecture', label: 'Cloud Architecture' },
    { id: 'Cybersecurity Specializations', label: 'Cybersecurity Specializations' },
  ];

  const filteredCerts = filterCategory === 'all'
    ? CERTIFICATIONS_DATA
    : CERTIFICATIONS_DATA.filter((c) => c.category === filterCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Audit & Governance':
        return <Shield className="w-4 h-4 text-[#0071E3]" />;
      case 'Cloud Architecture':
        return <Cloud className="w-4 h-4 text-[#34C759]" />;
      default:
        return <Terminal className="w-4 h-4 text-[#AF52DE]" />;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-black/[0.05]" id="certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider mb-2">
              Internationally Accredited Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F]">
              Certifications & Lead Auditor Credentials
            </h2>
            <p className="text-base text-[#6E6E73] mt-2 max-w-xl">
              ISO/IEC 27001 Lead Auditor, ISO 42001 (AI Management), Oracle, Microsoft, Google, AWS, and IBM validated enterprise credentials.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-black/[0.04] rounded-2xl overflow-x-auto scrollbar-none self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  filterCategory === cat.id
                    ? 'bg-white text-[#1D1D1F] shadow-xs font-semibold'
                    : 'text-[#6E6E73] hover:text-[#1D1D1F]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-3xl bg-[#FBFBFD] border border-black/[0.06] hover:border-black/[0.14] hover:shadow-sm transition-all duration-200 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-2xl bg-white shadow-xs flex items-center justify-center shrink-0 border border-black/[0.04]">
                {getCategoryIcon(cert.category)}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[11px] font-medium text-[#86868B]">
                    {cert.category}
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[#1D1D1F] leading-snug line-clamp-2">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-2 mt-3 pt-2 border-t border-black/[0.04] text-[11px] text-[#6E6E73]">
                  <span className="font-medium text-[#1D1D1F]">{cert.badge}</span>
                  {cert.validity && (
                    <>
                      <span aria-hidden="true" className="text-black/20">·</span>
                      <span>{cert.validity}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lead Auditor Highlight Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-blue-50/60 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0071E3] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#1D1D1F]">
                ISO/IEC 27001 Lead Auditor & ISO 42001 (AIMS) Expertise
              </div>
              <p className="text-xs text-[#515154] mt-0.5">
                Accredited authority to execute 1st and 3rd party certification and surveillance audits under international bodies.
              </p>
            </div>
          </div>
          <div className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full bg-white text-[#0071E3] border border-blue-200 shrink-0">
            Accredited Lead Auditor
          </div>
        </div>
      </div>
    </section>
  );
};
