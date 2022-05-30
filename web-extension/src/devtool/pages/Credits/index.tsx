import React, { useMemo } from 'react';
import { Page } from '../../../_shared/template/Page';
import { Grid, Item } from '../../../_shared/components';
import { PersonCard } from './PersonCard';
import { authors } from './people';
import { t } from '../../../_shared/utils';

export const Credits: React.FC = () => {
  const renderedSlices = useMemo(
    () =>
      authors.map(person => (
        <Item key={person.name}>
          <PersonCard person={person} />
        </Item>
      )),
    [],
  );

  return (
    <Page>
      <h1 className="morfeo-typography-h1 mb-m">{t('creditsTitle')}</h1>
      <h2 className="morfeo-typography-h2">{t('creditsAuthors')}</h2>
      <Grid>{renderedSlices}</Grid>
    </Page>
  );
};
