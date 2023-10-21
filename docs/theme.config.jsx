/* eslint-disable import/no-anonymous-default-export */
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';
import { Footer } from './src/components/Footer';

export default {
  logo: (
    <Image src="/logo-small.svg" alt="Morfeo Logo" width={30} height={30} />
  ),
  project: {
    link: 'https://github.com/morfeojs/morfeo',
  },
  docsRepositoryBase: 'https://github.com/morfeojs/morfeo/tree/main/docs',
  banner: {
    key: '1.0-release',
    text: (
      <a href="/docs" target="_blank">
        🎉 Morfeo 1.0.0 is coming. Read more →
      </a>
    ),
  },
  head: function useHead() {
    const { asPath, defaultLocale, locale, basePath } = useRouter();
    const { frontMatter, title } = useConfig();
    const description =
      frontMatter.description ||
      'Morfeo is a set of tools to build your Design System and Style your application, with nearly zero runtime.';

    const url =
      basePath + (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    const socialCard = encodeURI(`${basePath}/api/og?title=${title}`);

    return (
      <>
        <meta name="msapplication-TileColor" content="#030303" />
        <meta name="theme-color" content="#030303" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Morfeo'} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Morfeo" />
        <meta property="og:type" content="website" />
        <meta name="og:image" content={socialCard} />
        <meta name="og:image:alt" content={title} />
        <meta name="og:image:height" content="630" />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:type" content="image/png" />
        <meta name="og:locale" content={locale} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="morfeo.dev" />
        <meta name="twitter:url" content={basePath} />

        <meta name="apple-mobile-web-app-title" content="Morfeo" />
        <link
          rel="icon"
          href={`${basePath}/favicon.svg`}
          type="image/svg+xml"
        />
        <link rel="icon" href={`${basePath}/favicon.ico`} type="image/ico" />
      </>
    );
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Morfeo',
      };
    }
  },
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
  toc: {
    backToTop: true,
  },
  navigation: true,
  themeSwitch: {
    component: null,
    useOptions() {
      return {
        dark: 'Dark',
      };
    },
  },
  nextThemes: {
    defaultTheme: 'dark',
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
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
