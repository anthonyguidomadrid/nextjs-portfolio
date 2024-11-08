import React from 'react';
import { Provider } from 'react-redux';
import theme from '../src/utils/theme';
import { store } from '../src/store';
import { ThemeProvider } from '@mui/material';

const preview = {
  decorators: [
    (Story) => (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </Provider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
