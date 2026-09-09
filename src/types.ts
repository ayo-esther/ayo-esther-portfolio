export interface ExperienceItem {
  id: string;
  date: string;
  role: string;
  organization: string;
  description: string;
  isCurrent?: boolean;
  statusTag?: string;
  department?: string;
}

export interface WorkProject {
  id: string;
  title: string;
  subtitle?: string;
  year: string;
  domain: string;
  summary: string;
  keyThemes: string[];
}

export interface PublicationItem {
  id: string;
  title: string;
  year: string;
  type: string;
  venueOrContext: string;
  description: string;
}

export interface LeadershipItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  focus: string;
}

export interface FocusArea {
  id: string;
  title: string;
  iconName: 'FileText' | 'Globe' | 'BookOpen';
  summary: string;
  details: string[];
}
