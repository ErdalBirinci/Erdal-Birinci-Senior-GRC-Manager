import React, { useState } from 'react';
import { EXPERIENCE_DATA } from '../data/cvData';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(EXPERIENCE_DATA[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-20 bg-[#FBFBFD] border-b border-black/[0.05]" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider mb-2">
            20+ Years of Enterprise Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F]">
            Professional Experience
          </h2>
          <p className="text-base text-[#6E6E73] mt-2">
            Executive governance and security engineering leadership across Germany, the Netherlands, the Nordics, and Turkey spanning multinational corporations and Fortune 500 giants.
          </p>
        </div>

        <div className="space-y-4">
          {EXPERIENCE_DATA.map((exp, idx) => {
            const isExpanded = expandedId === exp.id;
            const isLatest = idx === 0;

            return (
              <div
                key={exp.id}
                className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'border-[#0071E3]/30 shadow-md ring-1 ring-blue-500/10'
                    : 'border-black/[0.06] hover:border-black/[0.12] shadow-xs'
                }`}
              >
                {/* Header bar click to toggle */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                        isLatest
                          ? 'bg-[#0071E3] text-white shadow-xs'
                          : 'bg-[#F5F5F7] text-[#1D1D1F]'
                      }`}
                    >
                      <Briefcase className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-[#1D1D1F]">
                          {exp.role}
                        </h3>
                        <span className="text-sm font-semibold text-[#0071E3]">
                          @{exp.company}
                        </span>
                      </div>

                      {/* Clean unboxed metadata (anti-slop) */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#6E6E73] font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#86868B]" />
                          {exp.period}
                        </span>
                        <span aria-hidden="true" className="text-black/20">·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#86868B]" />
                          {exp.location}
                        </span>
                        <span aria-hidden="true" className="text-black/20">·</span>
                        <span>{exp.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-black/[0.04]">
                    <div className="text-xs font-medium text-[#6E6E73] line-clamp-1 max-w-xs hidden xl:block">
                      {exp.keyAchievement}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-black/[0.03] flex items-center justify-center text-[#86868B]">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Collapsible content */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-black/[0.04] bg-[#FBFBFD] animate-in fade-in duration-200">
                    {/* Key achievement banner */}
                    <div className="p-3.5 rounded-2xl bg-white border border-black/[0.06] mb-5 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0071E3] shrink-0 mt-0.5" />
                      <div className="text-xs text-[#1D1D1F] font-semibold">
                        Key Milestone:{' '}
                        <span className="font-normal text-[#424245]">
                          {exp.keyAchievement}
                        </span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-5">
                      <div className="text-xs font-bold text-[#86868B] uppercase tracking-wider mb-2.5">
                        Core Responsibilities & Executive Governance Outcomes
                      </div>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li
                            key={rIdx}
                            className="flex items-start gap-2.5 text-xs text-[#424245] leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] mt-1.5 shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies & Frameworks */}
                    <div>
                      <div className="text-xs font-bold text-[#86868B] uppercase tracking-wider mb-2">
                        Governed Technologies & Standards
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-lg bg-white border border-black/[0.06] text-[#1D1D1F] text-[11px] font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
