import { morfeo } from '@morfeo/css';
import { useMemo } from 'react';
import clsx from 'clsx';

type Props = {
  steps: {
    title: string;
    body: string;
  }[];
  selectedStepIndex: number;
  stepOnClick: (index: number) => void;
};

const classes = morfeo.css({
  mobileStepContainer: {
    w: '100',
    display: {
      default: 'flex',
      md: 'none',
    },
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'm',
    mt: 'm',
  },
  mobileStep: {
    w: 'raw:50px',
    h: 'raw:50px',
    corner: 'xl',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'thin',
    opacity: 'light',
  },
  isActive: {
    opacity: 'strong',
  },
});

export const MobileSteps: React.FC<Props> = ({
  stepOnClick,
  steps,
  selectedStepIndex,
}) => {
  const renderSteps = useMemo(
    () =>
      steps.map((step, i) => (
        <div
          key={step.title}
          className={clsx(
            classes.mobileStep,
            i === selectedStepIndex && classes.isActive,
          )}
          onClick={() => stepOnClick(i)}
        >
          {i + 1}
        </div>
      )),
    [selectedStepIndex, stepOnClick, steps],
  );
  return <div className={classes.mobileStepContainer}>{renderSteps}</div>;
};
