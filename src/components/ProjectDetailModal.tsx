import React from 'react';
import { Project } from '../types';
import { ProjectVisualGraphics } from './ProjectVisualGraphics';
import { 
  X, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Cpu
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onGoToDeepDive: (projectId: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onGoToDeepDive,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-black/10 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Top Header */}
        <div className="p-4 sm:px-8 border-b border-black/[0.06] flex items-center justify-between bg-[#FBFBFD] sticky top-0 z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#6E6E73]">
            <span style={{ color: project.accentColor }}>{project.categoryLabel}</span>
            <span>·</span>
            <span>{project.year}</span>
            <span>·</span>
            <span className="text-[#86868B]">{project.status}</span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/[0.05] hover:bg-black/[0.1] flex items-center justify-center text-[#1D1D1F] transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#1D1D1F] mb-1">
              {project.title}
            </h2>
            <p className="text-sm font-medium text-[#424245]">
              {project.tagline}
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3">
            {project.metrics.map((m, i) => (
              <div key={i} className="bg-[#F5F5F7] rounded-2xl p-3 text-center">
                <div
                  className="text-xl font-bold tabular-nums"
                  style={{ color: project.accentColor }}
                >
                  {m.value}
                </div>
                <div className="text-[11px] text-[#6E6E73] mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-xs font-bold text-[#86868B] uppercase tracking-wider mb-2">
              Project Scope & Architecture
            </h3>
            <p className="text-xs leading-relaxed text-[#424245]">
              {project.summary}
            </p>
          </div>

          {/* Key Deliverables */}
          <div>
            <h3 className="text-xs font-bold text-[#86868B] uppercase tracking-wider mb-2.5">
              Key Deliverables & Architectural Highlights
            </h3>
            <div className="space-y-2">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#1D1D1F]">
                  <CheckCircle2
                    className="w-4 h-4 shrink-0 mt-0.5"
                    style={{ color: project.accentColor }}
                  />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Architecture & Telemetry Diagram */}
          <ProjectVisualGraphics projectId={project.id} accentColor={project.accentColor} />

          {/* Quick Technical Highlights */}
          <div className="p-4 rounded-2xl bg-[#FBFBFD] border border-black/[0.05] space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1D1D1F] uppercase tracking-wider">
              <Cpu className="w-4 h-4 text-[#0071E3]" />
              Technical Highlights Summary
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-semibold text-[#86868B] block text-[11px]">Tech Stack:</span>
                <span className="text-[#1D1D1F]">
                  {project.technicalDetails.techStack.slice(0, 4).join(', ')}
                </span>
              </div>
              <div>
                <span className="font-semibold text-[#86868B] block text-[11px]">International Standards:</span>
                <span className="text-[#0071E3] font-medium">
                  {project.technicalDetails.complianceFrameworks.slice(0, 3).join(', ')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom CTA Bar */}
        <div className="p-4 sm:px-8 border-t border-black/[0.06] bg-[#FBFBFD] flex flex-col sm:flex-row items-center justify-between gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071E3] hover:underline"
            >
              <span>Visit Live Platform</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-[11px] text-[#86868B]">Enterprise / Confidential Architecture</span>
          )}

          <button
            onClick={() => {
              onClose();
              onGoToDeepDive(project.id);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0071E3] hover:bg-[#0077ED] active:scale-98 rounded-full shadow-xs transition-all cursor-pointer"
          >
            <span>Open Technical Column & Reviews</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
