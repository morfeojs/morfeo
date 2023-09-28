import { morfeo } from 'src/morfeo';
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
  container: {
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
  step: {
    w: 'raw:50px',
    h: 'raw:50px',
    corner: 'round',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'thin',
    cursor: 'pointer',
  },
  inactive: {
    opacity: 'medium',
  },
  active: {
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
          className={classes(
            'step',
            i !== selectedStepIndex && 'inactive',
            i === selectedStepIndex && 'active',
          )}
          onClick={() => stepOnClick(i)}
        >
          {i + 1}
        </div>
      )),
    [selectedStepIndex, stepOnClick, steps],
  );
  return <div className={classes('container')}>{renderSteps}</div>;
};
