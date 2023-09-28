import { AppProps } from 'next/app';
import '@/styles/globals.css';
import '@/styles/morfeo.css';
import '../morfeo';

export default function RootLayout({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
