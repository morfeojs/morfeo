import { morfeo } from '@morfeo/web';
import { useState } from 'react';
import { Steps } from './Steps';
import { MobileSteps } from './MobileSteps';
import ThemeSnippet from './ThemeSnippet.mdx';
import CSS from './CSS.mdx';
import Code from './Code.mdx';
import { FadeInBox } from '../FadeInBox';

const classes = morfeo.css({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  inner: {
    h: '100',
    display: 'flex',
    flexDirection: {
      default: 'column',
      md: 'row',
    },
    gap: {
      default: 'm',
      md: '5xl',
    },
    width: '100',
    mt: {
      default: 'l',
      md: '4xl',
    },
  },
  preview: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    corner: 'xs',
    flex: '2',
    position: 'relative',
    overflow: 'hidden',
    h: 'raw:fit-content',
    '& .nextra-code-block': {
      w: '100',
      corner: 'xs',
      mb: 'none',
      borderWidth: 's',
      borderColor: 'primary.lightest',
    },
    '& .nextra-code-block pre': {
      mb: 'none',
    },
  },
});

const stepContentList = [
  {
    title: 'Define your theme',
    body: 'Create your theme or use one of our presets.',
    snippet: <ThemeSnippet />,
  },
  {
    title: 'Use it to style your components',
    body: 'Write CSS-in-JS styles based on your theme.',
    snippet: <Code />,
  },
  {
    title: 'Morfeo will optimize the output',
    body: 'Your code will be transformed at build time to remove all the unnecessary runtime overhead.',
    snippet: <CSS />,
  },
];

export function HowItWorks() {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);

  function handleStepIndex(index: number) {
    setSelectedStepIndex(index);
  }

  return (
    <FadeInBox className={classes('container')}>
      <FadeInBox.Title>
        How it <span className="accent">Works</span>
      </FadeInBox.Title>
      <FadeInBox.Caption>
        Our goal is to provide the best{' '}
        <span className="gradient">Developer eXperience</span> while ensuring{' '}
        <span className="gradient">best practices</span>.
        <br />
        You can focus on your project - Under the hood we optimize your code to
        guarantee for your customers the best{' '}
        <span className="gradient">User eXperience</span>.
      </FadeInBox.Caption>
      <MobileSteps
        stepOnClick={handleStepIndex}
        steps={stepContentList}
        selectedStepIndex={selectedStepIndex}
      />
      <div className={classes('inner')}>
        <Steps
          steps={stepContentList}
          selectedStepIndex={selectedStepIndex}
          stepOnClick={handleStepIndex}
        />
        <div className={classes('preview')}>
          {stepContentList[selectedStepIndex].snippet}
        </div>
      </div>
    </FadeInBox>
  );
}
