import Head from 'next/head';
import { Box, Button, Typography, Grid, Card, CardContent } from '@mui/material';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Layout from '@/components/Layout';
import { siteName } from '@/config/site';
import { profile } from '@/data/profile';

const GITHUB_URL = 'https://github.com/gbaratie';
const LINKEDIN_URL = 'https://www.linkedin.com/in/gbaratier/';

/**
 * Accueil : hero avec 2 CTA, puis 3 sections teaser (Projets, Sélection, Amis).
 */
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{`Accueil – ${siteName}`}</title>
        <meta
          name="description"
          content={`${profile.headline}. ${profile.bio.slice(0, 120)}…`}
        />
      </Head>

      {/* Hero */}
      <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mb: 8 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          {profile.name}
        </Typography>
        <Typography variant="h5" color="primary" gutterBottom>
          {profile.headline}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: 560 }}>
          {profile.bio}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
          <Link href="/projets" passHref legacyBehavior>
            <Button variant="contained" color="primary" component="a" size="large">
              Voir mes projets
            </Button>
          </Link>
          <Button
            variant="outlined"
            color="primary"
            component="a"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="large"
            startIcon={<GitHubIcon />}
          >
            GitHub
          </Button>
          <Button
            variant="outlined"
            color="primary"
            component="a"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="large"
            startIcon={<LinkedInIcon />}
          >
            LinkedIn
          </Button>
        </Box>
      </Box>

      {/* 2 teasers */}
      <Typography variant="h2" component="h2" gutterBottom sx={{ mb: 3 }}>
        Découvrir
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Projets
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Projets professionnels et side projects : blockchain, IA, conseil et open source.
              </Typography>
              <Link href="/projets" passHref legacyBehavior>
                <Button variant="outlined" color="primary" component="a" size="small">
                  Voir les projets
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Mes coups de cœur
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Initiatives inspirantes et projets de mes amis que j’aime mettre en avant.
              </Typography>
              <Link href="/coups-de-coeur" passHref legacyBehavior>
                <Button variant="outlined" color="primary" component="a" size="small">
                  Voir mes coups de cœur
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
