import { createTheme } from '@mui/material/styles';

/**
 * Thème sombre pour le site portfolio.
 * Fond non blanc, contraste lisible, bordures et élévations subtiles.
 */
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7c9ce0',
      contrastText: '#0a0a0f',
    },
    secondary: {
      main: '#a8b8e0',
    },
    background: {
      default: '#0f1116',
      paper: '#161a22',
    },
    text: {
      primary: '#e8eaef',
      secondary: '#a0a8b8',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily:
      'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '0.5rem',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      marginBottom: '0.5rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid',
          borderColor: 'rgba(255,255,255,0.08)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: '1px solid',
          borderColor: 'rgba(255,255,255,0.08)',
        },
      },
    },
  },
});

export default theme;
