import React from 'react';
import { Color } from '@morfeo/react';
import { Icon } from '../Icon';
import styles from './style.module.css';
import clsx from 'clsx';
import { IconName } from '../Icon/icons';

type Props = {
  label: string;
  icon?: IconName;
  open?: boolean;
  setOpen: (isOpen: boolean) => void;
};

export const Accordion: React.FC<Props> = ({
  label,
  icon,
  children,
  open = false,
  setOpen,
}) => {
  return (
    <div className={clsx(open && styles.open)}>
      <div className={styles.labelContainer} onClick={() => setOpen(!open)}>
        <Icon
          name="chevron.right"
          size="s"
          color={'invertedTextColor' as Color}
          className={styles.toggle}
        />
        <div className={styles.titleContainer}>
          {icon && (
            <Icon
              name={icon}
              size="s"
              color={'invertedTextColor' as Color}
              className={styles.icon}
            />
          )}
          <h4
            className="morfeo-typography-h1"
            style={{ color: 'var(--color-inverted-text-color)' }}
          >
            {label}
          </h4>
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
