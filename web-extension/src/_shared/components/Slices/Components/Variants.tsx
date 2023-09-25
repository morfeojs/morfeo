import { Component, useMorfeo } from '@morfeo/react';
import { Grid, Item } from '../../Grid';
import { Preview } from './Preview';

type Props = {
  componentName: Component;
};

export const Variants: React.FC<Props> = ({ componentName }) => {
  const morfeo = useMorfeo();
  const variants = morfeo.theme.component(componentName).getVariants();
  const variantKeys = Object.keys(variants || {});

  const filtered = variantKeys.filter(
    variant => !variants[variant].meta?.devtoolConfig?.hide,
  );

  return (
    <Grid>
      {filtered.map(name => (
        <Item key={name}>
          <Preview name={componentName} variant={name} />
        </Item>
      ))}
    </Grid>
  );
};
