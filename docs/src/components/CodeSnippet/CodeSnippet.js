import React, { useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock';

import styles from './CodeSnippet.module.css';

export function CodeSnippet({ style, label }) {
  return (
    <div className={styles.container}>
      <CodeBlock lang="json" className={styles.code}>
        {JSON.stringify(style, undefined, 2)}
      </CodeBlock>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
