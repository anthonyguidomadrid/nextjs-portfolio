import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    black?: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#007aff',
    },
    secondary: {
      main: '#f50057',
    },
    info: {
      main: '#ffffff',
    },
    background: {
      default: 'rgba(0, 0, 0, 0.85)',
      black: 'rgba(0, 0, 0, 0.35)',
      paper: 'rgba(255, 255, 255, 0.15)',
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
      '@media (max-width:600px)': {
        fontSize: '16px',
      },
    },
  },
});

export default theme;
