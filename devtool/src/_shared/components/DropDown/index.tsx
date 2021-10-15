import React, { useMemo, useState, useCallback } from 'react';
import { Color } from '@morfeo/react';
import { Icon } from '../Icon';
import styles from './style.module.css';
import clsx from 'clsx';

type Option = {
  label: string;
  value: string;
};

type Props = {
  title?: string;
  value?: string;
  options: Option[];
  placeholder?: string;
  onChange: (value: string) => void;
};

export const DropDown: React.FC<Props> = ({
  title,
  value,
  options,
  placeholder,
  onChange,
}) => {
  const [open, setOpen] = useState(false);

  const getOnClick = useCallback(
    (value: string) => {
      return () => {
        onChange(value);
        setOpen(false);
      };
    },
    [onChange],
  );

  const toggle = useCallback(() => {
    setOpen(prev => !prev);
  }, []);

  const items = useMemo(() => {
    return options.map(({ label: optionLabel, value: optionValue }) => (
      <div key={optionLabel} className={styles.option}>
        <h4 className="morfeo-typography-h4" onClick={getOnClick(optionValue)}>
          {optionLabel}
        </h4>
      </div>
    ));
  }, [options, getOnClick]);

  return (
    <div className={clsx(styles.container, open && styles.open)}>
      {title && (
        <h3 className={clsx('morfeo-typography-h3', styles.title)}>{title}</h3>
      )}
      <div className={styles.buttonContainer}>
        <button
          className={clsx('morfeo-button', styles.button)}
          onClick={toggle}
        >
          {value || placeholder}
          <Icon
            name="chevron.right"
            color={'textColor' as Color}
            size="xs"
            className={styles.toggle}
          />
        </button>
        <div className={styles.optionsContainer}>{items}</div>
      </div>
    </div>
  );
};