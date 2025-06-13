import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Project, Skill, Experience, Education, Testimonial, PersonalInfo, Contact } from '../../types';

interface PortfolioState {
  personalInfo: PersonalInfo;
  projects: Project[];
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  contact: Contact;
  testimonials: Testimonial[];
  loading: boolean;
  error: string | null;
}

const initialState: PortfolioState = {
  personalInfo: {
    fullName: 'Dan Win',
    title: 'Full Stack Developer',
    bio: 'Passionate software engineering graduate with expertise in modern web technologies, mobile development, and desktop applications. I love creating innovative solutions that make a difference.',
    tagline: 'Building digital experiences across all platforms',
    availableForWork: true,
  },
  projects: [],
  skills: [],
  experience: [],
  education: [],
  contact: {
    email: 'dan.win@example.com',
    phone: '+1 (555) 123-4567',
    location: 'Your City, State',
    github: 'https://github.com/DanWin85',
    linkedin: 'https://linkedin.com/in/danwin85',
    website: 'https://danwin-portfolio.com',
  },
  testimonials: [],
  loading: false,
  error: null,
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setPersonalInfo: (state, action: PayloadAction<PersonalInfo>) => {
      state.personalInfo = action.payload;
    },
    setProjects: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
    },
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
    },
    updateProject: (state, action: PayloadAction<Project>) => {
      const index = state.projects.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.projects[index] = action.payload;
      }
    },
    removeProject: (state, action: PayloadAction<string>) => {
      state.projects = state.projects.filter(p => p.id !== action.payload);
    },
    setSkills: (state, action: PayloadAction<Skill[]>) => {
      state.skills = action.payload;
    },
    addSkill: (state, action: PayloadAction<Skill>) => {
      state.skills.push(action.payload);
    },
    updateSkill: (state, action: PayloadAction<Skill>) => {
      const index = state.skills.findIndex(s => s.id === action.payload.id);
      if (index !== -1) {
        state.skills[index] = action.payload;
      }
    },
    setExperience: (state, action: PayloadAction<Experience[]>) => {
      state.experience = action.payload;
    },
    setEducation: (state, action: PayloadAction<Education[]>) => {
      state.education = action.payload;
    },
    setTestimonials: (state, action: PayloadAction<Testimonial[]>) => {
      state.testimonials = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setPersonalInfo,
  setProjects,
  addProject,
  updateProject,
  removeProject,
  setSkills,
  addSkill,
  updateSkill,
  setExperience,
  setEducation,
  setTestimonials,
  setLoading,
  setError,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;