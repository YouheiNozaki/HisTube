import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { GlobalStyle } from 'theme/global';
import { Normalize } from 'styled-normalize';

function MyApp({
  Component,
  pageProps,
}: AppProps): React.ReactNode {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
