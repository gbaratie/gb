import Head from 'next/head';
import { useState, useMemo } from 'react';
import {
  Box,
  Grid,
  Typography,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  Chip,
  Stack,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { siteName } from '@/config/site';
import type { ProjectCategory } from '@/data/types';

/**
 * Page Projets : onglets Pro | Side, recherche, filtre par tags, grille de cartes.
 */
export default function Projets() {
  const [categoryTab, setCategoryTab] = useState<ProjectCategory | 'all'>('all');
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCategory =
        categoryTab === 'all' ||
        (categoryTab === 'pro' && p.category === 'pro') ||
        (categoryTab === 'side' && p.category === 'side');
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchTag = !selectedTag || p.tags.includes(selectedTag);
      return matchCategory && matchSearch && matchTag;
    });
  }, [categoryTab, search, selectedTag]);

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

      <Tabs
        value={categoryTab}
        onChange={(_, v: ProjectCategory | 'all') => setCategoryTab(v)}
        sx={{ mb: 2 }}
      >
        <Tab label="Tous" value="all" />
        <Tab label="Pro" value="pro" />
        <Tab label="Side" value="side" />
      </Tabs>

      <TextField
        fullWidth
        placeholder="Rechercher…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        size="small"
        sx={{ mb: 2, maxWidth: 400 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 3 }} useFlexGap>
        {allTags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
            color={selectedTag === tag ? 'primary' : 'default'}
            variant={selectedTag === tag ? 'filled' : 'outlined'}
            size="small"
          />
        ))}
      </Stack>

      {filtered.length === 0 ? (
        <Typography color="text.secondary">Aucun projet ne correspond aux filtres.</Typography>
      ) : (
        <Grid container spacing={3}>
          {filtered.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      )}
    </Layout>
  );
}
