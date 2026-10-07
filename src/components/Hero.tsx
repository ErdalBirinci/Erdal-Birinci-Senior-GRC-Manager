import React from 'react';
import { PERSONAL_INFO } from '../data/cvData';
import { ArrowRight, MapPin, Mail, Linkedin, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onGoToContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onGoToContact }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-black/[0.05]">
      {/* Apple-style subtle ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-100/50 via-cyan-50/40 to-indigo-100/30 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Unboxed editorial status metadata */}
          <div className="inline-flex items-center gap-2 text-xs font-medium text-[#6E6E73] mb-6">
            <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Active Executive Leadership & Advisory
            </span>
            <span aria-hidden="true" className="text-black/20">·</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#86868B]" />
              {PERSONAL_INFO.location}
            </span>
            <span aria-hidden="true" className="text-black/20">·</span>
            <span className="text-[#1D1D1F] font-medium">ISO/IEC 27001 Lead Auditor</span>
          </div>

          {/* Display Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1D1D1F] leading-[1.08] text-balance mb-6">
            Cybersecurity & GRC <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#0071E3] via-[#32ADE6] to-[#5856D6] bg-clip-text text-transparent">
              Architecture & Governance
            </span>
          </h1>

          {/* Subtitle / Value proposition */}
          <p className="text-lg sm:text-xl text-[#424245] leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            Over 20 years of expertise bridging enterprise IT infrastructure, Zero Trust identity architectures, and 
            <strong className="font-semibold text-[#1D1D1F]"> ISO 27001, ISO 42001 (AI Management)</strong>, and 
            <strong className="font-semibold text-[#1D1D1F]"> EU AI Act</strong> regulatory compliance.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
            <button
              onClick={onExploreProjects}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0071E3] hover:bg-[#0077ED] active:scale-98 rounded-full shadow-md shadow-blue-500/15 transition-all group cursor-pointer"
            >
              <span>Explore Projects & Technical Column</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={onGoToContact}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#1D1D1F] bg-white border border-black/10 hover:border-black/20 hover:bg-neutral-50/80 active:scale-98 rounded-full shadow-xs transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#86868B]" />
              <span>Get in Touch</span>
            </button>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-[#0071E3] hover:bg-blue-50/60 rounded-full transition-all"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Apple-style interactive Bento Metric Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
            <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-xs hover:border-[#0071E3]/30 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[#86868B] uppercase tracking-wider">Experience</span>
                <CheckCircle2 className="w-4 h-4 text-[#0071E3]" />
              </div>
              <div className="text-3xl font-bold tracking-tight text-[#1D1D1F] tabular-nums">20+ Years</div>
              <p className="text-xs text-[#6E6E73] mt-1">Fortune 500 & Global SaaS</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-xs hover:border-[#34C759]/30 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[#86868B] uppercase tracking-wider">Audit Record</span>
                <ShieldCheck className="w-4 h-4 text-[#34C759]" />
              </div>
              <div className="text-3xl font-bold tracking-tight text-[#1D1D1F] tabular-nums">100%</div>
              <p className="text-xs text-[#6E6E73] mt-1">ISO 27001 Surveillance Success</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-xs hover:border-[#AF52DE]/30 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[#86868B] uppercase tracking-wider">AI Governance</span>
                <Cpu className="w-4 h-4 text-[#AF52DE]" />
              </div>
              <div className="text-3xl font-bold tracking-tight text-[#1D1D1F] tabular-nums">ISO 42001</div>
              <p className="text-xs text-[#6E6E73] mt-1">EU AI Act Readiness Framework</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-xs hover:border-[#FF9500]/30 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[#86868B] uppercase tracking-wider">Certifications</span>
                <Layers className="w-4 h-4 text-[#FF9500]" />
              </div>
              <div className="text-3xl font-bold tracking-tight text-[#1D1D1F] tabular-nums">13+ Accredited</div>
              <p className="text-xs text-[#6E6E73] mt-1">Oracle, MS, Google, Cisco, IBM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
