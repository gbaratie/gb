import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Typography, Container } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { siteName, navItems } from '@/config/site';

interface LayoutProps {
  children: React.ReactNode;
}

function getTabValueFromPath(pathname: string): number {
  const index = navItems.findIndex((item) => item.href === pathname);
  return index >= 0 ? index : 0;
}

/**
 * Layout principal : barre de navigation persistante et conteneur.
 * Le thème sombre est appliqué via le ThemeProvider.
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const [tabValue, setTabValue] = useState<number>(() =>
    getTabValueFromPath(router.pathname)
  );

  useEffect(() => {
    setTabValue(getTabValueFromPath(router.pathname));
  }, [router.pathname]);

  return (
    <>
      <AppBar position="fixed" color="primary" elevation={0} sx={{ borderBottom: '1px solid', borderColor: 'rgba(255,255,255,0.1)' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {siteName}
          </Typography>
          <Tabs
            value={tabValue}
            onChange={(_, newValue) => setTabValue(newValue)}
            textColor="inherit"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} passHref legacyBehavior>
                <Tab label={item.label} component="a" />
              </Link>
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container
        maxWidth="lg"
        sx={{
          paddingY: 4,
          minHeight: 'calc(100vh - 64px)',
          bgcolor: 'background.default',
        }}
      >
        {children}
      </Container>
    </>
  );
};

export default Layout;
