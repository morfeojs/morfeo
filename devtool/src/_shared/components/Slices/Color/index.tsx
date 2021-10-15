import { paramCase } from 'change-case';
import React from 'react';
import { useRouter } from '../../../hooks/useRouter';
import { Code } from '../../Code';
import styles from './style.module.css';

export const ColorDetail: React.FC = () => {
  const { route } = useRouter();

  return (
    <div className={styles.container}>
      <Code>
        {`// Core API
morfeo.resolve({ bg: '${route.state?.detailKey}' });

// React
const style = useStyle({ bg: '${route.state?.detailKey}' });

// CSS
background-color: var(--colors-${paramCase(route.state?.detailKey || '')});
`}
      </Code>
    </div>
  );
};
