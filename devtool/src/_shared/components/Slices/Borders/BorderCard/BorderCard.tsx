import { useMemo } from 'react';
import { useStyle, useThemeValue, Border, Color, Size } from '@morfeo/react';
import { getContrast } from 'polished';
import { Card } from '../../../Card';
import { Props as DetailProps } from '../Detail'

export type Props = {
  clickable?: boolean;
  detailKey: string;
  showValues?: boolean;
  mainSlice: DetailProps['mainSlice'];
  filters?: Record<'borderWidths' | 'borderStyles' | 'colors', string>
};

export const BorderCard: React.FC<Props> = ({
  clickable,
  detailKey,
  showValues,
  mainSlice,
  filters,
}) => {
  const isBorders = mainSlice === 'borders';
  const themeValue = useThemeValue(mainSlice, detailKey as any);
  const borderColor = useThemeValue('colors', (isBorders ? themeValue.color : filters?.colors || '') as Color);
  const style = useStyle({
    border: detailKey as Border,
  });

  const contrastRatio = useMemo(() => {
    if (!borderColor || borderColor === 'none') {
      return 2;
    }
    return getContrast(borderColor || '#000000' as string, '#ffffff');
  }, [borderColor]);

  const innerCardStyle = useMemo(() => {
    if (mainSlice === 'borders') {
      return {
        border: detailKey
      }
    }
    if (mainSlice === 'borderWidths') {
      return {
        borderWidth: detailKey,
        borderColor: filters?.colors || borderColor || 'var(--colors-dark)',
        borderStyle: filters?.borderStyles || 'var(--border-styles-solid)'
      }
    }
    if (mainSlice === 'borderStyles') {
      return {
        borderStyle: detailKey,
        borderColor: filters?.colors || borderColor || 'var(--colors-dark)',
        borderWidth: filters?.borderWidths || 'var(--border-widths-m)'
      }
    }
    return {}
  }, [borderColor, detailKey, filters?.borderStyles, filters?.borderWidths, filters?.colors, mainSlice]) 

  return (
    <>
      <Card
        className={`${
          clickable ? 'morfeo-card-primary-clickable' : 'morfeo-card-primary'
        } ${contrastRatio < 1.95 ? 'bg-black' : 'bg-white'}`}
      >
        <Card
          style={
            {
              ...innerCardStyle,
              size: '100%',
            } as any
          }
        />
      </Card>
      {showValues && (
        <h5 className="morfeo-typography-h5">
          <span className="font-weight-bold">Value: </span>
          {style.border}
        </h5>
      )}
    </>
  );
};
