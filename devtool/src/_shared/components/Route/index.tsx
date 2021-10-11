import React, { CSSProperties, useCallback } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';
import { RouteName } from '../../contexts';
import { useRouter } from '../../hooks';

type Props = {
  name: RouteName;
};

const defaultStyle = {
  width: '100%',
  height: '100%',
  opacity: 1,
  transition: `transform 200ms, opacity 300ms ease`,
};

const transitionStyles: Record<TransitionStatus, CSSProperties> = {
  entering: { opacity: 0 },
  entered: { opacity: 1, transform: 'translateX(0%)' },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 },
};

function getTransitionStyles(state: TransitionStatus, direction: string) {
  const baseStyle = { ...defaultStyle, ...transitionStyles[state] };

  if (state === 'entering') {
    return {
      ...baseStyle,
      transform: `translateX(${direction === 'left' ? '100%' : '-100%'})`,
    };
  }

  if (state === 'exiting') {
    return {
      ...baseStyle,
      transform: `translateX(${direction === 'left' ? '-100%' : '100%'})`,
    };
  }

  return baseStyle;
}

const TRANSITION_TIMEOUT = {
  exit: 0,
  enter: 0,
  appear: 0,
};

export const Route: React.FC<Props> = ({ name, children }) => {
  const { route, direction } = useRouter();
  const isVisible = name === route;

  const renderChildren = useCallback(
    (state: TransitionStatus) => (
      <div style={getTransitionStyles(state, direction)}>{children}</div>
    ),
    [children, direction],
  );

  return (
    <Transition
      appear
      unmountOnExit
      in={isVisible}
      timeout={TRANSITION_TIMEOUT}
    >
      {renderChildren}
    </Transition>
  );
};
