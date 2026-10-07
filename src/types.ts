export type ProjectCategory = 'all' | 'grc' | 'cloud' | 'saas' | 'enterprise' | 'ai';

export interface ProjectTechnicalDetails {
  architectureOverview: string;
  securityControls: string[];
  techStack: string[];
  complianceFrameworks: string[];
  auditOutcomes: string[];
  governanceArtifacts: string[];
  roleResponsibility: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'grc' | 'cloud' | 'saas' | 'enterprise' | 'ai';
  categoryLabel: string;
  year: string;
  status: string;
  summary: string;
  accentColor: string; // e.g. '#0071E3'
  badgeBg: string;
  badgeText: string;
  iconName: string;
  metrics: ProjectMetric[];
  highlights: string[];
  technicalDetails: ProjectTechnicalDetails;
  liveUrl?: string;
  githubUrl?: string;
}

export interface ProjectComment {
  id: string;
  projectId: string;
  authorName: string;
  authorTitle: string;
  commentText: string;
  date: string;
  rating: number; // 1-5
  likes: number;
  userLiked?: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  keyAchievement: string;
  responsibilities: string[];
  skills: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  category: 'Audit & Governance' | 'Cloud Architecture' | 'Cybersecurity Specializations';
  badge: string;
  validity?: string;
}
