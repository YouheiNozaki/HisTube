import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { GlobalStyle } from 'theme/global';

function MyApp({
  Component,
  pageProps,
}: AppProps): React.ReactNode {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
