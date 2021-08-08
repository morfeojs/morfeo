import React from 'react';
import CodeBlock from '@theme/CodeBlock';

export function PrintTheme({ theme }) {
  const keys = Object.keys(theme);
  const sorted = keys.sort((first, second) => first.localeCompare(second));
  const sortedTheme = sorted.reduce(
    (acc, curr) => ({ ...acc, [curr]: theme[curr] }),
    {},
  );
  return (
    <CodeBlock lang="json">
      {JSON.stringify(sortedTheme, undefined, 2)}
    </CodeBlock>
  );
}
