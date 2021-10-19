import React, { useMemo } from 'react';
import { Component } from '@morfeo/react';
import { Page } from '../../../_shared/template/Page';
import { useRouter } from '../../../_shared/hooks/useRouter';
import { CodeSnippets, Grid, Item, slices } from '../../../_shared/components';
import { SliceName } from '../../../_shared/contexts/Routing/types';
import { Variants } from '../../../_shared/components/Slices/Components/Variants';
import { Preview } from '../../../_shared/components/Slices/Components/Preview';
import clsx from 'clsx';

import styles from './style.module.css';

export const ComponentPage: React.FC = () => {
  const { route } = useRouter();
  const { state } = route;
  const { slice, detailKey, componentVariant } = state || {};

  const breadCrumbSlice = slices[slice as SliceName]?.displayName || 'slice';
  const breadCrumbDetail = detailKey || '';
  const breadCrumb = componentVariant
    ? [breadCrumbSlice, breadCrumbDetail, componentVariant]
    : [breadCrumbSlice, breadCrumbDetail];

  const renderContent = useMemo(() => {
    if (detailKey && slice) {
      return slices[slice].renderDetail || <></>;
    }

    if (slice) {
      return slices[slice].render;
    }

    return <></>;
  }, [detailKey, slice]);

  const title = useMemo(() => {
    if (componentVariant) {
      return `${detailKey} ${componentVariant}`;
    }

    if (detailKey) {
      return detailKey;
    }

    if (slice) {
      return slices[slice]?.displayName;
    }

    return '';
  }, [detailKey, slice, componentVariant]);

  return (
    <Page breadcrumb={breadCrumb} title={title}>
      {renderContent}
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
