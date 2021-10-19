import React, { useMemo } from 'react';
import { ThemeKey, useTheme } from '@morfeo/react';
import { Page } from '../../../_shared/template/Page';
import { Grid, Item } from '../../../_shared/components';
import { THEME_KEYS } from '../../../_shared/constants';
import { SliceCard } from './SliceCard';

function useSortedThemeSlices() {
  const theme = useTheme();
  const countMap: Record<ThemeKey, number> = {} as any;

  THEME_KEYS.forEach(slice => {
    const config = theme[slice];
    const number = Object.keys(config || {}).length;
    countMap[slice] = number;
  });

  const slices = THEME_KEYS.sort((first, second) => {
    if (countMap[first] === 0) {
      return Infinity;
    }

    if (countMap[second] === 0) {
      return -Infinity;
    }

    return first.localeCompare(second);
  });

  return slices || [];
}

export const Home: React.FC = () => {
  const themeSlices = useSortedThemeSlices();

  const renderedSlices = useMemo(
    () =>
      themeSlices.map(slice => (
        <Item key={slice}>
          <SliceCard slice={slice} />
        </Item>
      )),
    [themeSlices],
  );

  return (
    <Page>
      <Grid>{renderedSlices}</Grid>
    </Page>
  );
};
