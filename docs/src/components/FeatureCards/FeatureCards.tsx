import { morfeo } from 'src/morfeo';
import { FeatureCard } from './FeatureCard';
import webExtensionAnimationData from '@/lotties/web_extension.lottie.json';
import typescriptFirstAnimationData from '@/lotties/typescript_first.lottie.json';
import themingAnimationData from '@/lotties/theming.lottie.json';
import buildTimeAnimationData from '@/lotties/build_time.lottie.json';
import agnosticAnimationData from '@/lotties/agnostic.lottie.json';

const classes = morfeo.css({
  container: {
    gradient:
      'raw:radial-gradient(circle at 50% 40%, #445ac74d 0%, transparent 50%)',
  },
  firstLine: {
    width: '100',
    display: 'grid',
    gridTemplateColumns: {
      default: '1fr',
      sm: '1fr 1fr 1fr',
      md: '1fr 2fr 1fr',
      lg: '1fr 2fr 1fr',
    },
    gap: 's',
    mb: 's',
  },
  secondLine: {
    width: '100',
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
    <div className={classes('container')}>
      <div className={classes('firstLine')}>
        <FeatureCard title="Theming" animationSrc={themingAnimationData}>
          <p>
            Build your{' '}
            <span className={classes('gradientText')}>constraints</span>. With
            Morfeo you have full control over your design system and your design
            language.
          </p>
        </FeatureCard>
        <FeatureCard
          title="Fully agnostic"
          variant="row"
          animationSrc={agnosticAnimationData}
        >
          <p>
            Next, Remix, React, Svelte? Webpack, Vite, Esbuild? You name it, we
            have it! Morfeo runs{' '}
            <span className={classes('gradientText')}>everywhere</span>.
          </p>
        </FeatureCard>
        <FeatureCard
          title="Typescript first"
          animationSrc={typescriptFirstAnimationData}
        >
          <p>
            Always wear the{' '}
            <span className={classes('gradientText')}>protection</span>.
            Type-Safely styling is possible with Morfeo.
          </p>
        </FeatureCard>
      </div>
      <div className={classes('secondLine')}>
        <FeatureCard
          title="Web extension"
          variant="row"
          animationSrc={webExtensionAnimationData}
          comingSoon
        >
          <p>
            Components and Design tokens are{' '}
            <span className={classes('gradientText')}>automagically </span>
            documented. For free. For real!
          </p>
        </FeatureCard>
        <FeatureCard
          title="Compile time"
          variant="row"
          animationSrc={buildTimeAnimationData}
        >
          <p>
            DX of CSS-in-JS, minimum possible CSS footprint, and no style
            injection at runtime. Simply{' '}
            <span className={classes('gradientText')}>Morfeo</span>.
          </p>
        </FeatureCard>
      </div>
    </div>
  );
}
