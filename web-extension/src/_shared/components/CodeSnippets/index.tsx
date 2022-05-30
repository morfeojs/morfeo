import React, { useMemo, useState, useCallback } from 'react';
import clsx from 'clsx';
import { Code } from '../Code';
import styles from './style.module.css';
import { ThemeKey } from '@morfeo/react';
import { getCodeSnippets } from './snippets';

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
        style={{ maxWidth: `${100 / tabs.length}%` }}
      >
        <p
          className={clsx('morfeo-typography-p1', styles.tabLabel)}
          title={label}
        >
          {label}
        </p>
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
      <div className={styles.header}>{renderedHeaders}</div>
      <div>{currentCode}</div>
    </>
  );
};
