import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
  Box,
} from '@mui/material';
import type { Project } from '@/data/types';

interface ProjectCardProps {
  project: Project;
}

/**
 * Carte projet : titre, description, catégorie, tags, image optionnelle, liens.
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, category, tags, links, image } = project;

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: 6,
        },
      }}
    >
      {image && (
        <CardMedia
          component="img"
          height="180"
          image={image.src}
          alt={image.alt}
          sx={{ objectFit: 'cover' }}
        />
      )}
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <Chip
            label={category === 'pro' ? 'Pro' : 'Side'}
            size="small"
            color={category === 'pro' ? 'primary' : 'secondary'}
            variant="outlined"
          />
          {tags.slice(0, 3).map((tag) => (
            <Chip key={tag} label={tag} size="small" variant="outlined" />
          ))}
        </Stack>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
          {description}
        </Typography>
        {links && links.length > 0 && (
          <Stack direction="row" spacing={1} sx={{ mt: 2 }} flexWrap="wrap">
            {links.map((link) => (
              <Box
                key={link.label}
                component="a"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontSize: '0.875rem',
                  color: 'primary.main',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                {link.label} →
              </Box>
            ))}
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
