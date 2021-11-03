import React from 'react';
import { morfeo } from '@morfeo/react';
import styles from './HomepageFeatures.module.css';
import { CodeSnippet } from '../CodeSnippet';

const exampleStyle = {
  bg: 'secondary',
  color: 'primary',
  corner: 's',
};

export function HomepageFeatures() {
  const exampleTheme = {
    colors: {
      primary: morfeo.getTheme().colors.primary,
      secondary: morfeo.getTheme().colors.secondary,
    },
    radii: {
      s: morfeo.getTheme().radii.s,
    },
  };

  const resultStyle = morfeo.resolve(exampleStyle);
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.row}>
          <p className={styles.description}>
            Morfeo it's a tool to build design systems based on a theme. It
            helps you to <i>follow a design language</i> and write consistent
            UIs, whatever it is the framework of your choice. It's easy to use
            and, with the
            <a href="/docs/Features/web-extension">
              <strong> browser extension</strong>
            </a>
            , your theme and your components are automatically documented.
          </p>
          <div className={styles.preview}>
            <CodeSnippet
              style={exampleTheme}
              label="a theme: your design language"
            />
            <CodeSnippet
              style={exampleStyle}
              label="a style based on the theme"
            />
            <CodeSnippet style={resultStyle} label="a valid CSS-in-JS" />
          </div>
        </div>
      </div>
    </section>
  );
}
