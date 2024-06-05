import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Your primary color
    },
    secondary: {
      main: '#f50057', // Your secondary color
    },
    // You can also customize other palette properties like text, background, etc.
  },
  typography: {
    // Customize typography if needed
  },
  // You can customize other theme properties like spacing, breakpoints, etc.
});

export default theme;