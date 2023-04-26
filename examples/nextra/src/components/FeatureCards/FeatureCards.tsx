import { morfeo } from '@morfeo/css';
import { FeatureCard } from './FeatureCard';

const classes = morfeo.css({
  container: {
    gradient:
      'raw:radial-gradient(circle at 50% 40%, #445ac74d 0%, transparent 50%)',
  },
  firstLine: {
    display: 'grid',
    gridTemplateColumns: {
      default: '1fr',
      sm: '1fr 1fr',
      md: '1fr 1fr 1fr',
      lg: '1fr 2fr 1fr',
    },
    gap: 's',
    mb: 's',
  },
  secondLine: {
    display: 'grid',
    gridTemplateColumns: {
      default: '1fr',
      sm: '1fr 1fr',
    },
    gap: 's',
  },
  gradientText: {
    textGradient: 'accentToPrimary',
    fontWeight: 'bold',
  },
});

export function FeatureCards() {
  return (
    <div className={classes.container}>
      <div className={classes.firstLine}>
        <FeatureCard title="Theming" imageSrc="/theming.svg">
          <p>
            Build your <span className={classes.gradientText}>constraints</span>
            . With Morfeo you have full control over your design system and your
            design language.
          </p>
        </FeatureCard>
        <FeatureCard
          title="Fully agnostic"
          variant="row"
          imageSrc="/agnostic.svg"
        >
          <p>
            Next, Remix, React, Svelte?
            <br />
            Webpack, Vite, Esbuild?
            <br /> You name it, we have it!
            <br />
            Morfeo runs <span className={classes.gradientText}>everywhere</span>
            .
          </p>
        </FeatureCard>
        <FeatureCard title="Typescript first" imageSrc="/ts.svg">
          <p>
            Always wear the{' '}
            <span className={classes.gradientText}>protection</span>.
            Type-Safely styling is possible with Morfeo.
          </p>
        </FeatureCard>
      </div>
      <div className={classes.secondLine}>
        <FeatureCard
          title="Web extension"
          variant="row"
          imageSrc="/web_extension.svg"
        >
          <p>
            Components and Design tokens are <br />
            <span className={classes.gradientText}>automagically</span>{' '}
            documented.
            <br />
            For free. For real!
          </p>
        </FeatureCard>
        <FeatureCard
          title="Build time"
          variant="row"
          imageSrc="/build_time.svg"
        >
          <p>
            DX of CSS-in-JS,
            <br />
            minimum possible CSS footprint,
            <br />
            without any runtime overhead.
            <br />
            Simply <span className={classes.gradientText}>Morfeo</span>.
          </p>
        </FeatureCard>
      </div>
    </div>
  );
}
