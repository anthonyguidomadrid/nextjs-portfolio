import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    black?: string;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    bold: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    bold?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    bold: true;
  }
}

const theme = createTheme({
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        bar: {
          transition: 'all 2s ease',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.35)',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#000000',
          backgroundImage: 'none',
          minHeight: '80vh',
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#007aff',
    },
    secondary: {
      main: '#ffffff',
    },
    info: {
      main: '#ffffff',
    },
    success: {
      main: '#1b5e20',
      contrastText: '#fff',
    },
    error: {
      main: '#ab003c',
      contrastText: '#fff',
    },
    background: {
      default: 'rgba(0, 0, 0, 0.85)',
      black: 'rgba(0, 0, 0, 0.35)',
      paper: 'rgba(255, 255, 255, 0.15)',
    },
    text: {
      primary: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    h1: {
      fontSize: '60px',
      '@media (max-width:600px)': {
        fontSize: '40px',
      },
    },
    h2: {
      fontSize: '28px',
      fontWeight: '200',
      lineHeight: '1.5',
      '@media (max-width:600px)': {
        fontSize: '18px',
      },
    },
    h3: {
      fontSize: '18px',
      textTransform: 'uppercase',
      fontWeight: 600,
      '@media (max-width:600px)': {
        fontSize: '14px',
      },
    },
    body1: {
      fontSize: '16px',
      '@media (max-width:600px)': {
        fontSize: '14px',
      },
    },
    body2: {
      fontWeight: 200,
      fontSize: '16px',
      '@media (max-width:600px)': {
        fontSize: '14px',
      },
    },
    bold: {
      fontWeight: 600,
      fontSize: '16px',
      fontFamily: 'Poppins, Arial, sans-serif',
      //@ts-ignore
      '@media (max-width:600px)': {
        fontSize: '14px',
      },
    },
  },
});

export default theme;
