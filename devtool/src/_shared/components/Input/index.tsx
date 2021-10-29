import clsx from 'clsx';
import React from 'react';

type Props = React.HTMLProps<HTMLInputElement> & {
  label?: string;
};

export const Input: React.FC<Props> = ({ className, label, ...props }) => {
  return (
    <>
      {label && (
        <label className="morfeo-typography-h4" htmlFor={props.id}>
          {label}
        </label>
      )}
      <input {...props} className={clsx('morfeo-input', className)} />
    </>
  );
};
