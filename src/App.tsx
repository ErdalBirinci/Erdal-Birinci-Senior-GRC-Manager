import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GrcPostureDashboard } from './components/GrcPostureDashboard';
import { ProjectGrid } from './components/ProjectGrid';
import { ProjectsPage } from './components/ProjectsPage';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Competencies } from './components/Competencies';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Certifications } from './components/Certifications';
import { ContactSection } from './components/ContactSection';
import { CvModal } from './components/CvModal';
import { Footer } from './components/Footer';
import { PROJECTS_DATA, INITIAL_COMMENTS } from './data/cvData';
import { ProjectComment, Project } from './types';

const COMMENTS_STORAGE_KEY = 'erdal_birinci_project_comments_v2';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'projects'>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | undefined>(undefined);
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  // Initialize comments with localStorage persistence
  const [comments, setComments] = useState<ProjectComment[]>(() => {
    try {
      const saved = localStorage.getItem(COMMENTS_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to load comments from storage:', e);
    }
    return INITIAL_COMMENTS;
  });

  // Save comments to localStorage when changed
  useEffect(() => {
    try {
      localStorage.setItem(COMMENTS_STORAGE_KEY, JSON.stringify(comments));
    } catch (e) {
      console.warn('Failed to save comments to storage:', e);
    }
  }, [comments]);

  // Compute comment counts per project
  const commentCounts = React.useMemo(() => {
    const counts: Record<string, number> = {};
    comments.forEach((c) => {
      counts[c.projectId] = (counts[c.projectId] || 0) + 1;
    });
    return counts;
  }, [comments]);

  const handleNavigate = (view: 'home' | 'projects', sectionId?: string) => {
    setCurrentView(view);
    if (view === 'home' && sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectProjectFromGrid = (projectId: string) => {
    const proj = PROJECTS_DATA.find((p) => p.id === projectId) || null;
    setModalProject(proj);
  };

  const handleGoToDeepDiveFromModal = (projectId: string) => {
    setModalProject(null);
    setSelectedProjectId(projectId);
    setCurrentView('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddComment = (
    newCommentData: Omit<ProjectComment, 'id' | 'likes' | 'userLiked'>
  ) => {
    const newComment: ProjectComment = {
      ...newCommentData,
      id: `comment-${Date.now()}`,
      likes: 0,
      userLiked: false,
    };
    setComments((prev) => [newComment, ...prev]);
  };

  const handleLikeComment = (commentId: string) => {
    setComments((prev) =>
      prev.map((c) => {
        if (c.id === commentId) {
          const isLiked = !c.userLiked;
          return {
            ...c,
            likes: isLiked ? c.likes + 1 : Math.max(0, c.likes - 1),
            userLiked: isLiked,
          };
        }
        return c;
      })
    );
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F] flex flex-col font-sans selection:bg-[#0071E3]/20 selection:text-[#0071E3]">
      {/* Apple-style Top Bar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenCvModal={() => setCvModalOpen(true)}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentView === 'home' ? (
          <>
            <Hero
              onExploreProjects={() => {
                const el = document.getElementById('projects-preview');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  handleNavigate('projects');
                }
              }}
              onGoToContact={() => handleNavigate('home', 'contact')}
            />

            <GrcPostureDashboard />

            <ProjectGrid
              projects={PROJECTS_DATA}
              onSelectProject={handleSelectProjectFromGrid}
              onGoToProjectsPage={() => handleNavigate('projects')}
              commentCounts={commentCounts}
            />

            <Competencies />

            <ExperienceTimeline />

            <Certifications />

            <ContactSection />
          </>
        ) : (
          <ProjectsPage
            projects={PROJECTS_DATA}
            comments={comments}
            onAddComment={handleAddComment}
            onLikeComment={handleLikeComment}
            onBackToHome={() => handleNavigate('home')}
            initialSelectedProjectId={selectedProjectId}
          />
        )}
      </main>

      {/* Quick Project Detail Preview Modal */}
      <ProjectDetailModal
        project={modalProject}
        onClose={() => setModalProject(null)}
        onGoToDeepDive={handleGoToDeepDiveFromModal}
      />

      {/* Executive CV Modal */}
      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
