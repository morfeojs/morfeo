import { morfeo } from '@morfeo/web';
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
      md: 's',
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
    cursor: 'pointer',
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
    mr: 'xs',
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
      className={classes('container', isActive ? 'active' : 'unActive')}
      onClick={onClick}
    >
      {index !== undefined && (
        <span className={classes('stepIndex')}>{index + 1}</span>
      )}

      <h3 className={classes('title')}>{title}</h3>

      <p>{body}</p>
    </div>
  );
};
