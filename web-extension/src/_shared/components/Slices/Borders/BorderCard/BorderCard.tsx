import React, { useMemo } from 'react';
import { useStyle, useThemeValue, Border, Color } from '@morfeo/react';
import { getContrast } from 'polished';
import { Card } from '../../../Card';
import { Props as DetailProps } from '../Detail';
import { BorderSlice } from '../index';
import { DetailLabel } from '../../_shared/DetailLabel';
import { ListItemCard } from '../../_shared/ListItemCard';

export type Props = {
  clickable?: boolean;
  detailKey: string;
  showValues?: boolean;
  mainSlice: DetailProps['mainSlice'];
  filters?: Record<'borderWidths' | 'borderStyles' | 'colors', string>;
  showTitle?: boolean;
};

const propertiesMap: Record<BorderSlice, keyof React.CSSProperties> = {
  borderWidths: 'borderWidth',
  borderStyles: 'borderStyle',
  borders: 'border',
};

export const BorderCard: React.FC<Props> = ({
  clickable,
  detailKey,
  showValues,
  mainSlice,
  filters,
  showTitle,
}) => {
  const isBorders = mainSlice === 'borders';
  const themeValue = useThemeValue(mainSlice, detailKey as any);
  const borderColor = useThemeValue(
    'colors',
    (isBorders ? themeValue.color : filters?.colors || '') as Color,
  );

  const style = useStyle({
    [propertiesMap[mainSlice] as any]: detailKey as Border,
  });

  const contrastRatio = useMemo(() => {
    if (!borderColor || borderColor === 'none') {
      return 2;
    }
    return getContrast(borderColor, '#ffffff');
  }, [borderColor]);

  const innerCardStyle = useMemo(() => {
    if (mainSlice === 'borders') {
      return {
        border: detailKey,
      };
    }
    if (mainSlice === 'borderWidths') {
      return {
        borderWidth: detailKey,
        borderColor: filters?.colors || borderColor || 'var(--colors-dark)',
        borderStyle: filters?.borderStyles || 'var(--border-styles-solid)',
      };
    }
    if (mainSlice === 'borderStyles') {
      return {
        borderStyle: detailKey,
        borderColor: filters?.colors || borderColor || 'var(--colors-dark)',
        borderWidth: filters?.borderWidths || 'var(--border-widths-m)',
      };
    }
    return {};
  }, [
    borderColor,
    detailKey,
    filters?.borderStyles,
    filters?.borderWidths,
    filters?.colors,
    mainSlice,
  ]);

  return (
    <>
      <ListItemCard
        title={showTitle ? detailKey : ''}
        clickable={clickable}
        mode={contrastRatio < 1.95 ? 'dark' : 'light'}
        copyText={detailKey}
      >
        <Card
          style={
            {
              ...innerCardStyle,
              size: '100px',
            } as any
          }
        />
      </ListItemCard>
      {showValues && (
        <DetailLabel value={(style as any)[propertiesMap[mainSlice]]} />
      )}
    </>
  );
};
