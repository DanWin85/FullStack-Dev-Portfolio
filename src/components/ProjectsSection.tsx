// src/components/ProjectsSection.tsx - Create this new file
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  IconButton,
  useTheme,
  alpha,
  Fade,
  Grow,
  Dialog,
  DialogContent,
  DialogActions,
  Tabs,
  Tab,
  Badge,
} from '@mui/material';
import {
  GitHub,
  Launch,
  Web,
  PhoneAndroid,
  Computer,
  Star,
  Close,
  DateRange,
  Code,
} from '@mui/icons-material';

// Project data
const projectsData = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB featuring user authentication, payment processing, and admin dashboard.',
    longDescription: 'A comprehensive e-commerce platform built from scratch using modern web technologies. Features include user registration and authentication, product catalog with search and filtering, shopping cart functionality, secure payment processing with Stripe, order management, and a complete admin dashboard for managing products, orders, and users.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
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
    images: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
    ],
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
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    ],
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
    images: [
      'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop',
    ],
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
  },
  {
    id: '5',
    title: 'AI-Powered Code Assistant',
    description: 'VS Code extension that provides intelligent code suggestions and documentation using machine learning.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
    ],
    technologies: ['TypeScript', 'VS Code API', 'Python', 'TensorFlow', 'OpenAI API'],
    category: 'desktop',
    githubUrl: 'https://github.com/DanWin85/ai-code-assistant',
    featured: true,
    startDate: '2024-04-01',
    status: 'in-progress',
    highlights: [
      'Integrated OpenAI API for intelligent suggestions',
      'Custom machine learning model for code analysis',
      'Real-time code completion and documentation',
      '500+ downloads on VS Code Marketplace'
    ]
  },
  {
    id: '6',
    title: 'Fitness Tracking PWA',
    description: 'Progressive Web App for fitness tracking with offline capabilities and device integration.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    ],
    technologies: ['React', 'PWA', 'Web APIs', 'IndexedDB', 'Service Workers'],
    category: 'web',
    githubUrl: 'https://github.com/DanWin85/fitness-pwa',
    liveUrl: 'https://danwin-fitness.netlify.app',
    featured: false,
    startDate: '2024-05-01',
    status: 'completed',
    highlights: [
      'Offline-first PWA with service workers',
      'Integration with device sensors and GPS',
      'Custom workout planning and tracking',
      'Push notifications for workout reminders'
    ]
  }
];

const categories = [
  { id: 'all', label: 'All Projects', icon: <Code /> },
  { id: 'web', label: 'Web Apps', icon: <Web /> },
  { id: 'mobile', label: 'Mobile Apps', icon: <PhoneAndroid /> },
  { id: 'desktop', label: 'Desktop Apps', icon: <Computer /> },
];

