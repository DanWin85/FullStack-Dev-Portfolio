import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
  Stack,
  Link,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  Favorite,
  KeyboardArrowUp,
} from '@mui/icons-material';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { scrollToElement } from '../../utils/helpers';

const Footer: React.FC = () => {
  const { personalInfo, contact } = useTypedSelector(state => state.portfolio);

  const handleScrollToTop = () => {
    scrollToElement('hero');
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <GitHub />, url: contact.github, label: 'GitHub' },
    { icon: <LinkedIn />, url: contact.linkedin, label: 'LinkedIn' },
    { icon: <Email />, url: `mailto:${contact.email}`, label: 'Email' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Box sx={{ py: 6 }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            justifyContent="space-between"
            alignItems={{ xs: 'center', md: 'flex-start' }}
          >
            {/* Brand and Description */}
            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, maxWidth: 400 }}>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {personalInfo.fullName}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {personalInfo.tagline}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                {personalInfo.bio}
              </Typography>
              
              {/* Contact Info */}
              <Stack spacing={1}>
                {contact.email && (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Email sx={{ fontSize: 16, color: 'text.secondary' }} />
                    <Link
                      href={`mailto:${contact.email}`}
                      variant="body2"
                      color="text.secondary"
                      sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                    >
                      {contact.email}
                    </Link>
                  </Box>
                )}
                {contact.phone && (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Phone sx={{ fontSize: 16, color: 'text.secondary' }} />
                    <Link
                      href={`tel:${contact.phone}`}
                      variant="body2"
                      color="text.secondary"
                      sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                    >
                      {contact.phone}
                    </Link>
                  </Box>
                )}
                {contact.location && (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocationOn sx={{ fontSize: 16, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {contact.location}
                    </Typography>
                  </Box>
                )}
              </Stack>
            </Box>

            {/* Quick Links */}
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                Quick Links
              </Typography>
              <Stack spacing={1}>
                <Link
                  component="button"
                  variant="body2"
                  color="text.secondary"
                  onClick={() => scrollToElement('about')}
                  sx={{ 
                    textDecoration: 'none', 
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    textAlign: 'inherit',
                    '&:hover': { color: 'primary.main' } 
                  }}
                >
                  About Me
                </Link>
                <Link
                  component="button"
                  variant="body2"
                  color="text.secondary"
                  onClick={() => scrollToElement('projects')}
                  sx={{ 
                    textDecoration: 'none', 
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    textAlign: 'inherit',
                    '&:hover': { color: 'primary.main' } 
                  }}
                >
                  Projects
                </Link>
                <Link
                  component="button"
                  variant="body2"
                  color="text.secondary"
                  onClick={() => scrollToElement('skills')}
                  sx={{ 
                    textDecoration: 'none', 
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    textAlign: 'inherit',
                    '&:hover': { color: 'primary.main' } 
                  }}
                >
                  Skills
                </Link>
                <Link
                  component="button"
                  variant="body2"
                  color="text.secondary"
                  onClick={() => scrollToElement('contact')}
                  sx={{ 
                    textDecoration: 'none', 
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    textAlign: 'inherit',
                    '&:hover': { color: 'primary.main' } 
                  }}
                >
                  Contact
                </Link>
              </Stack>
            </Box>

            {/* Social Links and Back to Top */}
            <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                Connect
              </Typography>
              
              {/* Social Icons */}
              <Box sx={{ display: 'flex', gap: 1, justifyContent: { xs: 'center', md: 'flex-end' }, mb: 2 }}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    sx={{
                      bgcolor: 'action.hover',
                      '&:hover': {
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>

              {/* Back to Top Button */}
              <IconButton
                onClick={handleScrollToTop}
                sx={{
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
                aria-label="Back to top"
              >
                <KeyboardArrowUp />
              </IconButton>
            </Box>
          </Stack>
        </Box>

        <Divider />

        {/* Bottom Bar */}
        <Box
          sx={{
            py: 3,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary" textAlign="center">
            © {currentYear} {personalInfo.fullName}. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography variant="body2" color="text.secondary">
              Made with
            </Typography>
            <Favorite sx={{ fontSize: 16, color: 'error.main' }} />
            <Typography variant="body2" color="text.secondary">
              using React & TypeScript
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;