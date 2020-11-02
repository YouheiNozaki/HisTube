import { AppProps } from 'next/app';
import 'styles/index.css';

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MyApp;
