import React, { useMemo } from 'react';
import { Component, useThemeSlice } from '@morfeo/react';
import { Grid, Item } from '../../Grid';
import { Preview } from './Preview';

export * from './Detail';

export const Components: React.FC = () => {
  const slice = useThemeSlice('components');

  const sliceKeys = useMemo(
    () =>
      (Object.keys(slice) as Component[])
        .filter(comp => !slice[comp].meta?.devtoolConfig?.hide)
        .sort((first, second) => first.localeCompare(second)),
    [slice],
  );

  const section = useMemo(() => {
    return sliceKeys.map(key => {
      return (
        <Item key={`components-${key}`}>
          <Preview name={key as Component} />
        </Item>
      );
    });
  }, [sliceKeys]);

  return <Grid>{section}</Grid>;
};
