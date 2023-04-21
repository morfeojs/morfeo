import { css } from '@morfeo/css';
import { ButtonLink } from '../Button';
import { TypingAnimation } from '../TypingAnimation/TypingAnimation';

const classes = css({
  container: {
    position: 'relative',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    py: 'raw:10rem',
    gradient: `raw:radial-gradient(circle at 40% 40%, #445ac74d -10%, transparent 30%),
    radial-gradient(circle at 60% 60%, rgba(183, 65, 14, 0.4) -20%, transparent 20%)`,
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
    py: 'm',
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
      </div>
    </section>
  );
}
