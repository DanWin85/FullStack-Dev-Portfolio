import { useTypedSelector } from './useTypedSelector';
import { useTypedDispatch } from './useTypedDispatch';
import {
  setProjects,
  addProject,
  updateProject,
  removeProject,
  setSkills,
  addSkill,
  updateSkill,
  setPersonalInfo,
  setExperience,
  setEducation,
  setTestimonials,
} from '../store/slices/portfolioSlice';
import type { Project, Skill, PersonalInfo, Experience, Education, Testimonial } from '../types';

export const usePortfolio = () => {
  const dispatch = useTypedDispatch();
  const portfolioState = useTypedSelector(state => state.portfolio);

  const projectActions = {
    setProjects: (projects: Project[]) => dispatch(setProjects(projects)),
    addProject: (project: Project) => dispatch(addProject(project)),
    updateProject: (project: Project) => dispatch(updateProject(project)),
    removeProject: (projectId: string) => dispatch(removeProject(projectId)),
  };

  const skillActions = {
    setSkills: (skills: Skill[]) => dispatch(setSkills(skills)),
    addSkill: (skill: Skill) => dispatch(addSkill(skill)),
    updateSkill: (skill: Skill) => dispatch(updateSkill(skill)),
  };

  const dataActions = {
    setPersonalInfo: (info: PersonalInfo) => dispatch(setPersonalInfo(info)),
    setExperience: (experience: Experience[]) => dispatch(setExperience(experience)),
    setEducation: (education: Education[]) => dispatch(setEducation(education)),
    setTestimonials: (testimonials: Testimonial[]) => dispatch(setTestimonials(testimonials)),
  };

  // Computed values
  const featuredProjects = portfolioState.projects.filter(project => project.featured);
  const completedProjects = portfolioState.projects.filter(project => project.status === 'completed');
  const skillsByCategory = portfolioState.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return {
    ...portfolioState,
    featuredProjects,
    completedProjects,
    skillsByCategory,
    ...projectActions,
    ...skillActions,
    ...dataActions,
  };
};