import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory, ProjectComment } from '../types';
import { ProjectVisualGraphics } from './ProjectVisualGraphics';
import { 
  Search, 
  ArrowLeft, 
  ExternalLink, 
  ShieldCheck, 
  Cpu, 
  Lock, 
  Code, 
  FileCheck2, 
  FileSpreadsheet, 
  UserCheck, 
  MessageSquare, 
  Star, 
  ThumbsUp, 
  Send, 
  CheckCircle2, 
  Layers,
  ChevronRight
} from 'lucide-react';

interface ProjectsPageProps {
  projects: Project[];
  comments: ProjectComment[];
  onAddComment: (comment: Omit<ProjectComment, 'id' | 'likes' | 'userLiked'>) => void;
  onLikeComment: (commentId: string) => void;
  onBackToHome: () => void;
  initialSelectedProjectId?: string;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  projects,
  comments,
  onAddComment,
  onLikeComment,
  onBackToHome,
  initialSelectedProjectId,
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(
    initialSelectedProjectId || projects[0]?.id || ''
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [mobileTab, setMobileTab] = useState<'overview' | 'technical' | 'comments'>('overview');

  // New Comment Form State
  const [authorName, setAuthorName] = useState('');
  const [authorTitle, setAuthorTitle] = useState('');
  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Categories config in English
  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'grc', label: 'GRC & Education' },
    { id: 'cloud', label: 'Cloud & Zero Trust' },
    { id: 'saas', label: 'SaaS & Security' },
    { id: 'enterprise', label: 'Enterprise Infrastructure' },
    { id: 'ai', label: 'AI Governance' },
  ];

  // Filtering projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesQuery =
        project.title.toLowerCase().includes(q) ||
        project.tagline.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.technicalDetails.techStack.some((t) => t.toLowerCase().includes(q)) ||
        project.technicalDetails.complianceFrameworks.some((f) => f.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });
  }, [projects, selectedCategory, searchQuery]);

  // Selected project object
  const activeProject = useMemo(() => {
    return (
      projects.find((p) => p.id === selectedProjectId) ||
      filteredProjects[0] ||
      projects[0]
    );
  }, [projects, selectedProjectId, filteredProjects]);

  // Comments for the active project
  const projectComments = useMemo(() => {
    return comments.filter((c) => c.projectId === activeProject?.id);
  }, [comments, activeProject]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !commentText.trim()) {
      setFormError('Please enter your name and review comments.');
      return;
    }
    setFormError('');

    const today = new Date();
    const formattedDate = `${today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;

    onAddComment({
      projectId: activeProject.id,
      authorName: authorName.trim(),
      authorTitle: authorTitle.trim() || 'Information Security & Compliance Professional',
      commentText: commentText.trim(),
      date: formattedDate,
      rating,
    });

    setCommentText('');
    setAuthorName('');
    setAuthorTitle('');
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD] pb-24">
      {/* Top Breadcrumb & Return Header */}
      <div className="bg-white border-b border-black/[0.06] sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D1D1F] hover:text-[#0071E3] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-[#6E6E73]">
            <span>Projects</span>
            <ChevronRight className="w-3.5 h-3.5 text-black/20" />
            <span className="font-semibold text-[#1D1D1F] truncate max-w-[200px] sm:max-w-none">
              {activeProject?.title}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Page Title & Search Bar */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider mb-1">
                Technical Architecture & Reviews
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1D1D1F]">
                Project Analysis & Technical Column
              </h1>
            </div>

            {/* Interactive Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#86868B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, ISO, NIST, tech..."
                className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-black/10 rounded-full focus:outline-hidden focus:border-[#0071E3] focus:ring-2 focus:ring-blue-100 transition-all text-[#1D1D1F] placeholder:text-[#86868B]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#86868B] hover:text-[#1D1D1F] cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            <div className="flex items-center gap-1 p-1 bg-black/[0.04] rounded-xl">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-white text-[#1D1D1F] shadow-xs font-semibold'
                      : 'text-[#6E6E73] hover:text-[#1D1D1F]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <span className="text-xs text-[#86868B] ml-2 hidden sm:inline whitespace-nowrap tabular-nums">
              {filteredProjects.length} results
            </span>
          </div>
        </div>

        {/* Project Selector Horizontal Pills */}
        <div className="mb-8 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex gap-2">
            {filteredProjects.map((p) => {
              const isSelected = p.id === activeProject.id;
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    setSelectedProjectId(p.id);
                    setMobileTab('overview');
                  }}
                  className={`px-4 py-2 rounded-2xl text-xs font-semibold border transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#0071E3] text-[#0071E3] shadow-sm'
                      : 'bg-white/60 border-black/[0.06] text-[#6E6E73] hover:bg-white hover:text-[#1D1D1F]'
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: p.accentColor }}
                  />
                  <span>{p.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Navigation Tabs for Responsive Viewing */}
        <div className="flex lg:hidden mb-6 bg-black/[0.04] p-1 rounded-xl">
          <button
            onClick={() => setMobileTab('overview')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              mobileTab === 'overview'
                ? 'bg-white text-[#1D1D1F] shadow-xs'
                : 'text-[#6E6E73]'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setMobileTab('technical')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              mobileTab === 'technical'
                ? 'bg-white text-[#0071E3] shadow-xs'
                : 'text-[#6E6E73]'
            }`}
          >
            Technical Column
          </button>
          <button
            onClick={() => setMobileTab('comments')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              mobileTab === 'comments'
                ? 'bg-white text-[#1D1D1F] shadow-xs'
                : 'text-[#6E6E73]'
            }`}
          >
            Reviews ({projectComments.length})
          </button>
        </div>

        {/* Split Layout: Main Content (Left) + Technical Specifications Column (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Overview, Highlights, Metrics, Comments */}
          <div
            className={`lg:col-span-7 xl:col-span-7 space-y-8 ${
              mobileTab === 'technical' ? 'hidden lg:block' : 'block'
            }`}
          >
            {/* Project Header & Highlights Card */}
            {(mobileTab === 'overview' || mobileTab === 'technical') && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.06] shadow-xs">
                {/* Meta header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2 text-xs text-[#6E6E73] font-medium">
                    <span style={{ color: activeProject.accentColor }} className="font-semibold">
                      {activeProject.categoryLabel}
                    </span>
                    <span aria-hidden="true" className="text-black/20">·</span>
                    <span>{activeProject.year}</span>
                    <span aria-hidden="true" className="text-black/20">·</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full text-[11px] font-semibold">
                      {activeProject.status}
                    </span>
                  </div>

                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#0071E3] hover:underline"
                    >
                      <span>Visit Live Platform</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1D1D1F] mb-2">
                  {activeProject.title}
                </h2>
                <p className="text-base font-medium text-[#424245] mb-6">
                  {activeProject.tagline}
                </p>

                {/* Metrics strip */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {activeProject.metrics.map((m, idx) => (
                    <div key={idx} className="bg-[#F5F5F7] rounded-2xl p-3 sm:p-4 text-center">
                      <div
                        className="text-lg sm:text-2xl font-bold tabular-nums"
                        style={{ color: activeProject.accentColor }}
                      >
                        {m.value}
                      </div>
                      <div className="text-[11px] sm:text-xs text-[#6E6E73] mt-1 font-medium">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary narrative */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold text-[#86868B] uppercase tracking-wider mb-2">
                    Project Scope & Overview
                  </h3>
                  <p className="text-sm text-[#424245] leading-relaxed">
                    {activeProject.summary}
                  </p>
                </div>

                {/* Key Deliverables & Highlights */}
                <div>
                  <h3 className="text-xs font-bold text-[#86868B] uppercase tracking-wider mb-3">
                    Key Deliverables & Architectural Highlights
                  </h3>
                  <div className="space-y-2.5">
                    {activeProject.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-[#1D1D1F]">
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: activeProject.accentColor }}
                        />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Visual Diagrams, Flowcharts & Benchmark Graphics */}
            {(mobileTab === 'overview' || mobileTab === 'technical') && (
              <ProjectVisualGraphics
                projectId={activeProject.id}
                accentColor={activeProject.accentColor}
              />
            )}

            {/* Comments & Peer Reviews Section */}
            {(mobileTab === 'comments' || mobileTab === 'overview') && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.06] shadow-xs">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-[#0071E3]" />
                    <h3 className="text-xl font-bold text-[#1D1D1F]">
                      Project Reviews & Peer Feedback
                    </h3>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
                    {projectComments.length} Reviews
                  </span>
                </div>

                {/* Add Comment Form */}
                <form
                  onSubmit={handleCommentSubmit}
                  className="mb-8 p-5 rounded-2xl bg-[#FBFBFD] border border-black/[0.05]"
                >
                  <h4 className="text-xs font-bold text-[#1D1D1F] uppercase tracking-wider mb-3">
                    Leave a Review / Technical Assessment for this Project
                  </h4>

                  {formSubmitted && (
                    <div className="mb-4 p-3 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Your review was successfully submitted and published!
                    </div>
                  )}

                  {formError && (
                    <div className="mb-4 p-3 rounded-xl bg-rose-50 text-rose-700 text-xs font-semibold">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#6E6E73] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3 py-2 text-xs bg-white border border-black/10 rounded-xl focus:outline-hidden focus:border-[#0071E3]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-[#6E6E73] mb-1">
                        Title / Organization
                      </label>
                      <input
                        type="text"
                        value={authorTitle}
                        onChange={(e) => setAuthorTitle(e.target.value)}
                        placeholder="e.g. Information Security Director"
                        className="w-full px-3 py-2 text-xs bg-white border border-black/10 rounded-xl focus:outline-hidden focus:border-[#0071E3]"
                      />
                    </div>
                  </div>

                  {/* Rating Selector */}
                  <div className="mb-3">
                    <label className="block text-[11px] font-semibold text-[#6E6E73] mb-1">
                      Evaluation Score
                    </label>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setRating(star)}
                          className="p-1 text-amber-400 hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Star
                            className={`w-5 h-5 ${
                              star <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs text-[#86868B] ml-2">{rating} / 5</span>
                    </div>
                  </div>

                  {/* Comment Text Area */}
                  <div className="mb-3">
                    <label className="block text-[11px] font-semibold text-[#6E6E73] mb-1">
                      Your Technical Review *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="Share your perspective on the security controls, architecture, or audit outputs..."
                      className="w-full px-3 py-2 text-xs bg-white border border-black/10 rounded-xl focus:outline-hidden focus:border-[#0071E3]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0071E3] hover:bg-[#0077ED] active:scale-98 rounded-xl transition-all shadow-xs cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Review</span>
                  </button>
                </form>

                {/* Comments List */}
                <div className="space-y-4">
                  {projectComments.length === 0 ? (
                    <div className="text-center py-8 text-xs text-[#86868B]">
                      No reviews for this project yet. Be the first to share feedback!
                    </div>
                  ) : (
                    projectComments.map((comment) => (
                      <div
                        key={comment.id}
                        className="p-4 rounded-2xl bg-[#F9F9FB] border border-black/[0.04] transition-all"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <div className="text-xs font-bold text-[#1D1D1F]">
                              {comment.authorName}
                            </div>
                            <div className="text-[11px] text-[#6E6E73]">
                              {comment.authorTitle}
                            </div>
                          </div>

                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < comment.rating
                                    ? 'fill-amber-400 text-amber-400'
                                    : 'text-slate-200'
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        <p className="text-xs text-[#333336] leading-relaxed mb-3">
                          {comment.commentText}
                        </p>

                        <div className="flex items-center justify-between text-[11px] text-[#86868B] pt-2 border-t border-black/[0.04]">
                          <span>{comment.date}</span>
                          <button
                            type="button"
                            onClick={() => onLikeComment(comment.id)}
                            className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] transition-all cursor-pointer ${
                              comment.userLiked
                                ? 'text-[#0071E3] font-semibold bg-blue-50'
                                : 'hover:text-[#1D1D1F]'
                            }`}
                          >
                            <ThumbsUp className="w-3 h-3" />
                            <span className="tabular-nums">{comment.likes}</span>
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: DEDICATED TECHNICAL COLUMN (5 cols on desktop) */}
          <div
            className={`lg:col-span-5 xl:col-span-5 space-y-6 ${
              mobileTab === 'technical' ? 'block' : 'hidden lg:block'
            }`}
          >
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-black/[0.06] shadow-xs sticky top-32">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-black/[0.06]">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-[#0071E3]" />
                  <h3 className="text-lg font-bold text-[#1D1D1F]">
                    Technical Column
                  </h3>
                </div>
                <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  Technical Spec
                </span>
              </div>

              <div className="space-y-6 text-xs">
                {/* 1. Architecture Overview */}
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-[#1D1D1F] uppercase tracking-wider text-[11px] mb-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#0071E3]" />
                    System Architecture & Data Flow
                  </div>
                  <p className="text-[#515154] leading-relaxed bg-[#F5F5F7] p-3 rounded-xl border border-black/[0.02]">
                    {activeProject.technicalDetails.architectureOverview}
                  </p>
                </div>

                {/* 2. Security Controls & Defense Principles */}
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-[#1D1D1F] uppercase tracking-wider text-[11px] mb-2">
                    <Lock className="w-3.5 h-3.5 text-[#34C759]" />
                    Security Controls & Defense Principles
                  </div>
                  <ul className="space-y-1.5">
                    {activeProject.technicalDetails.securityControls.map((sec, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#424245]">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{sec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Tech Stack & APIs */}
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-[#1D1D1F] uppercase tracking-wider text-[11px] mb-2">
                    <Code className="w-3.5 h-3.5 text-[#AF52DE]" />
                    Technology & Protocol Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.technicalDetails.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-black/[0.04] text-[#1D1D1F] font-medium text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4. Compliance Frameworks & Directives */}
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-[#1D1D1F] uppercase tracking-wider text-[11px] mb-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0071E3]" />
                    International Compliance Frameworks
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.technicalDetails.complianceFrameworks.map((fw, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 font-semibold text-[11px]"
                      >
                        {fw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 5. Audit Outcomes */}
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-[#1D1D1F] uppercase tracking-wider text-[11px] mb-2">
                    <FileCheck2 className="w-3.5 h-3.5 text-[#FF9500]" />
                    Audit Outcomes & Verifications
                  </div>
                  <ul className="space-y-1.5">
                    {activeProject.technicalDetails.auditOutcomes.map((audit, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#424245]">
                        <span className="text-amber-500 font-bold">✓</span>
                        <span>{audit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 6. Governance Artifacts & SOPs */}
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-[#1D1D1F] uppercase tracking-wider text-[11px] mb-2">
                    <FileSpreadsheet className="w-3.5 h-3.5 text-[#32ADE6]" />
                    Governance Artifacts & SOPs
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.technicalDetails.governanceArtifacts.map((art, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-[#F5F5F7] text-[#424245] text-[11px]"
                      >
                        {art}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 7. Role & Accountability */}
                <div className="pt-2 border-t border-black/[0.05]">
                  <div className="flex items-center gap-1.5 font-bold text-[#1D1D1F] uppercase tracking-wider text-[11px] mb-1">
                    <UserCheck className="w-3.5 h-3.5 text-[#1D1D1F]" />
                    Leadership Role & Responsibility
                  </div>
                  <p className="text-[#6E6E73] text-[11px] leading-relaxed">
                    {activeProject.technicalDetails.roleResponsibility}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
