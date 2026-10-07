import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  Cpu, 
  Lock, 
  BarChart3, 
  PieChart, 
  Layers,
  Sparkles
} from 'lucide-react';

export const GrcPostureDashboard: React.FC = () => {
  const [selectedFramework, setSelectedFramework] = useState<string>('iso27001');

  const frameworks = [
    {
      id: 'iso27001',
      title: 'ISO/IEC 27001:2022',
      score: 100,
      badge: 'Surveillance Cleared',
      color: '#0071E3',
      summary: 'Continuous compliance verified during May 2026 surveillance audit with zero non-conformities.',
      controls: '93 Controls Evaluated',
      status: 'Fully Certified'
    },
    {
      id: 'iso42001',
      title: 'ISO/IEC 42001 (AIMS)',
      score: 96,
      badge: 'AI Act Ready',
      color: '#AF52DE',
      summary: 'Artificial Intelligence Management System established for generative AI models and supplier algorithms.',
      controls: '38 AI Controls Assessed',
      status: 'Implemented'
    },
    {
      id: 'nist',
      title: 'NIST CSF 2.0',
      score: 95,
      badge: 'Core Aligned',
      color: '#34C759',
      summary: 'Enterprise alignment across Govern, Identify, Protect, Detect, Respond, and Recover tiers.',
      controls: 'Tier-4 Adaptability',
      status: 'Active Telemetry'
    },
    {
      id: 'soc2',
      title: 'SOC 2 Type II',
      score: 98,
      badge: 'Trust Criteria',
      color: '#32ADE6',
      summary: 'Rigorous validation of Security, Availability, and Confidentiality trust principles.',
      controls: 'CC6 - CC7 Controls',
      status: 'Audit Verified'
    },
    {
      id: 'nis2',
      title: 'EU NIS2 Directive',
      score: 94,
      badge: 'Critical Entity',
      color: '#FF9500',
      summary: 'Direct supply chain risk governance and automated 24h early warning incident reporting.',
      controls: 'Article 21 Mandates',
      status: 'Enforced'
    }
  ];

  const activeFw = frameworks.find((f) => f.id === selectedFramework) || frameworks[0];

  return (
    <section className="py-16 bg-white border-b border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5" />
              Executive Risk & Compliance Telemetry
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F]">
              Governance Posture & Audit Benchmarks
            </h2>
            <p className="text-sm text-[#6E6E73] mt-1 max-w-xl">
              Visual evaluation metrics across international standards, risk treatment coverage, and continuous monitoring controls.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#86868B] bg-[#F5F5F7] px-3 py-1.5 rounded-full self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Live Audit Baseline: 100% Cleared
          </div>
        </div>

        {/* Interactive Framework Selector & Visual Bar Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Framework Progress Bars (7 cols) */}
          <div className="lg:col-span-7 bg-[#FBFBFD] p-6 sm:p-7 rounded-3xl border border-black/[0.06] flex flex-col justify-between space-y-5">
            <div className="text-xs font-semibold text-[#86868B] uppercase tracking-wider">
              International Audit Readiness Scores
            </div>

            <div className="space-y-4">
              {frameworks.map((fw) => {
                const isSelected = selectedFramework === fw.id;
                return (
                  <div
                    key={fw.id}
                    onClick={() => setSelectedFramework(fw.id)}
                    className={`p-3.5 rounded-2xl transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-white border-black/10 shadow-xs ring-1 ring-blue-500/15'
                        : 'bg-white/60 border-black/[0.04] hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: fw.color }}
                        />
                        <span className="font-bold text-[#1D1D1F]">{fw.title}</span>
                        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-black/[0.04] text-[#6E6E73]">
                          {fw.badge}
                        </span>
                      </div>
                      <span className="font-mono font-bold text-sm tabular-nums" style={{ color: fw.color }}>
                        {fw.score}%
                      </span>
                    </div>

                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${fw.score}%`, backgroundColor: fw.color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 text-[11px] text-[#86868B] flex items-center justify-between border-t border-black/[0.04]">
              <span>Click any framework to inspect detailed governance telemetry</span>
              <span className="font-mono text-emerald-600 font-medium">Updated: 2026 Audit Cycle</span>
            </div>
          </div>

          {/* Detailed Selected Framework Spotlight Card (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-3xl border border-black/[0.06] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-xs"
                  style={{ backgroundColor: activeFw.color }}
                >
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-extrabold tabular-nums" style={{ color: activeFw.color }}>
                    {activeFw.score}%
                  </div>
                  <div className="text-[11px] text-[#86868B] font-mono">{activeFw.status}</div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-[#1D1D1F] mb-1">
                {activeFw.title}
              </h3>
              <p className="text-xs text-[#515154] leading-relaxed mb-6">
                {activeFw.summary}
              </p>

              {/* Visual Breakdown Elements */}
              <div className="space-y-3 p-4 rounded-2xl bg-[#FBFBFD] border border-black/[0.04] text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#6E6E73]">Evaluated Scope:</span>
                  <span className="font-semibold text-[#1D1D1F]">{activeFw.controls}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#6E6E73]">Executive Validation:</span>
                  <span className="font-semibold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Passed Audit
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#6E6E73]">External Surveillance:</span>
                  <span className="font-semibold text-[#1D1D1F]">May 2026 Cleared</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs">
              <span className="text-[#6E6E73]">Lead Auditor Oversight</span>
              <span className="font-mono text-[11px] font-semibold text-[#0071E3] bg-blue-50 px-2 py-0.5 rounded-full">
                Erdal Birinci, LA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
