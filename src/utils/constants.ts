export const BREAKPOINTS = {
    mobile: '(max-width: 768px)',
    tablet: '(max-width: 1024px)',
    desktop: '(min-width: 1025px)',
  } as const;
  
  export const ANIMATION_DURATION = {
    fast: 200,
    normal: 300,
    slow: 500,
  } as const;
  
  export const SECTION_IDS = [
    'hero',
    'about',
    'skills',
    'projects',
    'experience',
    'contact',
  ] as const;
  
  export const PROJECT_CATEGORIES = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'desktop', label: 'Desktop Apps' },
  ] as const;
  
  export const SKILL_CATEGORIES = [
    { value: 'frontend', label: 'Frontend', color: '#3B82F6' },
    { value: 'backend', label: 'Backend', color: '#10B981' },
    { value: 'mobile', label: 'Mobile', color: '#8B5CF6' },
    { value: 'desktop', label: 'Desktop', color: '#F59E0B' },
    { value: 'database', label: 'Database', color: '#EF4444' },
    { value: 'tools', label: 'Tools', color: '#6B7280' },
  ] as const;
  
  export const CONTACT_FORM_FIELDS = [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      required: true,
      validation: { minLength: 2, maxLength: 50 }
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      required: true,
      validation: { pattern: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$' }
    },
    {
      name: 'subject',
      label: 'Subject',
      type: 'text',
      required: true,
      validation: { minLength: 5, maxLength: 100 }
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      required: true,
      validation: { minLength: 10, maxLength: 1000 }
    }
  ] as const;
  
  export const SOCIAL_LINKS = {
    github: 'https://github.com/DanWin85',
    linkedin: 'https://linkedin.com/in/danwin85',
    twitter: 'https://twitter.com/danwin85',
    email: 'mailto:dan.win@example.com',
  } as const;