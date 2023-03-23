import 'public/normalize.css';
import 'public/fonts/stylesheet.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
