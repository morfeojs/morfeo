import Image from 'next/image';
import { morfeo } from 'src/morfeo';
import { LinkBlocks } from './LinkBlocks';
import { FooterLinkBlock } from './types';
import { Social } from './Social';

const classes = morfeo.css({
  container: {
    w: '100',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: {
      default: '2xl',
      sm: '5xl',
    },
  },
  copyrightContainer: {
    w: '100',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: {
      default: 'm',
      sm: '5xl',
    },
    flexDirection: {
      default: 'column',
      sm: 'row',
    },
  },
  textContainer: {
    flex: '2',
    textAlign: 'center',
  },
  logoContainer: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
  },
});

//TODO: Populate href once documentation is ready
const linkBlockList: FooterLinkBlock[] = [
  {
    title: 'Navigation',
    linkList: [
      { href: '/docs/getting-started', label: 'Getting started' },
      { href: '/docs', label: 'Web Extension' },
      { href: '/docs', label: 'Theme' },
      { href: '/docs', label: 'Packages' },
    ],
  },
  {
    title: 'Community',
    linkList: [
      {
        href: 'https://stackoverflow.com/questions/tagged/morfeo',
        label: 'Stack Overflow',
        newTab: true,
      },
      { href: 'https://discord.gg/5hbsKMBRBh', label: 'Discord', newTab: true },
    ],
  },
  {
    title: 'More',
    linkList: [
      {
        href: 'https://github.com/morfeojs/morfeo',
        label: 'Github',
        newTab: true,
      },
      { href: '/privacy', label: 'Privacy Police' },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <div className={classes('container')}>
      <LinkBlocks linkBlockList={linkBlockList} />
      <div className={classes('copyrightContainer')}>
        <div className={classes('logoContainer')}>
          <Image
            src="/logo-small.svg"
            alt="Morfeo Logo"
            width={30}
            height={30}
          />
        </div>
        <div className={classes('textContainer')}>
          <span>
            Copyright © {new Date().getFullYear()} Mauro Erta, VLK Studio and
            all the documentation authors.
          </span>
        </div>
        <Social />
      </div>
    </div>
  );
};
