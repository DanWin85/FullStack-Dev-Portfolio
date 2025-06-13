export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    images?: string[]; // Additional screenshots
    technologies: string[];
    category: 'web' | 'mobile' | 'desktop';
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
    startDate: string;
    endDate?: string;
    status: 'completed' | 'in-progress' | 'planned';
    highlights?: string[];
  }
  
  export interface Skill {
    id: string;
    name: string;
    level: number; // 0-100
    category: 'frontend' | 'backend' | 'mobile' | 'desktop' | 'tools' | 'database';
    icon?: string;
    yearsOfExperience?: number;
  }
  
  export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate?: string;
    current: boolean;
    description: string[];
    technologies: string[];
    achievements?: string[];
  }
  
  export interface Education {
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: number;
    honors?: string[];
    relevantCoursework?: string[];
  }
  
  export interface Contact {
    email: string;
    phone?: string;
    location: string;
    website?: string;
    github: string;
    linkedin: string;
    twitter?: string;
    resume?: string;
  }
  
  export interface PersonalInfo {
    fullName: string;
    title: string;
    bio: string;
    profileImage?: string;
    tagline: string;
    availableForWork: boolean;
  }
  
  export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    image?: string;
    rating?: number;
  }
  
  export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    publishDate: string;
    tags: string[];
    readTime: number;
    featured: boolean;
  }
  
  // Theme and UI Types
  export interface ThemeState {
    darkMode: boolean;
    primaryColor: string;
    accentColor: string;
  }
  
  export interface UIState {
    mobileMenuOpen: boolean;
    loading: boolean;
    activeSection: string;
    contactFormData: ContactFormData;
  }
  
  export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  
  // Filter and Search Types
  export interface ProjectFilters {
    category: 'all' | 'web' | 'mobile' | 'desktop';
    technology: string;
    status: 'all' | 'completed' | 'in-progress' | 'planned';
    featured: boolean | null;
  }
  
  export interface SkillFilters {
    category: 'all' | 'frontend' | 'backend' | 'mobile' | 'desktop' | 'tools' | 'database';
    minLevel: number;
  }
  
  // API Response Types
  export interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
  }
  
  export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    hasMore: boolean;
  }
  
  // Form Types
  export interface FormField {
    name: string;
    label: string;
    type: 'text' | 'email' | 'textarea' | 'select' | 'multiselect';
    required: boolean;
    validation?: {
      minLength?: number;
      maxLength?: number;
      pattern?: string;
    };
    options?: { value: string; label: string; }[];
  }
  
  // Navigation Types
  export interface NavItem {
    id: string;
    label: string;
    href: string;
    icon?: string;
    external?: boolean;
  }
  
  // Portfolio State
  export interface PortfolioState {
    personalInfo: PersonalInfo;
    projects: Project[];
    skills: Skill[];
    experience: Experience[];
    education: Education[];
    contact: Contact;
    testimonials: Testimonial[];
    blogPosts: BlogPost[];
    theme: ThemeState;
    ui: UIState;
    filters: {
      projects: ProjectFilters;
      skills: SkillFilters;
    };
  }
  
  // Utility Types
  export type ProjectCategory = Project['category'];
  export type SkillCategory = Skill['category'];
  export type ProjectStatus = Project['status'];