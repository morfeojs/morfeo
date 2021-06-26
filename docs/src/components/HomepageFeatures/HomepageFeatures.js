import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import { theme, parsers } from '@morfeo/react';
import styles from './HomepageFeatures.module.css';

const exampleStyle = {
  bg: 'secondary',
  color: 'primary',
  borderRadius: 's',
};

const exampleTheme = {
  colors: {
    primary: '#fefefe',
    secondary: '#fff',
  },
  radii: {
    s: '10px',
  },
};

theme.set(exampleTheme);
const resultStyle = parsers.resolve(exampleStyle);

export function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.row}>
          <p className={styles.description}>
            Morfeo it's a tool to build design systems based on a theme. It
            helps you to <i>follow a design language</i> and write consistent
            UIs, whatever it is the framework of your choice. It's easy to use
            and, with the
            <strong> browser extension</strong>, your theme and your components
            are automatically documented.
          </p>
          <div className={styles.preview}>
            <div className={styles.codeContainer}>
              <CodeBlock className={styles.code}>
                {JSON.stringify(exampleTheme, undefined, 2)}
              </CodeBlock>
              <span>a theme: your design language</span>
            </div>

            <div className={styles.codeContainer}>
              <CodeBlock className={styles.code}>
                {JSON.stringify(exampleStyle, undefined, 2)}
              </CodeBlock>
              <span>a style based on the theme</span>
            </div>

            <div className={styles.codeContainer}>
              <CodeBlock className={styles.code}>
                {JSON.stringify(resultStyle, undefined, 2)}
              </CodeBlock>
              <span>a valid CSS-in-JS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
