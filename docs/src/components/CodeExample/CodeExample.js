import React from 'react';
import { morfeo } from '@morfeo/react';
import styles from './CodeExample.module.css';
import { CodeSnippet } from '../CodeSnippet';
import CodeBlock from '@theme/CodeBlock';
import { Section } from '../Section';

const exampleStyle = {
  bg: 'secondary',
  color: 'primary',
  corner: 's',
};

export function CodeExample() {
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
    <div>
      <Section title="How it works?">
        <div className={styles.row}>
          <div className={styles.preview}>
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
        </div>
      </Section>
      <Section title="Try it now!">
        <blockquote>
          This is a React example but Morfeo ban be used everywhere
        </blockquote>
        <CodeBlock language="jsx" live title="/src/ShowTheme.js">
          {`function Button() {
  const { cardClass, buttonClass } = useClassNames({
    cardClass: {
      componentName: 'Card',
      variant: 'hoverable',
      p: 'm',
    },
    buttonClass: {
      componentName: 'Button',
      variant: 'primary',
    }
  });

  const onClick = () => {
    const current = morfeo.getCurrent();
    morfeo.useTheme(current === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={cardClass}>
      It's that easy...
      <button className={buttonClass} onClick={onClick}>
        Toggle theme
      </button>
    </div>
  )
}`}
        </CodeBlock>
      </Section>
    </div>
  );
}
