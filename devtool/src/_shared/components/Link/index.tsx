import { useCallback } from 'react';
import { RouteName } from '../../contexts';
import { useRouter } from '../../hooks';
import { RouteState } from '../../contexts/Routing/types';

type Props = React.HTMLProps<HTMLSpanElement> & {
  to: RouteName;
  state?: RouteState;
  onNavigate?: () => void;
};

export const Link: React.FC<Props> = ({
  to,
  state,
  children,
  onNavigate,
  ...props
}) => {
  const { navigate } = useRouter();

  const onClick = useCallback(() => {
    navigate(to, state);
    if (onNavigate) {
      onNavigate();
    }
  }, [navigate, onNavigate, to, state]);

  return (
    <span
      role="link"
      className="morfeo-typography-link"
      onClick={onClick}
      {...props}
    >
      {children}
    </span>
  );
};

export const BackLink: React.FC<Omit<Props, 'to'>> = ({
  children,
  onNavigate,
  ...props
}) => {
  const { navigateBack } = useRouter();

  const onClick = useCallback(() => {
    navigateBack();
    if (onNavigate) {
      onNavigate();
    }
  }, [navigateBack, onNavigate]);

  return (
    <span
      role="link"
      className="morfeo-typography-link"
      onClick={onClick}
      {...props}
    >
      {children}
    </span>
  );
};
