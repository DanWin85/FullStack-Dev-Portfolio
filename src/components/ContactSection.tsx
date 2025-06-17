import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  alpha,
  Fade,
  Grow,
  Snackbar,
  Alert,
  Divider,
  InputAdornment,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Twitter,
  Send,
  Person,
  Subject,
  Message,
  CheckCircle,
} from '@mui/icons-material';

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  twitter?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactSectionProps {
  darkMode?: boolean;
}

const contactInfo: ContactInfo = {
  email: 'dan.wingate85@gmail.com',
  phone: '+64 (022) 350-8809',
  location: 'Palmerston North, New Zealand',
  github: 'https://github.com/DanWin85',
  linkedin: 'https://linkedin.com/in/daniel-r-wingate',
};

const ContactSection: React.FC<ContactSectionProps> = ({ darkMode = false }) => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, setSubmitSuccess] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const validateForm = (): boolean => {
    const errors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field: keyof ContactFormData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value,
    }));

    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      
      setSubmitSuccess(true);
      setSnackbarOpen(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: contactInfo.github,
      icon: <GitHub />,
      color: darkMode ? '#fff' : '#333',
    },
    {
      name: 'LinkedIn',
      url: contactInfo.linkedin,
      icon: <LinkedIn />,
      color: '#0077B5',
    },
  ];

  const contactMethods = [
    {
      icon: <Email />,
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: '#EA4335',
    },
    {
      icon: <Phone />,
      label: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      color: '#34A853',
    },
    {
      icon: <LocationOn />,
      label: 'Location',
      value: contactInfo.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(contactInfo.location)}`,
      color: '#4285F4',
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        background: darkMode
          ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
          : 'linear-gradient(135deg, #f8faff 0%, #e8f2ff 100%)',
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
            ? 'radial-gradient(circle at 20% 80%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)'
            : 'radial-gradient(circle at 20% 80%, #1976d2 1px, transparent 1px), radial-gradient(circle at 80% 20%, #1976d2 1px, transparent 1px)',
          backgroundSize: '40px 40px, 60px 60px',
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
              Let's Work Together
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6, mb: 4 }}
            >
              I'm always interested in new opportunities and collaborations. 
              Whether you have a project in mind or just want to say hello, I'd love to hear from you!
            </Typography>
          </Box>
        </Fade>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          {/* Contact Information */}
          <Grow in={sectionVisible} timeout={1000}>
            <Card
              sx={{
                width: { xs: '100%', md: '400px' },
                background: darkMode
                  ? alpha('#fff', 0.05)
                  : alpha('#fff', 0.8),
                backdropFilter: 'blur(10px)',
                border: `1px solid ${alpha(darkMode ? '#fff' : '#000', 0.1)}`,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Get In Touch
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Feel free to reach out through any of these channels
                </Typography>

                {/* Contact Methods */}
                <Box sx={{ mb: 4 }}>
                  {contactMethods.map((method, _index) => (
                    <Box key={method.label} sx={{ mb: 3 }}>
                      <Box
                        component="a"
                        href={method.href}
                        target={method.label === 'Location' ? '_blank' : undefined}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          textDecoration: 'none',
                          color: 'inherit',
                          p: 2,
                          borderRadius: 2,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: alpha(method.color, 0.1),
                            transform: 'translateX(8px)',
                          },
                        }}
                      >
                        <Box
                          sx={{
                            p: 1,
                            borderRadius: 2,
                            backgroundColor: alpha(method.color, 0.1),
                            color: method.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {method.icon}
                        </Box>
                        <Box>
                          <Typography variant="body2" color="text.secondary">
                            {method.label}
                          </Typography>
                          <Typography variant="body1" fontWeight={500}>
                            {method.value}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* Social Links */}
                <Typography variant="h6" gutterBottom>
                  Connect With Me
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                  {socialLinks.map((social) => (
                    <IconButton
                      key={social.name}
                      component="a"
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        p: 2,
                        backgroundColor: alpha(social.color, 0.1),
                        color: social.color,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: social.color,
                          color: 'white',
                          transform: 'translateY(-4px)',
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grow>

          {/* Contact Form */}
          <Grow in={sectionVisible} timeout={1200}>
            <Card
              sx={{
                width: { xs: '100%', md: '500px' },
                background: darkMode
                  ? alpha('#fff', 0.05)
                  : alpha('#fff', 0.9),
                backdropFilter: 'blur(10px)',
                border: `1px solid ${alpha(darkMode ? '#fff' : '#000', 0.1)}`,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Send Message
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Have a project in mind? Let's discuss it!
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    value={formData.name}
                    onChange={handleInputChange('name')}
                    error={!!formErrors.name}
                    helperText={formErrors.name}
                    sx={{ mb: 3 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    type="email"
                    label="Email Address"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    error={!!formErrors.email}
                    helperText={formErrors.email}
                    sx={{ mb: 3 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Subject"
                    value={formData.subject}
                    onChange={handleInputChange('subject')}
                    error={!!formErrors.subject}
                    helperText={formErrors.subject}
                    sx={{ mb: 3 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Subject color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Your Message"
                    value={formData.message}
                    onChange={handleInputChange('message')}
                    error={!!formErrors.message}
                    helperText={formErrors.message}
                    sx={{ mb: 3 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1 }}>
                          <Message color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    disabled={isSubmitting}
                    startIcon={isSubmitting ? <CheckCircle /> : <Send />}
                    sx={{
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      background: darkMode
                        ? 'linear-gradient(45deg, #1976d2 30%, #dc004e 90%)'
                        : 'linear-gradient(45deg, #1976d2 30%, #dc004e 90%)',
                      '&:hover': {
                        background: darkMode
                          ? 'linear-gradient(45deg, #1565c0 30%, #c51162 90%)'
                          : 'linear-gradient(45deg, #1565c0 30%, #c51162 90%)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grow>
        </Box>

        {/* Success Snackbar */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setSnackbarOpen(false)}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
          >
            Message sent successfully! I'll get back to you soon.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default ContactSection;