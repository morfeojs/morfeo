import { Component, component } from '@morfeo/react';
import { useMemo } from 'react';
import { useRouter } from '../../../../hooks';
import { Grid, Item } from '../../../Grid';
import { createMorfeoComponent } from '../createMorfeoComponent';
import { Preview } from '../Preview';

import styles from './style.module.css';

export const Detail = () => {
  const { route } = useRouter();
  const { state } = route;
  const { detailKey: componentName = '', params = {} as any } = state || {};
  const variant = params.variant;
  const variants = component(componentName as Component, variant).getVariants();
  const variantKeys = Object.keys(variants || {});

  const componentPreview = useMemo(() => {
    return createMorfeoComponent({
      name: componentName as Component,
      props: {},
      variant,
      children: [componentName],
    });
  }, [componentName, variant]);

  return (
    <div className={styles.container}>
      <div className={styles.previewContainer}>{componentPreview}</div>
      <div className={styles.variantsContainer}>
        <h1 className="morfeo-typography-h1">Variants:</h1>
        <Grid>
          {variantKeys.map(name => (
            <Item key={name}>
              <Preview name={componentName as Component} variant={name} />
            </Item>
          ))}
        </Grid>
      </div>
    </div>
  );
};
