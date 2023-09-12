import React, { useState, useCallback, useMemo } from 'react';
import { morfeo, useStyle, useThemeSlice, Font } from '@morfeo/react';
import { capitalCase, noCase, paramCase } from 'change-case';
import clsx from 'clsx';
import { Card } from '../../../Card';
import { useRouter } from '../../../../hooks';
import { RouteState } from '../../../../contexts';
import styles from './style.module.css';
import { Input } from '../../../Input';
import { DropDown } from '../../../DropDown';
import { t } from '../../../../utils';
import { DetailLabel } from '../../_shared/DetailLabel';

const fontSlices = [
  'fonts',
  'fontSizes',
  'fontWeights',
  'letterSpacings',
  'lineHeights',
] as const;

export const propertiesMap = {
  fonts: 'fontFamily',
  fontSizes: 'fontSize',
  fontWeights: 'fontWeight',
  letterSpacings: 'letterSpacing',
  lineHeights: 'lineHeight',
};

type FontSlice = (typeof fontSlices)[number];

type Props = {
  main?: FontSlice;
};

type FiltersState = Record<FontSlice, string>;

const MAX_LENGTH = 20;

export const Detail: React.FC<Props> = ({ main = 'fonts' }) => {
  const { route } = useRouter();
  const [text, setText] = useState('Lorem ipsum');
  const [filtersState, setFiltersState] = useState<Record<FontSlice, string>>(
    {} as FiltersState,
  );
  const { state = {} as RouteState } = route;
  const { detailKey } = state;
  const themeFonts = useThemeSlice('fonts');

  const firstFont = useMemo(() => {
    const fontArray = Object.keys(themeFonts || {});
    return fontArray[0] as Font;
  }, [themeFonts]);

  const filteredFontSlices = useMemo(
    () => fontSlices.filter(slice => slice !== main),
    [main],
  );
  const style = {
    [propertiesMap[main]]: detailKey,
    ...filteredFontSlices.reduce((acc, curr) => {
      if (filtersState[curr]) {
        return {
          ...acc,
          [propertiesMap[curr]]: filtersState[curr],
        };
      }

      return acc;
    }, {}),
    ...(firstFont && main !== 'fonts' && { fontFamily: firstFont as Font }),
  };
  const fontStyle = useStyle(style);

  const onChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const newText = (e.currentTarget.value || '').slice(-MAX_LENGTH);
    setText(newText);
  }, []);

  const onChangeFilter = useCallback((fontSlice: FontSlice) => {
    return (value: string) =>
      setFiltersState(prev => ({ ...prev, [fontSlice]: value }));
  }, []);

  const dropdowns = useMemo(
    () =>
      filteredFontSlices.map(slice => {
        const title = capitalCase(noCase(slice));
        const values = morfeo.theme.getSlice(slice);
        const options = Object.keys(values || {}).map(option => ({
          label: capitalCase(noCase(option)),
          value: option,
        }));

        return (
          <DropDown
            key={slice}
            title={title}
            inverted
            placeholder={slice}
            value={filtersState[slice]}
            options={options}
            onChange={onChangeFilter(slice)}
          />
        );
      }),
    [filteredFontSlices, filtersState, onChangeFilter],
  );

  return (
    <div className={styles.container}>
      <div className={styles.filtersContainer}>
        <div>
          <Input
            value={text}
            label={t('fontsDetailInputLabel')}
            onChange={onChange}
            className={clsx('mb-s', styles.input)}
          />
        </div>
        <div className={styles.dropdownsContainer}>{dropdowns}</div>
      </div>
      <Card
        className="morfeo-card-primary"
        style={{ height: 'fit-content', py: 'm' } as any}
      >
        <p className={styles.text} title={detailKey} style={fontStyle as any}>
          {text}
        </p>
        <p className={styles.text} title={detailKey} style={fontStyle as any}>
          {text}
        </p>
      </Card>
      <DetailLabel
        label={paramCase(propertiesMap[main])}
        value={(fontStyle as any)[propertiesMap[main]]}
      />
    </div>
  );
};
