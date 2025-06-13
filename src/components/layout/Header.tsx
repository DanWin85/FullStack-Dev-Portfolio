// src/components/Header.tsx - Create this new file
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Fade,
  useScrollTrigger,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  DarkMode,
  LightMode,
  Home,
  Person,
  Code,
  Work,
  Email,
  GitHub,
  LinkedIn,
} from '@mui/icons-material';

// Navigation items
const navigationItems = [
  { id: 'hero', label: 'Home', icon: <Home /> },
  { id: 'about', label: 'About', icon: <Person /> },
  { id: 'skills', label: 'Skills', icon: <Code /> },
  { id: 'projects', label: 'Projects', icon: <Work /> },
  { id: 'contact', label: 'Contact', icon: <Email /> },
];

interface HeaderProps {
  darkMode?: boolean;
  onThemeToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  darkMode = false, 
  onThemeToggle 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Hide header on scroll down, show on scroll up
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
      if (isMobile) {
        setMobileMenuOpen(false);
      }
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Desktop Navigation
  const DesktopNav = () => (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
      {navigationItems.map((item) => (
        <Button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          sx={{
            color: 'inherit',
            fontWeight: activeSection === item.id ? 600 : 400,
            position: 'relative',
            mx: 1,
            textTransform: 'none',
            fontSize: '0.95rem',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -2,
              left: '50%',
              transform: 'translateX(-50%)',
              width: activeSection === item.id ? '80%' : 0,
              height: 2,
              backgroundColor: 'secondary.main',
              transition: 'width 0.3s ease',
            },
            '&:hover::after': {
              width: '80%',
            },
          }}
        >
          {item.label}
        </Button>
      ))}
      
      {/* Social Links */}
      <Box sx={{ ml: 2, display: 'flex', gap: 1 }}>
        <IconButton
          component="a"
          href="https://github.com/DanWin85"
          target="_blank"
          color="inherit"
          size="small"
          sx={{ '&:hover': { color: 'secondary.main' } }}
        >
          <GitHub fontSize="small" />
        </IconButton>
        <IconButton
          component="a"
          href="https://linkedin.com/in/danwin85"
          target="_blank"
          color="inherit"
          size="small"
          sx={{ '&:hover': { color: 'secondary.main' } }}
        >
          <LinkedIn fontSize="small" />
        </IconButton>
      </Box>

      {/* Theme Toggle */}
      <IconButton 
        onClick={onThemeToggle} 
        color="inherit"
        sx={{ ml: 1, '&:hover': { color: 'secondary.main' } }}
      >
        {darkMode ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Box>
  );

  // Mobile Drawer
  const MobileDrawer = () => (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
      sx={{
        '& .MuiDrawer-paper': {
          width: 280,
          bgcolor: 'background.paper',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar sx={{ width: 40, height: 40, bgcolor: 'primary.main', fontSize: '1rem' }}>
              DW
            </Avatar>
            <Box>
              <Typography variant="subtitle1" fontWeight={600}>
                Dan Win
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Full Stack Developer
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={() => setMobileMenuOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Navigation Items */}
        <List disablePadding>
          {navigationItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                onClick={() => scrollToSection(item.id)}
                selected={activeSection === item.id}
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  '&.Mui-selected': {
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                  },
                }}
              >
                <ListItemIcon 
                  sx={{ 
                    color: activeSection === item.id ? 'inherit' : 'text.secondary',
                    minWidth: 40,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: activeSection === item.id ? 600 : 400,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* Theme Toggle */}
        <Box sx={{ mt: 3, pt: 2, borderTop: 1, borderColor: 'divider' }}>
          <ListItemButton onClick={onThemeToggle} sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              {darkMode ? <LightMode /> : <DarkMode />}
            </ListItemIcon>
            <ListItemText 
              primary={darkMode ? 'Light Mode' : 'Dark Mode'}
            />
          </ListItemButton>
        </Box>

        {/* Social Links */}
        <Box sx={{ mt: 2, display: 'flex', gap: 1, justifyContent: 'center' }}>
          <IconButton 
            component="a" 
            href="https://github.com/DanWin85" 
            target="_blank"
            size="small"
            sx={{ bgcolor: 'action.hover' }}
          >
            <GitHub />
          </IconButton>
          <IconButton 
            component="a" 
            href="https://linkedin.com/in/danwin85" 
            target="_blank"
            size="small"
            sx={{ bgcolor: 'action.hover' }}
          >
            <LinkedIn />
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  );

  return (
    <>
      <Fade in={!trigger}>
        <AppBar 
          position="fixed" 
          elevation={0}
          sx={{
            background: darkMode 
              ? 'rgba(18, 18, 18, 0.9)' 
              : 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid',
            borderColor: 'divider',
            color: darkMode ? 'white' : 'text.primary',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', minHeight: 80 }}>
            {/* Logo/Brand */}
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                cursor: 'pointer',
                gap: 2,
              }}
              onClick={() => scrollToSection('hero')}
            >
              <Avatar 
                sx={{ 
                  width: 40, 
                  height: 40, 
                  bgcolor: 'primary.main',
                  fontSize: '1rem',
                  fontWeight: 600,
                }}
              >
                DW
              </Avatar>
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #1976d2 30%, #dc004e 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                Dan Win
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && <DesktopNav />}

            {/* Mobile Menu Button */}
            {isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton 
                  onClick={onThemeToggle} 
                  color="inherit"
                  size="small"
                >
                  {darkMode ? <LightMode /> : <DarkMode />}
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={handleMobileMenuToggle}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Fade>

      {/* Mobile Drawer */}
      <MobileDrawer />
    </>
  );
};

export default Header;