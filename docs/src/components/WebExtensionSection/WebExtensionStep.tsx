import { morfeo } from '@morfeo/web';
import Image from 'next/image';
import { WebExtensionStepProps } from './types';
import { FadeInBox } from '../FadeInBox';

const classes = morfeo.css({
  container: {
    h: {
      default: 'none',
      sm: '75vh',
    },
    minH: {
      default: '50vh',
      sm: 'none',
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: {
      default: 's',
      sm: '5xl',
    },
    flexDirection: {
      default: 'column',
      sm: 'row-reverse',
    },
  },
  textContainer: {
    display: 'flex',
    alignItems: {
      default: 'center',
      sm: 'flex-start',
    },
    justifyContent: 'center',
    flex: {
      default: 'none',
      sm: '1',
    },
    flexDirection: 'column',
  },
  title: {
    componentName: 'Typography',
    variant: 'h1',
    lineHeight: 'none',
    mb: '2xs',
  },
  imageCover: {
    h: {
      default: 'raw:200px',
      sm: '100',
    },
    w: '100',
    flex: {
      default: 'none',
      sm: '2',
    },
    position: 'relative',
  },
  image: {
    w: '100',
    h: '100',
    objectFit: 'contain',
  },
});

export const WebExtensionStep: React.FC<WebExtensionStepProps> = ({
  body,
  image,
  title,
}) => {
  return (
    <FadeInBox className={classes('container')}>
      <div className={classes('textContainer')}>
        <h3 className={classes('title')}>{title}</h3>
        <p>{body}</p>
      </div>
      <div className={classes('imageCover')}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className={classes('image')}
        />
      </div>
    </FadeInBox>
  );
};
