import { morfeo } from '@morfeo/css';
import { useMediaQuery } from '@/hooks';
import { DesktopPlayer } from './DesktopChartPlayer';
import { SmartphoneChartPlayer } from './SmartphoneChartPlayer';
import { FadeInBox } from '../FadeInBox';

const classes = morfeo.css({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    maxWidth: 'raw:800px',
    textAlign: 'center',
  },
  title: {
    componentName: 'Typography',
    variant: 'display',
    color: 'gray.lightest',
    fontSize: '3xl',
    lineHeight: 'none',
    mb: 's',
  },
  body: {
    componentName: 'Typography',
    variant: 'p',
    color: 'gray.light',
  },
  animationContainer: {
    size: {
      default: '100',
      md: '75',
      lg: '75',
    },
  },
});

export const BundleSize: React.FC = () => {
  const isTabletOrBelow = useMediaQuery('(max-width: 768px)');

  return (
    <FadeInBox className={classes('container')}>
      <div className={classes('textContainer')}>
        <FadeInBox.Title>
          Holy f*ck,
          <br />
          That <span className="accent">bundle</span> of yours is absurd.
        </FadeInBox.Title>
        <FadeInBox.Caption>
          It&apos;s not about <span className="line-through">body</span>{' '}
          <span className="gradient">bundle shaming</span>, but we care about
          your shape.
        </FadeInBox.Caption>
        <FadeInBox.Caption>
          Morfeo&apos;s compiler split your style into multiple,{' '}
          <strong>atomic</strong> CSS classes and <strong>reuses</strong> them
          as much as possible, resulting in a really small CSS bundle.
        </FadeInBox.Caption>
      </div>
      <div className={classes('animationContainer')}>
        {isTabletOrBelow ? <SmartphoneChartPlayer /> : <DesktopPlayer />}
      </div>
    </FadeInBox>
  );
};
