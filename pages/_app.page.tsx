import 'public/normalize.css';
import 'public/fonts/stylesheet.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Auth, { AuthType } from '@/processes/auth';

interface CustomAppProps extends Omit<AppProps, 'Component'> {
  Component: AppProps['Component'] & { auth: AuthType };
}

export default function App({ Component, pageProps, router }: CustomAppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      {Component.auth ? (
        <Auth auth={Component.auth}>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}
