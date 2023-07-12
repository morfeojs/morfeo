import { morfeo } from '@morfeo/css';
import { useMediaQuery } from '@/hooks';
import { DesktopPlayer } from './DesktopChartPlayer';
import { SmartphoneChartPlayer } from './SmartphoneChartPlayer';
import { FadeInBox } from '../FadeInBox';

const classes = morfeo.css({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100',
    alignItems: 'center',
    justifyContent: 'center',
    mb: '4xl',
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
        <h1 className={classes('title')}>CSS bundle size? No problem</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Varius commodo tempus
          adipiscing pharetra quis euismod. Gravida blandit gravida tincidunt
          netus mi viverra. Congue sit sagittis tempus odio arcu in. Donec amet.
        </p>
      </div>
      <div className={classes('animationContainer')}>
        {isTabletOrBelow ? <SmartphoneChartPlayer /> : <DesktopPlayer />}
      </div>
    </FadeInBox>
  );
};
