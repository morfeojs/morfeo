import React, { useMemo } from 'react';
import { Color, Component, useThemeSlice } from '@morfeo/react';
import { Grid, Item } from '../../Grid';
import { Preview } from './Preview';

export const Components: React.FC = () => {
  const slice = useThemeSlice('components');

  const sliceKeys = useMemo(
    () =>
      (Object.keys(slice) || []).sort((first, second) =>
        first.localeCompare(second),
      ) as Color[],
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
