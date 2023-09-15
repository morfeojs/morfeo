import { morfeo } from '@morfeo/web';
import {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Card } from '../Card';
import { Player } from '@lottiefiles/react-lottie-player';

const classes = morfeo.css({
  container: {
    minHeight: 'raw:300px',
    '& svg': {
      transition: 'fast',
      filter: 'grayscale(0.3)',
      opacity: 'medium',
    },
    '&:hover svg': {
      filter: 'grayscale(0)',
      opacity: 'strong',
    },
  },
  content: {
    p: 's',
    display: 'flex',
    overflow: 'hidden',
    width: '100',
  },
  bodyContainer: {
    flex: '1',
  },
  title: {
    componentName: 'Typography',
    variant: 'h2',
  },
  column: {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    width: '100',
    flexDirection: {
      default: 'column-reverse',
      md: 'row',
    },
    justifyContent: 'space-between',
    overflow: 'hidden',
    position: 'relative',
    alignItems: 'center',
    zIndex: 'low',
    gap: 's',
  },
  rowAnimationContainer: {
    size: {
      default: 'raw:150px',
      md: 'raw:230px',
    },
    mb: '2xs',
    '& p': {
      maxWidth: 'raw:200px',
    },
  },
  columnAnimationContainer: {
    display: 'flex',
    size: 'raw:150px',
    mb: '2xs',
  },
});

type FeatureCardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  title: string;
  variant?: 'row' | 'column';
  animationSrc: Player['props']['src'];
};

export function FeatureCard({
  title,
  variant = 'column',
  animationSrc,
  ...props
}: FeatureCardProps) {
  const [isHover, setIsHover] = useState(false);
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    if (isHover) {
      playerRef.current?.setPlayerDirection(1);
      playerRef.current?.play();
      return;
    }
    playerRef.current?.setPlayerDirection(-1);
    playerRef.current?.play();
  }, [isHover]);

  return (
    <Card
      {...props}
      className={classes('container')}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={classes('content', variant, props.className)}>
        <div className={classes('bodyContainer')}>
          <span className={classes('title')}>{title}</span>
          {props.children}
        </div>
        <div className={classes(`${variant}AnimationContainer`)}>
          <Player src={animationSrc} ref={playerRef} keepLastFrame />
        </div>
      </div>
    </Card>
  );
}
