import React from 'react';
import { Box } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Box component="main">
      {/* Hero Section */}
      <Box
        id="hero"
        sx={{
          minHeight: '100vh',
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1>Hero Section - Coming Soon!</h1>
      </Box>

      {/* About Section */}
      <Box
        id="about"
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1>About Section - Coming Soon!</h1>
      </Box>

      {/* Skills Section */}
      <Box
        id="skills"
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.paper',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1>Skills Section - Coming Soon!</h1>
      </Box>

      {/* Projects Section */}
      <Box
        id="projects"
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1>Projects Section - Coming Soon!</h1>
      </Box>

      {/* Experience Section */}
      <Box
        id="experience"
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.paper',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1>Experience Section - Coming Soon!</h1>
      </Box>

      {/* Contact Section */}
      <Box
        id="contact"
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1>Contact Section - Coming Soon!</h1>
      </Box>
    </Box>
  );
};

export default HomePage;