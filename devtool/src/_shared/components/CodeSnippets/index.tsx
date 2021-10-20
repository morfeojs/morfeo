import React, { useMemo, useState, useCallback } from 'react';
import clsx from 'clsx';
import { Code } from '../Code';
import styles from './style.module.css';
import { ThemeKey } from '@morfeo/react';
import { getCodeSnippets } from './snippets';
import { t } from '../../utils';

type Props = {
  slice: ThemeKey;
  value: string;
  componentVariant?: string;
};

export const CodeSnippets: React.FC<Props> = ({
  slice,
  value,
  componentVariant,
}) => {
  const tabs = getCodeSnippets(slice, value, { variant: componentVariant });
  const [selected, setSelected] = useState(tabs[0] ? tabs[0].label : '');

  const getOnSelectTab = useCallback((label: string) => {
    return () => setSelected(label);
  }, []);

  const renderedHeaders = useMemo(() => {
    return tabs.map(({ label }) => (
      <div
        key={label}
        className={clsx(styles.tab, selected === label && styles.selected)}
        onClick={getOnSelectTab(label)}
      >
        <h3 className={clsx('morfeo-typography-h4', styles.tabLabel)}>
          {label}
        </h3>
      </div>
    ));
  }, [getOnSelectTab, selected, tabs]);

  const currentCode = useMemo(() => {
    const current = tabs.find(({ label }) => label === selected);
    if (!current) {
      return undefined;
    }
    return (
      <Code
        key={current.label}
        language={current.language}
        className={styles.code}
      >
        {current.code}
      </Code>
    );
  }, [selected, tabs]);

  return (
    <>
      <h1 className="morfeo-typography-h1">{t('sliceCodeTitle')}</h1>
      <div className={styles.header}>{renderedHeaders}</div>
      <div>{currentCode}</div>
    </>
  );
};
