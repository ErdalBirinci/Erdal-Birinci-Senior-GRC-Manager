import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, ArrowUpRight, FileText } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'projects';
  onNavigate: (view: 'home' | 'projects', sectionId?: string) => void;
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenCvModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (view: 'home' | 'projects', sectionId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(view, sectionId);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'apple-glass shadow-xs border-b border-black/[0.06]'
          : 'bg-[#FBFBFD]/90 backdrop-blur-md border-b border-black/[0.03]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Brand title, one line wordmark */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2.5 text-left group transition-transform active:scale-98 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-[#0071E3] flex items-center justify-center text-white shadow-xs group-hover:bg-[#0077ED] transition-colors">
            <Shield className="w-4 h-4 stroke-[2.2]" />
          </div>
          <span className="text-base font-semibold tracking-tight text-[#1D1D1F] whitespace-nowrap">
            Erdal Birinci
          </span>
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#6E6E73]">
          <button
            onClick={() => handleLinkClick('home')}
            className={`transition-colors hover:text-[#1D1D1F] cursor-pointer ${
              currentView === 'home' ? 'text-[#0071E3] font-semibold' : ''
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => handleLinkClick('projects')}
            className={`transition-colors hover:text-[#1D1D1F] flex items-center gap-1.5 cursor-pointer ${
              currentView === 'projects' ? 'text-[#0071E3] font-semibold' : ''
            }`}
          >
            Projects & Architecture
            <span className="text-[11px] font-mono px-1.5 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
              Deep Dive
            </span>
          </button>
          <button
            onClick={() => handleLinkClick('home', 'competencies')}
            className="transition-colors hover:text-[#1D1D1F] cursor-pointer"
          >
            Competencies
          </button>
          <button
            onClick={() => handleLinkClick('home', 'experience')}
            className="transition-colors hover:text-[#1D1D1F] cursor-pointer"
          >
            Career
          </button>
          <button
            onClick={() => handleLinkClick('home', 'certifications')}
            className="transition-colors hover:text-[#1D1D1F] cursor-pointer"
          >
            Certifications
          </button>
          <button
            onClick={() => handleLinkClick('home', 'contact')}
            className="transition-colors hover:text-[#1D1D1F] cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCvModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-[#1D1D1F] bg-black/[0.04] hover:bg-black/[0.08] active:scale-98 rounded-full transition-all whitespace-nowrap cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#6E6E73]" />
            <span>Executive Resume</span>
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home', 'contact');
            }}
            className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-medium text-white bg-[#0071E3] hover:bg-[#0077ED] active:scale-98 rounded-full shadow-xs transition-all whitespace-nowrap cursor-pointer"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1D1D1F] hover:bg-black/[0.04] rounded-lg transition-colors cursor-pointer"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-black/[0.06] bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3 text-sm font-medium text-[#1D1D1F]">
            <button
              onClick={() => handleLinkClick('home')}
              className="text-left py-2 px-3 rounded-lg hover:bg-black/[0.03] transition-colors cursor-pointer"
            >
              Overview
            </button>
            <button
              onClick={() => handleLinkClick('projects')}
              className="text-left py-2 px-3 rounded-lg hover:bg-black/[0.03] text-[#0071E3] font-semibold flex items-center justify-between transition-colors cursor-pointer"
            >
              <span>Projects & Architecture</span>
              <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-mono">
                6 Projects
              </span>
            </button>
            <button
              onClick={() => handleLinkClick('home', 'competencies')}
              className="text-left py-2 px-3 rounded-lg hover:bg-black/[0.03] transition-colors cursor-pointer"
            >
              Competencies
            </button>
            <button
              onClick={() => handleLinkClick('home', 'experience')}
              className="text-left py-2 px-3 rounded-lg hover:bg-black/[0.03] transition-colors cursor-pointer"
            >
              Career Journey
            </button>
            <button
              onClick={() => handleLinkClick('home', 'certifications')}
              className="text-left py-2 px-3 rounded-lg hover:bg-black/[0.03] transition-colors cursor-pointer"
            >
              Certifications (13+)
            </button>
            <button
              onClick={() => handleLinkClick('home', 'contact')}
              className="text-left py-2 px-3 rounded-lg hover:bg-black/[0.03] transition-colors cursor-pointer"
            >
              Contact & Socials
            </button>

            <div className="pt-2 border-t border-black/[0.06] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium bg-black/[0.04] rounded-lg text-[#1D1D1F] cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                Executive Resume
              </button>
              <button
                onClick={() => handleLinkClick('home', 'contact')}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium bg-[#0071E3] text-white rounded-lg cursor-pointer"
              >
                Get in Touch
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
