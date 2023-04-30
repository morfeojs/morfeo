import { morfeo } from '@morfeo/css';
import clsx from 'clsx';
import { MouseEventHandler } from 'react';
type Props = {
  isActive?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  title: string;
  body: string;
  index?: number;
};

const classes = morfeo.css({
  container: {
    w: '100',
    py: {
      default: 'none',
      md: 'l',
    },
    px: {
      default: 'none',
      md: 'l',
    },
    flexDirection: 'column',
    borderWidth: {
      default: 'none',
      md: 's',
    },
    borderColor: 'primary.lightest',
    corner: 'xs',
    transition: 'fast',
  },
  title: {
    componentName: 'Typography',
    variant: 'h3',
  },
  unActive: {
    display: {
      default: 'none',
      md: 'flex',
    },
    opacity: 'light',
  },
  active: {
    opacity: 'strong',
    display: 'flex',
  },
  stepIndex: {
    componentName: 'Typography',
    variant: 'h2',
    display: {
      default: 'none',
      md: 'block',
    },
  },
});

export const Step: React.FC<Props> = ({
  isActive,
  body,
  title,
  onClick,
  index,
}) => {
  return (
    <div
      className={clsx(
        isActive ? classes.active : classes.unActive,
        classes.container,
      )}
      onClick={onClick}
    >
      {index !== undefined && (
        <h4 className={classes.stepIndex}>{index + 1}</h4>
      )}
      <h3 className={classes.title}>{title}</h3>
      <p>{body}</p>
    </div>
  );
};
