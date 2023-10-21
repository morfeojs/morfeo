import { AppProps } from 'next/app';
import '@/styles/globals.css';
import '@/styles/morfeo.css';

export default function RootLayout({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
