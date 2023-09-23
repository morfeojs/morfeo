import { morfeo } from 'src/morfeo.theme';
import Image from 'next/image';
import Link from 'next/link';
import { WebExtensionStepProps } from './types';
import { WebExtensionStep } from './WebExtensionStep';
import { FadeInBox } from '../FadeInBox';

const stepList: WebExtensionStepProps[] = [
  {
    title: 'Your design system, directly on your browser',
    body: 'Lorem ipsum dolor sit amet consectetur. Varius commodo tempus adipiscing pharetra quis euismod. ',
    image: {
      src: '/web_extension.png',
      alt: 'Morfeo web extension',
    },
  },
  {
    title: 'Copy alias and code in just one click',
    body: 'Lorem ipsum dolor sit amet consectetur. Varius commodo tempus adipiscing pharetra quis euismod. ',
    image: {
      src: '/web_extension.png',
      alt: 'Morfeo web extension',
    },
  },
  {
    title: 'Your theme and components will be automagically documented',
    body: 'Lorem ipsum dolor sit amet consectetur. Varius commodo tempus adipiscing pharetra quis euismod. ',
    image: {
      src: '/web_extension.png',
      alt: 'Morfeo web extension',
    },
  },
  {
    title: 'Easily find all you need',
    body: 'Lorem ipsum dolor sit amet consectetur. Varius commodo tempus adipiscing pharetra quis euismod. Varius commodo tempus adipiscing pharetra quis euismod.',
    image: {
      src: '/web_extension.png',
      alt: 'Morfeo web extension',
    },
  },
];

const classes = morfeo.css({
  mainContainer: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    mb: {
      sm: 'xl',
    },
  },
  imageCover: {
    w: '100',
    h: {
      default: 'raw:200px',
      sm: 'raw: 600px',
    },
    position: 'relative',
  },
  image: {
    w: '100',
    h: '100',
    objectFit: 'contain',
  },
  spacer: {
    mb: 'm',
  },
  badge: {
    mb: 'xl',
  },
  stepContainer: {
    w: '100',
    display: 'flex',
    flexDirection: 'column',
    gap: {
      default: '5xl',
      sm: 'xl',
    },
    '& > section:nth-child(odd)': {
      flexDirection: {
        default: 'column',
        sm: 'row',
      },
    },
  },
});

export const WebExtensionSection: React.FC = () => {
  return (
    <section>
      <FadeInBox className={classes('mainContainer')}>
        <FadeInBox.Title>
          The web extension you have always{' '}
          <span className="accent">dreamed</span> of
        </FadeInBox.Title>
        <FadeInBox.Caption>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          necessitatibus hic dolor rerum minus blanditiis consectetur, eos
          architecto repellat recusandae deserunt sint ratione placeat voluptate
          quae
        </FadeInBox.Caption>
        <span className={classes('spacer')} />
        <Link
          href="https://chrome.google.com/webstore/detail/morfeo/phhhjdmeicikchjnpepljcdgbmipipcl"
          passHref={true}
        >
          <Image
            width={220}
            height={100}
            src="/chrome_market_badge.png"
            alt="Chrome Web Store badge"
            className={classes('badge')}
          />
        </Link>
        <div className={classes('imageCover')}>
          <Image
            src="/web_extension.png"
            alt="Morfeo screenshot"
            className={classes('image')}
            fill
          />
        </div>
      </FadeInBox>
      <div className={classes('stepContainer')}>
        {stepList.map(step => (
          <WebExtensionStep key={step.title} {...step} />
        ))}
      </div>
    </section>
  );
};
