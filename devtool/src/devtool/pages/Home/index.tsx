import React, { useMemo } from 'react';
import { Card } from '../../../_shared/components';
import { RouteName } from '../../../_shared/contexts';
import { useRouter, useThemeSlices } from '../../../_shared/hooks';
import { Page } from '../../../_shared/template/Page';
import { SliceName } from '../../../_shared/contexts/Routing/types';

export const Home: React.FC = () => {
  const themeSlices = useThemeSlices();
  const { navigate } = useRouter();

  const renderedSlices = useMemo(
    () =>
      themeSlices.map((slice) => (
        <Card
          key={slice}
          copyText={slice}
          style={{ bg: 'primary', m: 'xs' }}
          onClick={() => navigate(RouteName.SLICE, { slice: slice as SliceName })}
        >
          <h3
            className="morfeo-typography-h2"
            style={{ color: 'var(--colors-inverted-text-color)' }}
          >
            {slice}
          </h3>
        </Card>
      )),
    [navigate, themeSlices],
  );

  return (
    <Page>
      {renderedSlices}
    </Page>
  );
};
