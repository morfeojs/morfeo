import React from 'react';

type Props = {
  label?: string;
  value: string;
};

export const DetailLabel: React.FC<Props> = ({ label = 'Value', value }) => {
  return (
    <h5 className="morfeo-typography-h5 mt-xs">
      <span className="font-weight-bold">{label}: </span>
      {value}
    </h5>
  );
};