interface ProjectCardProps {
  project: typeof projectsData[0];
  index: number;
  darkMode: boolean;
  onViewDetails: (project: typeof projectsData[0]) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, darkMode, onViewDetails }) => {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return <Web />;
      case 'mobile': return <PhoneAndroid />;
      case 'desktop': return <Computer />;
      default: return <Code />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'web': return '#3B82F6';
      case 'mobile': return '#8B5CF6';
      case 'desktop': return '#F59E0B';
      default: return '#6B7280';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#10B981';
      case 'in-progress': return '#F59E0B';
      case 'planned': return '#6B7280';
      default: return '#6B7280';
    }
  };

  return (
    <Grow in={visible} timeout={600}>
      <Card
        sx={{
          height: 520, // Fixed height for all cards
          width: '100%', // Ensure full width within container
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: darkMode 
              ? `0 20px 40px ${alpha('#000', 0.4)}`
              : `0 20px 40px ${alpha('#000', 0.15)}`,
          },
        }}
      >
        {/* Featured Badge */}
        {project.featured && (
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              zIndex: 2,
              backgroundColor: alpha('#FFD700', 0.9),
              color: '#000',
              px: 1,
              py: 0.5,
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              fontSize: '0.75rem',
              fontWeight: 600,
            }}
          >
            <Star sx={{ fontSize: 14 }} />
            Featured
          </Box>
        )}

        {/* Status Badge */}
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            zIndex: 2,
            backgroundColor: alpha(getStatusColor(project.status), 0.9),
            color: 'white',
            px: 1,
            py: 0.5,
            borderRadius: 1,
            fontSize: '0.75rem',
            fontWeight: 500,
            textTransform: 'capitalize',
          }}
        >
          {project.status.replace('-', ' ')}
        </Box>

        <CardMedia
          component="img"
          height="200" // Fixed height for all images
          image={project.image}
          alt={project.title}
          sx={{
            transition: 'transform 0.3s ease',
            objectFit: 'cover', // Ensures proper image scaling
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />

        <CardContent sx={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          p: 2.5,
          height: 'calc(520px - 200px)', // Remaining height after image
        }}>
          {/* Category and Date */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ color: getCategoryColor(project.category) }}>
                {getCategoryIcon(project.category)}
              </Box>
              <Typography variant="caption" color="text.secondary" fontWeight={500}>
                {project.category.toUpperCase()}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <DateRange sx={{ fontSize: 14, color: 'text.secondary' }} />
              <Typography variant="caption" color="text.secondary">
                {new Date(project.startDate).getFullYear()}
              </Typography>
            </Box>
          </Box>

          {/* Title */}
          <Typography 
            variant="h6" 
            component="h3" 
            gutterBottom 
            fontWeight={600}
            sx={{ 
              mb: 1.5,
              lineHeight: 1.3,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {project.title}
          </Typography>

          {/* Description */}
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ 
              mb: 2, 
              lineHeight: 1.5,
              flexGrow: 1,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {project.description}
          </Typography>

          {/* Technologies */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2, minHeight: 50 }}>
            {project.technologies.slice(0, 3).map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                variant="outlined"
                sx={{
                  fontSize: '0.7rem',
                  height: 22,
                  '& .MuiChip-label': { px: 1 },
                }}
              />
            ))}
            {project.technologies.length > 3 && (
              <Chip
                label={`+${project.technologies.length - 3}`}
                size="small"
                variant="outlined"
                sx={{
                  fontSize: '0.7rem',
                  height: 22,
                  '& .MuiChip-label': { px: 1 },
                }}
              />
            )}
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
            <Button
              variant="outlined"
              size="small"
              onClick={() => onViewDetails(project)}
              sx={{ flex: 1 }}
            >
              View Details
            </Button>
            {project.githubUrl && (
              <IconButton
                component="a"
                href={project.githubUrl}
                target="_blank"
                size="small"
                sx={{ 
                  border: 1, 
                  borderColor: 'divider',
                  '&:hover': { borderColor: 'primary.main' }
                }}
              >
                <GitHub fontSize="small" />
              </IconButton>
            )}
            {project.liveUrl && (
              <IconButton
                component="a"
                href={project.liveUrl}
                target="_blank"
                size="small"
                sx={{ 
                  border: 1, 
                  borderColor: 'divider',
                  '&:hover': { borderColor: 'primary.main' }
                }}
              >
                <Launch fontSize="small" />
              </IconButton>
            )}
          </Box>
        </CardContent>
      </Card>
    </Grow>
  );
};

