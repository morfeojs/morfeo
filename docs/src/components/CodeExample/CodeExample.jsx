import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import { Section } from '../Section';

export function CodeExample() {
  return (
    <Section title="Try it now!">
      <blockquote>
        This is a React example but Morfeo can be used everywhere
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
  const [currentTheme, setCurrentTheme] = useCurrentTheme();

  const onClick = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
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
  );
}
