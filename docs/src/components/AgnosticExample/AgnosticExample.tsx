import { Tabs } from 'nextra-theme-docs';
import JSXExample from './jsx.mdx';
import CSSExample from './css.mdx';

export function AgnosticExample() {
  return (
    <Tabs items={['JSX', 'Generated CSS']}>
      <Tabs.Tab>
        <JSXExample />
      </Tabs.Tab>
      <Tabs.Tab>
        <CSSExample />
      </Tabs.Tab>
    </Tabs>
  );
}
