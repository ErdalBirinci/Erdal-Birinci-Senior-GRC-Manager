import React from 'react';
import { PERSONAL_INFO } from '../data/cvData';
import { ArrowUp, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: 'home' | 'projects', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-black/[0.06] py-12 text-xs text-[#86868B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-black/[0.06]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#0071E3] flex items-center justify-center text-white">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#1D1D1F]">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-[11px] text-[#6E6E73]">
                {PERSONAL_INFO.title}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#6E6E73]">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#1D1D1F] transition-colors cursor-pointer"
            >
              Overview
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="hover:text-[#1D1D1F] transition-colors cursor-pointer"
            >
              Projects & Architecture
            </button>
            <button
              onClick={() => onNavigate('home', 'competencies')}
              className="hover:text-[#1D1D1F] transition-colors cursor-pointer"
            >
              Competencies
            </button>
            <button
              onClick={() => onNavigate('home', 'experience')}
              className="hover:text-[#1D1D1F] transition-colors cursor-pointer"
            >
              Career Experience
            </button>
            <button
              onClick={() => onNavigate('home', 'certifications')}
              className="hover:text-[#1D1D1F] transition-colors cursor-pointer"
            >
              Certifications
            </button>
            <button
              onClick={() => onNavigate('home', 'contact')}
              className="hover:text-[#1D1D1F] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/[0.04] hover:bg-black/[0.08] text-[#1D1D1F] transition-colors cursor-pointer self-start md:self-auto"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
          <div>
            © {new Date().getFullYear()} Erdal Birinci. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1D1D1F] transition-colors"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#1D1D1F] transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
            <span>·</span>
            <span>Espoo, Finland</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
