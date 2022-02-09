import React from 'react';
import { morfeo } from '@morfeo/react';
import styles from './HowItWorks.module.css';
import { CodeSnippet } from '../CodeSnippet';
import { Section } from '../Section';

const exampleStyle = {
  bg: 'secondary',
  color: 'primary',
  corner: 's',
};

export function HowItWorks() {
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
    <Section title="How it works?">
      <div className={styles.row}>
        <CodeSnippet style={exampleTheme} label="set your theme" />
        <CodeSnippet
          style={exampleStyle}
          label="create styles based on the theme"
        />
        <CodeSnippet
          style={resultStyle}
          label="Morfeo will generate a valid CSS-in-JS"
        />
      </div>
    </Section>
  );
}
