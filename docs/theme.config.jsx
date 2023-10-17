/* eslint-disable import/no-anonymous-default-export */
import Image from 'next/image';
import { Footer } from './src/components/Footer';

export default {
  logo: (
    <Image src="/logo-small.svg" alt="Morfeo Logo" width={30} height={30} />
  ),
  project: {
    link: 'https://github.com/morfeojs/morfeo',
  },
  docsRepositoryBase: 'https://github.com/morfeojs/morfeo/tree/main/docs/pages',
  banner: {
    key: '1.0-release',
    text: (
      <a href="/docs" target="_blank">
        🎉 Morfeo 1.0.0 is coming. Read more →
      </a>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Morfeo',
      defaultTitle: 'Morfeo',
    };
  },
  themeSwitch: {
    component: null,
    useOptions() {
      return {
        dark: 'Dark',
      };
    },
  },
  footer: { text: <Footer /> },
  chat: {
    link: 'https://twitter.com/morfeo_js',
    icon: (
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke="none"
          fillRule="nonzero"
          fill="currentColor"
          d="M 14.285156 10.171875 L 23.222656 0 L 21.105469 0 L 13.34375 8.832031 L 7.148438 0 L 0 0 L 9.371094 13.355469 L 0 24.019531 L 2.117188 24.019531 L 10.308594 14.691406 L 16.851562 24.019531 L 24 24.019531 M 2.878906 1.5625 L 6.132812 1.5625 L 21.101562 22.535156 L 17.851562 22.535156"
        />
      </svg>
    ),
  },
};
