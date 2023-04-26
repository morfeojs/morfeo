import { morfeo } from '@morfeo/css';
import { ButtonLink } from '../Button';
import { TypingAnimation } from '../TypingAnimation/TypingAnimation';

const classes = morfeo.css({
  container: {
    position: 'relative',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    py: 'raw:10rem',
    gradient:
      'raw:radial-gradient(circle at 40% 40%, #445ac74d 0%, transparent 40%),radial-gradient(circle at 60% 60%, rgba(183, 65, 14, 0.4) 0%, transparent 30%)',
  },
  title: {
    componentName: 'Typography',
    variant: 'display',
    color: 'gray.lightest',
    fontSize: '4xl',
    lineHeight: 'none',
    mb: 's',
  },
  subtitle: {
    componentName: 'Typography',
    variant: 'h2',
    color: 'gray.light',
    maxWidth: 'raw:800px',
  },
  cta: {
    display: 'flex',
    py: 'm',
    gap: 'm',
  },
});

const words = ['Design.', 'Build.', 'Theming.', 'Everywhere.', 'Components.'];

export function Hero() {
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>
        <TypingAnimation words={words} /> Without
        <br />
        compromises.
      </h1>
      <h2 className={classes.subtitle}>
        Morfeo is a build-time CSS-in-JS solution for the next level theming,
        with the minimum amount of shipped CSS.
      </h2>

      <div className={classes.cta}>
        <ButtonLink href="/docs">Start learning</ButtonLink>
        <ButtonLink href="https://github.com/morfeojs/morfeo" variant="outline">
          Github
        </ButtonLink>
      </div>
    </section>
  );
}
