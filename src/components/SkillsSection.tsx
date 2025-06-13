import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  useTheme,
  alpha,
  Fade,
  Grow,
} from '@mui/material';
import {
  Code,
  Storage,
  PhoneAndroid,
  Computer,
  Web,
  Build,
} from '@mui/icons-material';

// Skill data with categories
const skillsData = {
  frontend: {
    title: 'Frontend Development',
    icon: <Web />,
    color: '#3B82F6',
    skills: [
      { name: 'React', level: 90, experience: '2+ years' },
      { name: 'TypeScript', level: 85, experience: '1.5+ years' },
      { name: 'JavaScript', level: 95, experience: '3+ years' },
      { name: 'HTML/CSS', level: 90, experience: '3+ years' },
      { name: 'Material-UI', level: 80, experience: '1+ year' },
      { name: 'Responsive Design', level: 85, experience: '2+ years' },
    ]
  },
  backend: {
    title: 'Backend Development',
    icon: <Code />,
    color: '#10B981',
    skills: [
      { name: 'Node.js', level: 85, experience: '2+ years' },
      { name: 'Express.js', level: 80, experience: '2+ years' },
      { name: 'Python', level: 75, experience: '2+ years' },
      { name: 'C#/.NET', level: 75, experience: '1+ year' },
      { name: 'RESTful APIs', level: 85, experience: '2+ years' },
      { name: 'GraphQL', level: 65, experience: '6+ months' },
    ]
  },
  database: {
    title: 'Database & Storage',
    icon: <Storage />,
    color: '#EF4444',
    skills: [
      { name: 'MongoDB', level: 75, experience: '1.5+ years' },
      { name: 'PostgreSQL', level: 70, experience: '1+ year' },
      { name: 'MySQL', level: 75, experience: '2+ years' },
      { name: 'Redis', level: 60, experience: '6+ months' },
      { name: 'Firebase', level: 75, experience: '1+ year' },
    ]
  },
  mobile: {
    title: 'Mobile Development',
    icon: <PhoneAndroid />,
    color: '#8B5CF6',
    skills: [
      { name: 'React Native', level: 80, experience: '1.5+ years' },
      { name: 'Expo', level: 75, experience: '1+ year' },
      { name: 'Flutter', level: 60, experience: '6+ months' },
      { name: 'Mobile UI/UX', level: 70, experience: '1+ year' },
    ]
  },
  desktop: {
    title: 'Desktop Development',
    icon: <Computer />,
    color: '#F59E0B',
    skills: [
      { name: 'Electron', level: 70, experience: '1+ year' },
      { name: 'WPF', level: 65, experience: '6+ months' },
      { name: 'Cross-platform', level: 75, experience: '1+ year' },
    ]
  },
  tools: {
    title: 'Tools & DevOps',
    icon: <Build />,
    color: '#6B7280',
    skills: [
      { name: 'Git/GitHub', level: 90, experience: '3+ years' },
      { name: 'Docker', level: 70, experience: '1+ year' },
      { name: 'AWS', level: 65, experience: '6+ months' },
      { name: 'Vercel/Netlify', level: 80, experience: '1+ year' },
      { name: 'CI/CD', level: 65, experience: '6+ months' },
    ]
  }
};

interface SkillCardProps {
  category: string;
  data: typeof skillsData.frontend;
  index: number;
  darkMode: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ category, data, index, darkMode }) => {
  const [visible, setVisible] = useState(false);
  const [progressVisible, setProgressVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), index * 200);
    const progressTimer = setTimeout(() => setProgressVisible(true), index * 200 + 500);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(progressTimer);
    };
  }, [index]);

  const getSkillLevelText = (level: number): string => {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    return 'Beginner';
  };

  const getSkillLevelColor = (level: number): string => {
    if (level >= 90) return '#10B981';
    if (level >= 75) return '#3B82F6';
    if (level >= 60) return '#F59E0B';
    return '#EF4444';
  };

  return (
    <Grow in={visible} timeout={600}>
      <Card
        sx={{
          height: '100%',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: darkMode 
              ? `0 12px 24px ${alpha(data.color, 0.3)}`
              : `0 12px 24px ${alpha(data.color, 0.2)}`,
          },
          background: darkMode
            ? `linear-gradient(145deg, ${alpha(data.color, 0.1)}, ${alpha('#000', 0.2)})`
            : `linear-gradient(145deg, ${alpha(data.color, 0.05)}, ${alpha('#fff', 0.8)})`,
          border: `1px solid ${alpha(data.color, 0.2)}`,
        }}
      >
        <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Header */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Box
              sx={{
                p: 1.5,
                borderRadius: 2,
                backgroundColor: alpha(data.color, 0.1),
                color: data.color,
                mr: 2,
              }}
            >
              {data.icon}
            </Box>
            <Typography variant="h6" fontWeight={600} color="text.primary">
              {data.title}
            </Typography>
          </Box>

          {/* Skills List */}
          <Box sx={{ flexGrow: 1 }}>
            {data.skills.map((skill, skillIndex) => (
              <Box key={skill.name} sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography variant="body2" fontWeight={500} color="text.primary">
                    {skill.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Chip
                      label={getSkillLevelText(skill.level)}
                      size="small"
                      sx={{
                        backgroundColor: alpha(getSkillLevelColor(skill.level), 0.1),
                        color: getSkillLevelColor(skill.level),
                        fontWeight: 500,
                        fontSize: '0.7rem',
                      }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {skill.level}%
                    </Typography>
                  </Box>
                </Box>
                
                <LinearProgress
                  variant="determinate"
                  value={progressVisible ? skill.level : 0}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: alpha(data.color, 0.1),
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 3,
                      backgroundColor: data.color,
                      transition: 'transform 1s ease-in-out',
                      transitionDelay: `${skillIndex * 100}ms`,
                    },
                  }}
                />
                
                <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
                  {skill.experience}
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Grow>
  );
};

interface SkillsSectionProps {
  darkMode?: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ darkMode = false }) => {
  const theme = useTheme();
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      id="skills"
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
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
          opacity: 0.03,
          backgroundImage: darkMode
            ? 'radial-gradient(circle at 25% 25%, #fff 1px, transparent 1px)'
            : 'radial-gradient(circle at 25% 25%, #000 1px, transparent 1px)',
          backgroundSize: '50px 50px',
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
              Skills & Technologies
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}
            >
              A comprehensive overview of my technical expertise across different platforms and technologies
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={4}>
          {Object.entries(skillsData).map(([category, data], index) => (
            <Grid item xs={12} md={6} lg={4} key={category}>
              <SkillCard
                category={category}
                data={data}
                index={index}
                darkMode={darkMode}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsSection;