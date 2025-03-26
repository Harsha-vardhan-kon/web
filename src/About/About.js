import React from 'react';
import { Box, Typography, Container, Paper, Avatar } from '@mui/material';
import { Info as InfoIcon } from '@mui/icons-material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
            <InfoIcon />
          </Avatar>
          <Typography variant="h4" component="h1">
            About This Platform
          </Typography>
        </Box>

        <Typography variant="body1" paragraph>
          Welcome to my content hub! This platform serves as a centralized space where I share 
          my thoughts, projects, and creative work with the world.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
          What You'll Find Here:
        </Typography>
        
        <ul style={{ paddingLeft: '24px' }}>
          <li><Typography variant="body1">Personal blog posts and articles</Typography></li>
          <li><Typography variant="body1">Project showcases and tutorials</Typography></li>
          <li><Typography variant="body1">Creative writing samples</Typography></li>
          <li><Typography variant="body1">Tech insights and experiences</Typography></li>
        </ul>

        

        <Typography variant="body1" paragraph sx={{ fontStyle: 'italic' }}>
          "Created a web-application where we can post N number of posts in any platform"
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;