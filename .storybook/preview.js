import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme';
import { GlobalStyle } from '../src/theme/global';
import { Normalize } from 'styled-normalize';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    );
  },
];
