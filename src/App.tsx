// src/App.tsx - Replace your App.tsx with this version that includes Skills Section
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import Header from './components/layout/Header';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import AnimatedSection from './components/AnimatedSection';
import ParallaxBackground  from './components/AnimatedSection';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Dynamic theme that responds to dark mode toggle
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
      background: {
        default: darkMode ? '#0a0a0a' : '#fafafa',
        paper: darkMode ? '#1a1a1a' : '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: '3.5rem',
        lineHeight: 1.2,
      },
      h2: {
        fontWeight: 600,
        fontSize: '2.5rem',
        lineHeight: 1.3,
      },
      h3: {
        fontWeight: 600,
        fontSize: '2rem',
        lineHeight: 1.4,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
            fontWeight: 500,
            padding: '10px 24px',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: darkMode 
              ? '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          },
        },
      },
    },
  });

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} onThemeToggle={handleThemeToggle} />
      
      {/* Main Content with padding for fixed header */}
      <Box sx={{ pt: 10 }}>
        {/* Hero Section with Parallax */}
        <ParallaxBackground
          gradient={darkMode
            ? 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }
          pattern="geometric"
          darkMode={darkMode}
        >
          <AnimatedSection animationType="fade" duration={1200}>
            <Box
              id="hero"
              sx={{
                minHeight: '100vh',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: darkMode
                    ? 'rgba(0,0,0,0.3)'
                    : 'rgba(255,255,255,0.1)',
                  zIndex: 1,
                },
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 2, maxWidth: '800px', px: 3 }}>
                <AnimatedSection animationType="slideUp" delay={300} duration={1000}>
                  <Box
                    component="h1"
                    sx={{
                      fontSize: { xs: '2.5rem', md: '4rem' },
                      fontWeight: 700,
                      mb: 2,
                      background: 'linear-gradient(45deg, #fff 30%, #f0f0f0 90%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Dan Win
                  </Box>
                </AnimatedSection>

                <AnimatedSection animationType="slideUp" delay={600} duration={1000}>
                  <Box
                    component="h2"
                    sx={{
                      fontSize: { xs: '1.5rem', md: '2rem' },
                      fontWeight: 500,
                      mb: 3,
                      opacity: 0.9,
                    }}
                  >
                    Full Stack Developer
                  </Box>
                </AnimatedSection>

                <AnimatedSection animationType="slideUp" delay={900} duration={1000}>
                  <Box
                    component="p"
                    sx={{
                      fontSize: { xs: '1rem', md: '1.2rem' },
                      mb: 4,
                      opacity: 0.8,
                      maxWidth: '600px',
                      mx: 'auto',
                      lineHeight: 1.6,
                    }}
                  >
                    Passionate software engineering graduate specializing in modern web technologies, 
                    mobile development, and desktop applications. I create innovative solutions 
                    that make a difference.
                  </Box>
                </AnimatedSection>
                
                <AnimatedSection animationType="scale" delay={1200} duration={800}>
                  <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Box
                      component="button"
                      onClick={() => {
                        const element = document.getElementById('projects');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      sx={{
                        px: 4,
                        py: 2,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        border: 'none',
                        borderRadius: 2,
                        background: 'rgba(255,255,255,0.2)',
                        color: 'white',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(255,255,255,0.3)',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      View My Work
                    </Box>
                    <Box
                      component="button"
                      onClick={() => {
                        const element = document.getElementById('contact');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      sx={{
                        px: 4,
                        py: 2,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        border: '2px solid rgba(255,255,255,0.5)',
                        borderRadius: 2,
                        background: 'transparent',
                        color: 'white',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(255,255,255,0.1)',
                          borderColor: 'rgba(255,255,255,0.8)',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      Get In Touch
                    </Box>
                  </Box>
                </AnimatedSection>
              </Box>
            </Box>
          </AnimatedSection>
        </ParallaxBackground>

        {/* About Section */}
        <ParallaxBackground
          gradient={`linear-gradient(45deg, ${darkMode ? '#0a0a0a' : '#fafafa'} 30%, ${darkMode ? '#1a1a1a' : '#f0f0f0'} 90%)`}
          pattern="dots"
          darkMode={darkMode}
          speed={0.3}
        >
          <AnimatedSection animationType="slideRight" duration={1000}>
            <Box
              id="about"
              sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                px: 3,
                py: 8,
                textAlign: 'center', // Center align text
              }}
            >
              <AnimatedSection animationType="slideUp" delay={200} duration={800}>
                <Box 
                  component="h1" 
                  sx={{ 
                    fontSize: '2.5rem', 
                    mb: 2, 
                    color: 'text.primary',
                    textAlign: 'center' // Ensure heading is centered
                  }}
                >
                  About Me
                </Box>
              </AnimatedSection>
              <AnimatedSection animationType="fade" delay={500} duration={1000}>
                <Box 
                  component="p" 
                  sx={{ 
                    fontSize: '1.2rem', 
                    color: 'text.secondary', 
                    textAlign: 'center', 
                    maxWidth: '600px',
                    mx: 'auto', // Center the paragraph
                    lineHeight: 1.6,
                  }}
                >
                  Recent Software Engineering graduate with a passion for creating innovative solutions 
                  across web, mobile, and desktop platforms. I love learning new technologies and 
                  building applications that solve real-world problems.
                </Box>
              </AnimatedSection>
            </Box>
          </AnimatedSection>
        </ParallaxBackground>

        {/* Skills Section with Animation */}
        <AnimatedSection animationType="slideLeft" duration={1200}>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <SkillsSection darkMode={darkMode} />
          </Box>
        </AnimatedSection>

        {/* Projects Section with Animation */}
        <ParallaxBackground
          pattern="grid"
          darkMode={darkMode}
          speed={0.2}
        >
          <AnimatedSection animationType="scale" duration={1000} delay={200}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <ProjectsSection darkMode={darkMode} />
            </Box>
          </AnimatedSection>
        </ParallaxBackground>

        {/* Contact Section with Animation */}
        <AnimatedSection animationType="slideUp" duration={1200}>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <ContactSection darkMode={darkMode} />
          </Box>
        </AnimatedSection>
      </Box>
    </ThemeProvider>
  );
};

export default App;