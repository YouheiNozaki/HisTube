import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MyApp;
