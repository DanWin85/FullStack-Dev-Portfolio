// src/data/sampleData.ts
import type { Project, Skill, Experience, Education, Testimonial } from '../types';

export const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB featuring user authentication, payment processing, and admin dashboard.',
    longDescription: 'A comprehensive e-commerce platform built from scratch using modern web technologies. Features include user registration and authentication, product catalog with search and filtering, shopping cart functionality, secure payment processing with Stripe, order management, and a complete admin dashboard for managing products, orders, and users.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT', 'Material-UI'],
    category: 'web',
    githubUrl: 'https://github.com/DanWin85/ecommerce-platform',
    liveUrl: 'https://danwin-ecommerce.vercel.app',
    featured: true,
    startDate: '2024-01-15',
    endDate: '2024-03-20',
    status: 'completed',
    highlights: [
      'Implemented secure payment processing with Stripe',
      'Built responsive design supporting mobile and desktop',
      'Achieved 95% test coverage with Jest and React Testing Library',
      'Deployed with CI/CD pipeline using GitHub Actions'
    ]
  },
  {
    id: '2',
    title: 'Task Management Mobile App',
    description: 'Cross-platform mobile app built with React Native featuring offline functionality, push notifications, and cloud synchronization.',
    longDescription: 'A feature-rich task management application designed for productivity enthusiasts. The app provides seamless task creation, organization, and tracking with offline capabilities. Users can organize tasks by projects, set due dates and reminders, and sync data across multiple devices.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux Toolkit', 'React Navigation', 'Expo'],
    category: 'mobile',
    githubUrl: 'https://github.com/DanWin85/task-manager-app',
    featured: true,
    startDate: '2024-02-01',
    endDate: '2024-04-15',
    status: 'completed',
    highlights: [
      'Implemented offline-first architecture with local SQLite storage',
      'Built custom notification system with Firebase Cloud Messaging',
      'Created smooth animations and micro-interactions',
      'Published to both iOS App Store and Google Play Store'
    ]
  },
  {
    id: '3',
    title: 'Desktop Analytics Dashboard',
    description: 'Electron-based desktop application for data visualization and analytics built with React and D3.js for interactive charts.',
    longDescription: 'A powerful desktop application designed for business analysts and data scientists. The dashboard provides real-time data visualization, interactive charts, and comprehensive reporting tools. Built with Electron to ensure cross-platform compatibility.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    technologies: ['Electron', 'React', 'TypeScript', 'D3.js', 'SQLite', 'Chart.js'],
    category: 'desktop',
    githubUrl: 'https://github.com/DanWin85/analytics-dashboard',
    featured: false,
    startDate: '2023-11-01',
    endDate: '2024-01-10',
    status: 'completed',
    highlights: [
      'Processed and visualized datasets with 100,000+ records',
      'Created custom chart components with D3.js',
      'Implemented data export functionality (PDF, Excel, CSV)',
      'Built with cross-platform compatibility (Windows, macOS, Linux)'
    ]
  },
  {
    id: '4',
    title: 'Real-time Chat Application',
    description: 'Modern chat application with real-time messaging, file sharing, and video calls built with Socket.io and WebRTC.',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'Socket.io', 'WebRTC', 'PostgreSQL', 'Redis'],
    category: 'web',
    githubUrl: 'https://github.com/DanWin85/chat-application',
    liveUrl: 'https://danwin-chat.herokuapp.com',
    featured: false,
    startDate: '2024-03-01',
    status: 'in-progress',
    highlights: [
      'Real-time messaging with Socket.io',
      'File sharing and image uploads',
      'Video and voice calling with WebRTC',
      'Message encryption for security'
    ]
  }
];

