import React, { useState } from 'react';
import { CORE_COMPETENCIES } from '../data/cvData';
import { Shield, Cloud, Terminal, CheckCircle } from 'lucide-react';

export const Competencies: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Shield className="w-5 h-5 text-[#0071E3]" />;
      case 1:
        return <Cloud className="w-5 h-5 text-[#34C759]" />;
      case 2:
        return <CheckCircle className="w-5 h-5 text-[#AF52DE]" />;
      case 3:
        return <Terminal className="w-5 h-5 text-[#FF9500]" />;
      default:
        return <Shield className="w-5 h-5 text-[#0071E3]" />;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-black/[0.05]" id="competencies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider mb-2">
            Strategic & Technical Competency Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F]">
            Core Competencies & Frameworks
          </h2>
          <p className="text-base text-[#6E6E73] mt-2">
            Over 20 years of proven technical depth and executive risk management across Fortune 500 enterprises, hyper-growth scaleups, and modern AI platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_COMPETENCIES.map((category, idx) => {
            const isHovered = activeCategoryIndex === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveCategoryIndex(idx)}
                onMouseLeave={() => setActiveCategoryIndex(null)}
                className={`p-6 rounded-3xl bg-[#FBFBFD] border border-black/[0.06] transition-all duration-300 flex flex-col justify-between ${
                  isHovered ? 'shadow-md border-black/[0.15] -translate-y-1' : 'hover:shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center bg-white shadow-xs"
                    >
                      {getCategoryIcon(idx)}
                    </div>
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: category.accent }}
                    />
                  </div>

                  <h3 className="text-base font-bold text-[#1D1D1F] mb-4">
                    {category.title}
                  </h3>

                  <ul className="space-y-2.5">
                    {category.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="text-xs text-[#424245] flex items-start gap-2 leading-relaxed"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                          style={{ backgroundColor: category.accent }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-black/[0.04] text-[11px] text-[#86868B] font-medium">
                  {category.items.length} Verified Areas
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
