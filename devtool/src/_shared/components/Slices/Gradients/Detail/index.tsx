import React from 'react';
import {
  Gradient,
  useStyle,
  useThemeSlice,
  useThemeValue,
} from '@morfeo/react';
import { getContrast } from 'polished';
import { Card } from '../../../Card';
import { useRouter } from '../../../../hooks';
import styles from './style.module.css';
import { RouteState } from '../../../../contexts';

export const Detail: React.FC = () => {
  const { route } = useRouter();
  const { state = {} as RouteState } = route;
  const { detailKey } = state;
  const gradientStyle = useStyle({
    gradient: detailKey as Gradient,
  });
  const colorsSlice = useThemeSlice('colors');
  const { colors } = useThemeValue('gradients', detailKey as Gradient);
  const averageRatio = colors.reduce((acc, color) => {
    const mappedColor = colorsSlice?.[color] || '#fff';
    const contrastRatio = getContrast(mappedColor, '#fff');

    return acc + contrastRatio / colors.length;
  }, 0);

  return (
    <div className={styles.container}>
      <Card
        className="morfeo-card-primary"
        style={{ gradient: detailKey as Gradient }}
      >
        <h2
          className="morfeo-typography-h2"
          style={{
            color:
              averageRatio < 1.95
                ? 'var(--colors-gray-darkest)'
                : 'var(--colors-gray-lightest)',
          }}
        >
          {gradientStyle['background']}
        </h2>
      </Card>
    </div>
  );
};
