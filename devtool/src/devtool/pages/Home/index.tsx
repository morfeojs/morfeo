import React, { useMemo } from 'react';
import { Page } from '../../../_shared/template/Page';
import { Grid, Item } from '../../../_shared/components';
import { useSlicesWithStatus } from '../../../_shared/hooks';
import { SliceCard } from './SliceCard';

export const Home: React.FC = () => {
  const themeSlices = useSlicesWithStatus();

  const renderedSlices = useMemo(
    () =>
      themeSlices.map(slice => (
        <Item key={slice.name}>
          <SliceCard {...slice} />
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
