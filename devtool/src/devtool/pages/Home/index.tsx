import React, { useMemo } from 'react';
import { capitalCase, noCase } from 'change-case';
import { Card, Icon } from '../../../_shared/components';
import { RouteName } from '../../../_shared/contexts';
import { useRouter, useThemeSlices } from '../../../_shared/hooks';
import { Page } from '../../../_shared/template/Page';
import { SliceName } from '../../../_shared/contexts/Routing/types';
import { IconName } from '../../../_shared/components/Icon/icons';
import styles from './style.module.css';
import clsx from 'clsx';

export const Home: React.FC = () => {
  const themeSlices = useThemeSlices();
  const { navigate } = useRouter();

  const renderedSlices = useMemo(
    () =>
      themeSlices.map(slice => (
        <div key={slice} className={styles.sliceContainer}>
          <Card
            className={clsx('morfeo-card-primary', styles.sliceCard)}
            onClick={() =>
              navigate(RouteName.SLICE, { slice: slice as SliceName })
            }
          >
            <Icon name={`slice.${slice}` as IconName} />
          </Card>
          <h4 className="morfeo-typography-h4 mt-xxs">
            {capitalCase(noCase(slice))}
          </h4>
        </div>
      )),
    [navigate, themeSlices],
  );

  return <Page>{renderedSlices}</Page>;
};