export const sampleSkills: Skill[] = [
  // Frontend
  { id: '1', name: 'React', level: 90, category: 'frontend', yearsOfExperience: 2 },
  { id: '2', name: 'TypeScript', level: 85, category: 'frontend', yearsOfExperience: 1.5 },
  { id: '3', name: 'JavaScript', level: 95, category: 'frontend', yearsOfExperience: 3 },
  { id: '4', name: 'HTML/CSS', level: 90, category: 'frontend', yearsOfExperience: 3 },
  { id: '5', name: 'Vue.js', level: 70, category: 'frontend', yearsOfExperience: 1 },
  { id: '6', name: 'Angular', level: 65, category: 'frontend', yearsOfExperience: 0.5 },
  
  // Backend
  { id: '7', name: 'Node.js', level: 85, category: 'backend', yearsOfExperience: 2 },
  { id: '8', name: 'Express.js', level: 80, category: 'backend', yearsOfExperience: 2 },
  { id: '9', name: 'Python', level: 75, category: 'backend', yearsOfExperience: 2 },
  { id: '10', name: 'Django', level: 70, category: 'backend', yearsOfExperience: 1 },
  { id: '11', name: 'C#', level: 80, category: 'backend', yearsOfExperience: 1.5 },
  { id: '12', name: '.NET Core', level: 75, category: 'backend', yearsOfExperience: 1 },
  
  // Mobile
  { id: '13', name: 'React Native', level: 80, category: 'mobile', yearsOfExperience: 1.5 },
  { id: '14', name: 'Flutter', level: 60, category: 'mobile', yearsOfExperience: 0.5 },
  { id: '15', name: 'Expo', level: 75, category: 'mobile', yearsOfExperience: 1 },
  
  // Desktop
  { id: '16', name: 'Electron', level: 70, category: 'desktop', yearsOfExperience: 1 },
  { id: '17', name: 'WPF', level: 65, category: 'desktop', yearsOfExperience: 0.5 },
  
  // Database
  { id: '18', name: 'MongoDB', level: 75, category: 'database', yearsOfExperience: 1.5 },
  { id: '19', name: 'PostgreSQL', level: 70, category: 'database', yearsOfExperience: 1 },
  { id: '20', name: 'MySQL', level: 75, category: 'database', yearsOfExperience: 2 },
  { id: '21', name: 'SQLite', level: 80, category: 'database', yearsOfExperience: 2 },
  
  // Tools
  { id: '22', name: 'Git', level: 90, category: 'tools', yearsOfExperience: 3 },
  { id: '23', name: 'Docker', level: 70, category: 'tools', yearsOfExperience: 1 },
  { id: '24', name: 'AWS', level: 65, category: 'tools', yearsOfExperience: 0.5 },
  { id: '25', name: 'Firebase', level: 75, category: 'tools', yearsOfExperience: 1.5 },
  { id: '26', name: 'Vercel', level: 80, category: 'tools', yearsOfExperience: 1 },
];

export const sampleExperience: Experience[] = [
  {
    id: '1',
    title: 'Junior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    location: 'Remote',
    startDate: '2024-01-15',
    current: true,
    description: [
      'Developed and maintained web applications using React, Node.js, and MongoDB',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
      'Implemented responsive designs and ensured cross-browser compatibility',
      'Participated in code reviews and contributed to best practices documentation'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'AWS'],
    achievements: [
      'Reduced application load time by 40% through optimization techniques',
      'Implemented automated testing that increased code coverage to 85%'
    ]
  },
  {
    id: '2',
    title: 'Software Engineering Intern',
    company: 'StartupXYZ',
    location: 'San Francisco, CA',
    startDate: '2023-06-01',
    endDate: '2023-08-31',
    current: false,
    description: [
      'Built mobile applications using React Native and Expo',
      'Worked closely with UI/UX designers to implement pixel-perfect designs',
      'Integrated third-party APIs and services',
      'Contributed to the company\'s main product used by 10,000+ users'
    ],
    technologies: ['React Native', 'Expo', 'Firebase', 'JavaScript'],
    achievements: [
      'Developed key features that increased user engagement by 25%',
      'Mentored 2 junior interns on React Native best practices'
    ]
  }
];

export const sampleEducation: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'University of Technology',
    location: 'Your City, State',
    startDate: '2020-09-01',
    endDate: '2024-05-15',
    gpa: 3.8,
    honors: ['Magna Cum Laude', 'Dean\'s List (6 semesters)'],
    relevantCoursework: [
      'Data Structures and Algorithms',
      'Software Engineering Principles',
      'Database Design',
      'Web Development',
      'Mobile Application Development',
      'Computer Networks',
      'Software Testing',
      'Human-Computer Interaction'
    ]
  }
];

export const sampleTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Senior Developer',
    company: 'Tech Solutions Inc.',
    content: 'Dan is an exceptional developer with a keen eye for detail. His ability to learn new technologies quickly and implement them effectively is impressive. He consistently delivers high-quality code and is a great team player.',
    rating: 5
  },
  {
    id: '2',
    name: 'Mike Chen',
    role: 'Product Manager',
    company: 'StartupXYZ',
    content: 'Working with Dan was a pleasure. He took initiative on several key features and delivered them ahead of schedule. His communication skills and technical expertise make him a valuable asset to any development team.',
    rating: 5
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    role: 'Professor',
    company: 'University of Technology',
    content: 'Dan was one of my top students in the Software Engineering program. His passion for coding and problem-solving abilities set him apart. I highly recommend him for any software development role.',
    rating: 5
  }
];

// Navigation items
export const navigationItems = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];