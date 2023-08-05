import '@/styles/globals.css';
import '@morfeo/compiler/css/morfeo.css';
import { AppProps } from 'next/app';
import '../../morfeo.theme';

export default function RootLayout({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
