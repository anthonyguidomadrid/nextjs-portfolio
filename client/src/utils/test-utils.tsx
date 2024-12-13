import { render, RenderOptions, screen } from '@testing-library/react';
import { ReactElement } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18nForTests';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { createMockRouter } from '~/_mocks/router';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import theme from './theme';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { store } from '~/store';
import '@testing-library/jest-dom';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <RouterContext.Provider value={createMockRouter()}>
        <Provider store={store}>
          <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </MuiThemeProvider>
        </Provider>
      </RouterContext.Provider>
    </I18nextProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });
export * from '@testing-library/react';
export { customRender as render };

export const getBySplittedText = (text: string) =>
  screen.getByText((_, node) => {
    const hasText = () => node?.textContent === text;
    const isParagraph = node?.tagName === 'P';
    return hasText() && isParagraph;
  });
