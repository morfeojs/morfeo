import { morfeo } from '@morfeo/css';
import { useState } from 'react';
import { Steps } from './Steps';
import { MobileSteps } from './MobileSteps';

const classes = morfeo.css({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    py: '4xl',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  title: {
    componentName: 'Typography',
    variant: 'display',
    lineHeight: 'none',
    color: 'gray.lightest',
    mb: 's',
    textAlign: 'center',
    '& span': {
      textGradient: 'text.primary',
    },
  },
  subTitle: {
    componentName: 'Typography',
    variant: 'p',
    maxW: 'raw:800px',
    textAlign: 'center',
  },
  inner: {
    h: '100',
    display: 'flex',
    flexDirection: {
      default: 'column-reverse',
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
    border: 'thin',
    borderColor: 'primary.lightest',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    corner: 'xs',
    flex: '2',
    position: 'relative',
    overflow: 'hidden',
    '& image': {
      w: '100',
      h: '100',
      objectFit: 'cover',
    },
  },
  cardTitle: {
    componentName: 'Typography',
    variant: 'h3',
  },
  textContainer: {
    w: '100',
    p: 'm',
    display: 'flex',
    opacity: 'light',
    flexDirection: 'column',
    border: 'thin',
  },
});

const stepContentList: { title: string; body: string }[] = [
  {
    title: 'Set your theme',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit enim, accusantium omnis ducimus earum est. Libero numquam quos consectetur eveniet?',
  },
  {
    title: 'Create styles based on the theme',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit enim, accusantium omnis ducimus earum est. Libero numquam quos consectetur eveniet?',
  },
  {
    title: 'Morfeo will generate a valid CSS-in-JS',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit enim, accusantium omnis ducimus earum est. Libero numquam quos consectetur eveniet?',
  },
];

export function HowItWorks() {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);

  function handleStepIndex(index: number) {
    setSelectedStepIndex(index);
  }

  return (
    <section className={classes.container}>
      <h2 className={classes.title}>
        How it <span>Works</span>
      </h2>
      <p className={classes.subTitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia culpa
        harum aliquid repellendus necessitatibus. Ab repellendus beatae vitae
        facere culpa?
      </p>
      <MobileSteps
        stepOnClick={handleStepIndex}
        steps={stepContentList}
        selectedStepIndex={selectedStepIndex}
      />
      <div className={classes.inner}>
        <Steps
          steps={stepContentList}
          selectedStepIndex={selectedStepIndex}
          stepOnClick={handleStepIndex}
        />
        <div className={classes.preview}>
          Code snippet {selectedStepIndex + 1}
        </div>
      </div>
    </section>
  );
}
