import React, { useCallback, useMemo } from 'react';
import { Color } from '@morfeo/react';
import clsx from 'clsx';
import { Accordion, Icon, Link } from '../../components';
import { RouteName } from '../../contexts';
import { useThemeSlices } from '../../hooks';
import styles from './style.module.css';

type Props = {
  open?: boolean;
  setOpen: (open: boolean) => void;
};

export const SideBar: React.FC<Props> = ({ open, setOpen }) => {
  const slices = useThemeSlices();

  const renderedSlices = useMemo(
    () =>
      slices.map(slice => (
        <Link
          key={slice}
          to={slice as RouteName}
          onNavigate={() => setOpen(false)}
          style={{
            color: 'var(--color-inverted-text-color)',
            marginBottom: 'var(--spacings-xxs)',
          }}
        >
          {slice}
        </Link>
      )),
    [setOpen, slices],
  );

  const toggle = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  return (
    <div className={clsx(styles.sidebar, open && styles.open)}>
      <Accordion label="Slices" icon="slice">
        <div className={styles.linksContainer}>{renderedSlices}</div>
      </Accordion>
      <button
        className={clsx('morfeo-button-round', styles.toggle)}
        onClick={toggle}
      >
        <Icon name="doubleChevron.right" color={'invertedTextColor' as Color} />
      </button>
    </div>
  );
};
