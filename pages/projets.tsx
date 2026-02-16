import Head from 'next/head';
import { useState, useMemo } from 'react';
import { Grid, Typography, Chip, Stack, Box } from '@mui/material';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { siteName } from '@/config/site';

/**
 * Page Projets : deux sections Pro | Side projects, filtre par clients et technos.
 */
export default function Projets() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const allClients = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.clients?.forEach((c) => set.add(c)));
    return Array.from(set).sort();
  }, []);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const proProjects = useMemo(() => {
    return projects.filter((p) => {
      if (p.category !== 'pro') return false;
      return (
        !selectedFilter ||
        p.tags.includes(selectedFilter) ||
        p.clients?.includes(selectedFilter)
      );
    });
  }, [selectedFilter]);

  const sideProjects = useMemo(() => {
    return projects.filter((p) => {
      if (p.category !== 'side') return false;
      return (
        !selectedFilter ||
        p.tags.includes(selectedFilter) ||
        p.clients?.includes(selectedFilter)
      );
    });
  }, [selectedFilter]);

  const noResults = proProjects.length === 0 && sideProjects.length === 0;

  return (
    <Layout>
      <Head>
        <title>{`Projets – ${siteName}`}</title>
        <meta
          name="description"
          content="Découvrez mes projets professionnels et side projects : blockchain, IA, conseil."
        />
      </Head>

      <Typography variant="h2" component="h1" gutterBottom>
        Projets
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 4 }} useFlexGap>
        {allClients.map((client) => (
          <Chip
            key={client}
            label={client}
            onClick={() => setSelectedFilter(selectedFilter === client ? null : client)}
            color="primary"
            variant={selectedFilter === client ? 'filled' : 'outlined'}
            size="small"
          />
        ))}
        {allTags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            onClick={() => setSelectedFilter(selectedFilter === tag ? null : tag)}
            color={selectedFilter === tag ? 'primary' : 'default'}
            variant={selectedFilter === tag ? 'filled' : 'outlined'}
            size="small"
          />
        ))}
      </Stack>

      {noResults ? (
        <Typography color="text.secondary">Aucun projet ne correspond aux filtres.</Typography>
      ) : (
        <>
          {/* Section 1 : Projets professionnels */}
          <Box component="section" sx={{ mt: 6 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: 600 }}>
              Projets professionnels
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Réalisations en entreprise : agents conversationnels, blockchain, GenAI.
            </Typography>
            {proProjects.length === 0 ? (
              <Typography variant="body2" color="text.secondary">
                Aucun projet pro ne correspond aux filtres.
              </Typography>
            ) : (
              <Grid container spacing={3}>
                {proProjects.map((project) => (
                  <Grid item xs={12} sm={6} md={4} key={project.id}>
                    <ProjectCard project={project} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>

          {/* Section 2 : Side projects */}
          <Box component="section" sx={{ mt: 8 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: 600 }}>
              Side projects
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Projets personnels et expérimentations.
            </Typography>
            {sideProjects.length === 0 ? (
              <Typography variant="body2" color="text.secondary">
                Aucun side project ne correspond aux filtres.
              </Typography>
            ) : (
              <Grid container spacing={3}>
                {sideProjects.map((project) => (
                  <Grid item xs={12} sm={6} md={4} key={project.id}>
                    <ProjectCard project={project} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </>
      )}
    </Layout>
  );
}
