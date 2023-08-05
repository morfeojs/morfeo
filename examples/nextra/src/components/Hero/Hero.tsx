import { morfeo } from '@morfeo/css';
import { Button, ButtonLink } from '../Button';
import { TypingAnimation } from '../TypingAnimation/TypingAnimation';

const classes = morfeo.css({
  container: {
    position: 'relative',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    py: {
      default: '5xl',
      sm: 'raw:10rem',
    },
    gradient:
      'raw:radial-gradient(circle at 40% 40%, #445ac74d 0%, transparent 40%),radial-gradient(circle at 60% 60%, rgba(183, 65, 14, 0.4) 0%, transparent 30%)',
  },
  title: {
    componentName: 'Typography',
    variant: 'display',
    color: 'gray.lightest',
    fontSize: {
      default: '3xl',
      sm: '4xl',
    },
    lineHeight: 'none',
    mb: 's',
  },
  subtitle: {
    componentName: 'Typography',
    variant: 'h2',
    color: 'gray.light',
    fontWeight: 'regular',
    fontSize: {
      default: 'l',
      sm: 'xl',
    },
    maxWidth: {
      default: '100',
      sm: 'raw:800px',
    },
  },
  cta: {
    display: 'flex',
    py: 'm',
    gap: {
      default: 's',
      sm: 'm',
    },
    width: '100',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: {
      default: 'column',
      sm: 'row',
    },
    '& a': {
      minW: {
        default: '100',
        sm: 'none',
      },
    },
  },
});

const words = ['Design.', 'Build.', 'Theming.', 'Everywhere.', 'Components.'];

export function Hero() {
  return (
    <section className={classes('container')}>
      <h1 className={classes('title')}>
        <TypingAnimation words={words} /> <br /> Without compromises.
      </h1>
      <h2 className={classes('subtitle')}>
        Morfeo is a build-time CSS-in-JS solution for the next level theming,
        with the minimum amount of shipped CSS.
      </h2>

      <div className={classes('cta')}>
        <ButtonLink href="/docs">Start learning</ButtonLink>
        <Button variant="group">Whatever</Button>
        <ButtonLink href="https://github.com/morfeojs/morfeo" variant="outline">
          Github
        </ButtonLink>
      </div>
    </section>
  );
}
