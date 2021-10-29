import React, { useMemo } from 'react';
import { Component } from '@morfeo/react';
import { Page } from '../../../_shared/template/Page';
import { useRouter } from '../../../_shared/hooks/useRouter';
import { CodeSnippets, Grid, Item } from '../../../_shared/components';
import { Detail } from '../../../_shared/components/Slices/Components/Detail';
import { SliceName } from '../../../_shared/contexts/Routing/types';
import { Variants } from '../../../_shared/components/Slices/Components/Variants';
import { Preview } from '../../../_shared/components/Slices/Components/Preview';
import clsx from 'clsx';

import styles from './style.module.css';

export const ComponentPage: React.FC = () => {
  const { route } = useRouter();
  const { state } = route;
  const { slice, detailKey, componentVariant } = state || {};

  const breadCrumbDetail = detailKey || '';
  const breadCrumb = componentVariant
    ? [breadCrumbDetail, componentVariant]
    : [breadCrumbDetail];

  const title = useMemo(() => {
    if (componentVariant) {
      return `${detailKey} ${componentVariant}`;
    }

    if (detailKey) {
      return detailKey;
    }

    return '';
  }, [detailKey, componentVariant]);

  return (
    <Page breadcrumb={['components', ...breadCrumb]} title={title}>
      <Detail />
      {state && state.detailKey && (
        <div className="my-xxs mx-xs">
          <CodeSnippets
            slice={slice as SliceName}
            value={detailKey as string}
            componentVariant={componentVariant}
          />
        </div>
      )}
      <div className={styles.variantsContainer}>
        <h1 className={clsx('morfeo-typography-h1', styles.variantsTitle)}>
          {!componentVariant ? 'Variants' : 'Base component'}
        </h1>
        {!componentVariant && (
          <Variants componentName={detailKey as Component} />
        )}
        {componentVariant && (
          <Grid>
            <Item>
              <Preview name={detailKey as Component} />
            </Item>
          </Grid>
        )}
      </div>
    </Page>
  );
};
