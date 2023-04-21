import '@/styles/globals.css';
import { AppProps } from 'next/app';

export default function RootLayout({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
