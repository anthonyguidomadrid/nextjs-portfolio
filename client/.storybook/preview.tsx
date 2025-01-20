import React from 'react';
import { Provider } from 'react-redux';
import theme from '../src/utils/theme';
import { store } from '../src/store';
import { ThemeProvider } from '@mui/material';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/utils/i18nForTests';

const preview = {
  decorators: [
    (Story) => (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <I18nextProvider i18n={i18n}>
            <Story />
          </I18nextProvider>
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
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default preview;
