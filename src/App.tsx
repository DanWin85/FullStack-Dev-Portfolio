import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import Header from './components/layout/Header';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ParallaxBackground from './components/AnimatedSection';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

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
      MuiContainer: {
        styleOverrides: {
          root: {
            maxWidth: 'none !important',
            width: '100%',
            paddingLeft: '100px',
            paddingRight: '100px',
            '@media (max-width: 768px)': {
              paddingLeft: '20px',
              paddingRight: '20px',
            },
            '@media (max-width: 480px)': {
              paddingLeft: '16px',
              paddingRight: '16px',
            },
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
      
      <Box 
        sx={{ 
          pt: 10,
          width: '100%',
          minHeight: '100vh',
        }}
        className="main-content"
      >
        <Box 
          className="hero-section"
          sx={{
            width: '100%',
            px: { xs: 2, sm: 3, md: '100px' },
            py: { xs: 4, md: 8 },
          }}
        >
          <ParallaxBackground
            gradient={darkMode
              ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)'
              : 'linear-gradient(135deg, #f0f8ff 0%, #e6f2ff 50%, #f0f8ff 100%)'
            }
            height="100vh"
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Box 
              sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                gap: { xs: 4, md: 8 },
                maxWidth: '1200px',
                width: '100%',
                margin: '0 auto',
              }}
            >
              <Box 
                sx={{ 
                  order: { xs: 1, md: 2 },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: { xs: 'none', md: '0 0 400px' },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: { xs: 280, sm: 320, md: 380 },
                    height: { xs: 280, sm: 320, md: 380 },
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: `4px solid ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                    boxShadow: darkMode 
                      ? '0 20px 60px rgba(0,0,0,0.4)' 
                      : '0 20px 60px rgba(0,0,0,0.15)',
                    background: 'linear-gradient(45deg, #1976d2, #dc004e)',
                    padding: '4px',
                  }}
                >
                  <Box
                    component="img"
                    src="src/assets/1725937747091.jpg"
                    alt="Dan Win - Full Stack Developer"
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      filter: 'grayscale(100%) contrast(1.1) brightness(1.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        filter: 'grayscale(80%) contrast(1.2) brightness(1.2)',
                        transform: 'scale(1.02)',
                      },
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: '50%',
                      background: `linear-gradient(45deg, 
                        ${darkMode ? 'rgba(25,118,210,0.1)' : 'rgba(25,118,210,0.05)'}, 
                        ${darkMode ? 'rgba(220,0,78,0.1)' : 'rgba(220,0,78,0.05)'})`,
                      pointerEvents: 'none',
                    }}
                  />
                </Box>
              </Box>

              <Box 
                sx={{ 
                  order: { xs: 2, md: 1 },
                  textAlign: { xs: 'center', md: 'left' },
                  color: 'text.primary',
                  flex: { xs: 'none', md: 1 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: { xs: 'center', md: 'flex-start' },
                }}
              >
                <h1 style={{ 
                  margin: 0, 
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #1976d2 30%, #dc004e 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '1rem',
                }}>
                  Daniel Wingate
                </h1>
                <p style={{ 
                  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', 
                  margin: '1rem 0', 
                  color: darkMode ? '#ccc' : '#666',
                  fontWeight: 500,
                }}>
                  Full Stack Developer
                </p>
                <p style={{ 
                  maxWidth: '600px', 
                  margin: '0', 
                  fontSize: 'clamp(1rem, 2vw, 1.1rem)', 
                  lineHeight: 1.6,
                  color: darkMode ? '#bbb' : '#555',
                  marginBottom: '2rem',
                }}>
                  Passionate software engineering graduate specializing in modern web
                  technologies, mobile development, and desktop applications. I create
                  innovative solutions that make a difference.
                </p>
                <Box sx={{ 
                  mt: 4, 
                  display: 'flex', 
                  gap: 2, 
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  flexWrap: 'wrap',
                  alignItems: 'center',
                }}>
                  <button style={{ 
                    backgroundColor: '#1976d2', 
                    color: 'white', 
                    border: 'none', 
                    padding: '12px 24px', 
                    borderRadius: '8px', 
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#1565c0'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#1976d2'}
                  >
                    View My Work
                  </button>
                  <button style={{ 
                    backgroundColor: 'transparent', 
                    color: darkMode ? 'white' : '#1976d2', 
                    border: `2px solid ${darkMode ? 'white' : '#1976d2'}`, 
                    padding: '12px 24px', 
                    borderRadius: '8px', 
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = darkMode ? 'white' : '#1976d2';
                    e.target.style.color = darkMode ? '#1976d2' : 'white';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = darkMode ? 'white' : '#1976d2';
                  }}
                  >
                    Get In Touch
                  </button>
                </Box>
              </Box>
            </Box>
          </ParallaxBackground>
        </Box>

        <Box 
          id="projects" 
          className="projects-section"
          sx={{
            width: '100%',
            px: { xs: 2, sm: 3, md: '100px' },
            py: { xs: 4, md: 8 },
          }}
        >
          <ProjectsSection darkMode={darkMode} />
        </Box>

        <Box 
          id="skills" 
          className="skills-section"
          sx={{
            width: '100%',
            px: { xs: 2, sm: 3, md: '100px' },
            py: { xs: 4, md: 8 },
            backgroundColor: darkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
          }}
        >
          <SkillsSection darkMode={darkMode} />
        </Box>

        <Box 
          id="contact" 
          className="contact-section"
          sx={{
            width: '100%',
            px: { xs: 2, sm: 3, md: '100px' },
            py: { xs: 4, md: 8 },
          }}
        >
          <ContactSection darkMode={darkMode} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;