interface ProjectDetailModalProps {
  project: typeof projectsData[0] | null;
  open: boolean;
  onClose: () => void;
  darkMode: boolean;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, open, onClose, darkMode }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          maxHeight: '90vh',
          backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
        }
      }}
    >
      <DialogContent sx={{ p: 0 }}>
        {/* Header */}
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="300"
            image={project.images?.[selectedImageIndex] || project.image}
            alt={project.title}
          />
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              backgroundColor: alpha('#000', 0.7),
              color: 'white',
              '&:hover': { backgroundColor: alpha('#000', 0.8) },
            }}
          >
            <Close />
          </IconButton>
        </Box>

        {/* Image Thumbnails */}
        {project.images && project.images.length > 1 && (
          <Box sx={{ display: 'flex', gap: 1, p: 2, justifyContent: 'center' }}>
            {project.images.map((image, index) => (
              <Box
                key={index}
                component="img"
                src={image}
                alt={`${project.title} ${index + 1}`}
                onClick={() => setSelectedImageIndex(index)}
                sx={{
                  width: 60,
                  height: 40,
                  objectFit: 'cover',
                  borderRadius: 1,
                  cursor: 'pointer',
                  border: selectedImageIndex === index ? 2 : 1,
                  borderColor: selectedImageIndex === index ? 'primary.main' : 'divider',
                  transition: 'all 0.2s ease',
                }}
              />
            ))}
          </Box>
        )}

        {/* Content */}
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom fontWeight={600}>
            {project.title}
          </Typography>

          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
            {project.longDescription || project.description}
          </Typography>

          {/* Technologies */}
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Technologies Used
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
            {project.technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                variant="outlined"
                sx={{ fontWeight: 500 }}
              />
            ))}
          </Box>

          {/* Highlights */}
          {project.highlights && (
            <>
              <Typography variant="h6" gutterBottom>
                Key Highlights
              </Typography>
              <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                {project.highlights.map((highlight, index) => (
                  <Typography component="li" key={index} variant="body2" sx={{ mb: 1 }}>
                    {highlight}
                  </Typography>
                ))}
              </Box>
            </>
          )}
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 3, pt: 0 }}>
        {project.githubUrl && (
          <Button
            variant="outlined"
            startIcon={<GitHub />}
            component="a"
            href={project.githubUrl}
            target="_blank"
          >
            View Code
          </Button>
        )}
        {project.liveUrl && (
          <Button
            variant="contained"
            startIcon={<Launch />}
            component="a"
            href={project.liveUrl}
            target="_blank"
          >
            Live Demo
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

interface ProjectsSectionProps {
  darkMode?: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ darkMode = false }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects = selectedCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  const handleViewDetails = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const getProjectCount = (category: string) => {
    return category === 'all' 
      ? projectsData.length 
      : projectsData.filter(p => p.category === category).length;
  };

  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.02,
          backgroundImage: darkMode
            ? 'linear-gradient(30deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff)'
            : 'linear-gradient(30deg, #000 12%, transparent 12.5%, transparent 87%, #000 87.5%, #000)',
          backgroundSize: '20px 35px',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Fade in={sectionVisible} timeout={800}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                background: darkMode
                  ? 'linear-gradient(45deg, #fff 30%, #ccc 90%)'
                  : 'linear-gradient(45deg, #1976d2 30%, #dc004e 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              }}
            >
              Featured Projects
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6, mb: 4 }}
            >
              A showcase of my work across web, mobile, and desktop platforms
            </Typography>

            {/* Category Filters */}
            <Tabs
              value={selectedCategory}
              onChange={(_, newValue) => setSelectedCategory(newValue)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTabs-indicator': {
                  height: 3,
                  borderRadius: 1.5,
                },
              }}
            >
              {categories.map((category) => (
                <Tab
                  key={category.id}
                  value={category.id}
                  label={
                    <Badge
                      badgeContent={getProjectCount(category.id)}
                      color="primary"
                      sx={{
                        '& .MuiBadge-badge': {
                          fontSize: '0.7rem',
                          height: 18,
                          minWidth: 18,
                        }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {category.icon}
                        {category.label}
                      </Box>
                    </Badge>
                  }
                  sx={{
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                  }}
                />
              ))}
            </Tabs>
          </Box>
        </Fade>

        {/* Projects Grid */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            justifyContent: { xs: 'center', sm: 'flex-start' },
            '@media (max-width: 739px)': {
              flexDirection: 'column',
              alignItems: 'center',
            },
          }}
        >
          {filteredProjects.map((project, index) => (
            <Box
              key={project.id}
              sx={{
                width: { 
                  xs: '100%', 
                  sm: 'calc(50% - 12px)', 
                  lg: 'calc(33.333% - 16px)' 
                },
                maxWidth: { xs: '400px', sm: 'none' },
                '@media (max-width: 739px)': {
                  width: '100%',
                  maxWidth: '400px',
                },
              }}
            >
              <ProjectCard
                project={project}
                index={index}
                darkMode={darkMode}
                onViewDetails={handleViewDetails}
              />
            </Box>
          ))}
        </Box>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No projects found in this category.
            </Typography>
          </Box>
        )}
      </Container>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        open={modalOpen}
        onClose={handleCloseModal}
        darkMode={darkMode}
      />
    </Box>
  );
};

export default ProjectsSection;