import React from 'react';
import { Provider } from 'react-redux';
import theme from '../src/utils/theme';
import { store } from '../src/store';
import { ThemeProvider } from '@mui/material';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/utils/i18nForTests';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  decorators: [
    (Story: React.FC) => (
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
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#000000' },
        light: { name: 'Light', value: '#ffffff' },
        grey: { name: 'Grey', value: 'grey' },
      },
    },
    layout: 'centered',
  },
  initialGlobals: {
    backgrounds: { value: 'dark' },
  },
  tags: ['autodocs'],
};

export default preview;
