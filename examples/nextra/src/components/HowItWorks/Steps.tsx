import { morfeo } from '@morfeo/css';
import { Step } from './Step';
import { useMemo } from 'react';

type Props = {
  steps: {
    title: string;
    body: string;
  }[];
  selectedStepIndex: number;
  stepOnClick: (index: number) => void;
};

const classes = morfeo.css({
  cards: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 'm',
    flex: '3',
  },
});

export const Steps: React.FC<Props> = ({
  selectedStepIndex,
  stepOnClick,
  steps,
}) => {
  const renderSteps = useMemo(
    () =>
      steps.map((step, i) => (
        <Step
          key={step.title}
          isActive={i === selectedStepIndex}
          onClick={() => stepOnClick(i)}
          index={i}
          {...step}
        />
      )),
    [selectedStepIndex, stepOnClick, steps],
  );
  return <div className={classes.cards}>{renderSteps}</div>;
};
