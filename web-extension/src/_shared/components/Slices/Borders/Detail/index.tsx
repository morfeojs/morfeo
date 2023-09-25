import React, { useMemo, useState, useCallback } from 'react';
import { useRouter } from '../../../../hooks';
import { RouteState } from '../../../../contexts';
import { BorderCard } from '../BorderCard/BorderCard';
import styles from './style.module.css';
import { BorderSlice } from '../index';
import { capitalCase, noCase } from 'change-case';
import { DropDown } from '../../../DropDown';
import { Grid, Item } from '../../../Grid';
import { useMorfeo } from '@morfeo/react';

export type Props = {
  mainSlice: BorderSlice;
};

const dropDownsMap = {
  borders: [],
  borderStyles: ['borderWidths', 'colors'] as const,
  borderWidths: ['borderStyles', 'colors'] as const,
};

export const Detail: React.FC<Props> = ({ mainSlice }) => {
  const morfeo = useMorfeo();
  const [filters, setFilters] = useState({
    borderStyles: '',
    borderWidths: '',
    colors: '',
  });

  const { route } = useRouter();
  const { state = {} as RouteState } = route;
  const { detailKey } = state;

  const onChangeFilter = useCallback(
    (slice: BorderSlice | 'colors', value: string) => {
      setFilters(state => ({
        ...state,
        [slice]: value,
      }));
    },
    [],
  );

  const dropdowns = useMemo(() => {
    return dropDownsMap[mainSlice].map(slice => {
      const title = capitalCase(noCase(slice));
      const values = morfeo.theme.getSlice(slice);
      const options = Object.keys(values || {}).map(option => ({
        label: capitalCase(noCase(option)),
        value: option,
      }));

      return (
        <Item key={slice}>
          <DropDown
            value={filters[slice]}
            title={title}
            options={options}
            onChange={value => onChangeFilter(slice, value)}
            inverted
            placeholder={slice}
          />
        </Item>
      );
    });
  }, [filters, mainSlice, onChangeFilter]);

  return (
    <>
      <Grid>{dropdowns}</Grid>
      <div className={styles.container}>
        <BorderCard
          filters={filters}
          mainSlice={mainSlice}
          detailKey={detailKey as string}
          showValues
        />
      </div>
    </>
  );
};
