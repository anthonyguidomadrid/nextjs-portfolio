import { createTheme } from '@mui/material/styles';
import { Poppins } from 'next/font/google';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007aff',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: 'rgba(0, 0, 0, 0.85)',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
  },
});

export default theme;
