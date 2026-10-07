import React from 'react';
import { Project } from '../types';
import { 
  ArrowUpRight, 
  ShieldAlert, 
  Gamepad2, 
  Cpu, 
  KeyRound, 
  Server, 
  Database,
  Layers,
  MessageSquare
} from 'lucide-react';

interface ProjectGridProps {
  projects: Project[];
  onSelectProject: (projectId: string) => void;
  onGoToProjectsPage: () => void;
  commentCounts: Record<string, number>;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  onSelectProject,
  onGoToProjectsPage,
  commentCounts,
}) => {
  const getProjectIcon = (name: string, color: string) => {
    const props = { className: 'w-6 h-6', style: { color } };
    switch (name) {
      case 'ShieldAlert':
        return <ShieldAlert {...props} />;
      case 'Gamepad2':
        return <Gamepad2 {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      case 'KeyRound':
        return <KeyRound {...props} />;
      case 'Server':
        return <Server {...props} />;
      case 'Database':
        return <Database {...props} />;
      default:
        return <Layers {...props} />;
    }
  };

  return (
    <section className="py-20 bg-[#FBFBFD] border-b border-black/[0.05]" id="projects-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider mb-2">
              Featured Initiatives & Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F]">
              Interactive Project Gallery
            </h2>
            <p className="text-base text-[#6E6E73] mt-2 max-w-xl">
              GRC governance frameworks, passwordless identity architecture, gamified training, and enterprise ERP security initiatives.
            </p>
          </div>

          <button
            onClick={onGoToProjectsPage}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0071E3] hover:text-[#0077ED] transition-colors self-start md:self-auto group cursor-pointer"
          >
            <span>Open All Projects & Technical Columns</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const commentsCount = commentCounts[project.id] || 0;

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project.id)}
                className="group relative bg-white rounded-3xl p-7 border border-black/[0.06] shadow-xs hover:shadow-xl hover:border-black/[0.12] transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105"
                      style={{ backgroundColor: `${project.accentColor}14` }}
                    >
                      {getProjectIcon(project.iconName, project.accentColor)}
                    </div>

                    <div className="flex items-center gap-2">
                      {commentsCount > 0 && (
                        <div className="flex items-center gap-1 text-xs text-[#86868B] group-hover:text-[#1D1D1F]">
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span className="tabular-nums font-mono">{commentsCount}</span>
                        </div>
                      )}
                      <div className="w-8 h-8 rounded-full bg-black/[0.03] flex items-center justify-center text-[#86868B] group-hover:text-[#1D1D1F] group-hover:bg-black/[0.06] transition-all">
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#6E6E73] mb-2 font-medium">
                    <span style={{ color: project.accentColor }}>{project.categoryLabel}</span>
                    <span aria-hidden="true" className="text-black/20">·</span>
                    <span>{project.year}</span>
                    <span aria-hidden="true" className="text-black/20">·</span>
                    <span className="text-[#86868B]">{project.status}</span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-[#424245] mb-4">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-[#6E6E73] leading-relaxed line-clamp-3 mb-6">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/[0.05]">
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.metrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx} className="bg-[#F5F5F7] rounded-xl p-2.5">
                        <div className="text-base font-bold text-[#1D1D1F] tabular-nums" style={{ color: project.accentColor }}>
                          {m.value}
                        </div>
                        <div className="text-[11px] text-[#6E6E73] truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#0071E3] font-medium pt-1">
                    <span>View Technical Details & Reviews</span>
                    <span className="font-mono text-[11px] text-[#86868B] group-hover:translate-x-1 transition-transform">
                      Details →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-purple-500/5 border border-black/[0.06] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[#1D1D1F]">
              Technical Architecture, Controls, and Peer Reviews
            </h3>
            <p className="text-sm text-[#6E6E73] mt-1">
              Explore security controls and technical specifications using live search and category filtering.
            </p>
          </div>
          <button
            onClick={onGoToProjectsPage}
            className="px-6 py-3 rounded-full text-sm font-semibold bg-[#1D1D1F] text-white hover:bg-black active:scale-98 transition-all shrink-0 shadow-sm cursor-pointer"
          >
            Go to Technical Page
          </button>
        </div>
      </div>
    </section>
  );
};
