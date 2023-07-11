import { SandpackFiles } from '@codesandbox/sandpack-react/types';
import { globalStyle, morfeoTheme, socialComponent } from './globalFiles';

const viteIndex = `import { morfeo } from '@morfeo/css';
import { Socials } from "./src/components/Socials";

const classes = morfeo.css({
  container: {
    w: '100',
    h: '100vh',
    bg: 'raw:#091929',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    w: 'raw:350px',
    h: 'raw:450px',
    bg: 'raw:#001E3C',
    borderWidth: '2xs',
    borderColor: 'raw:#0F4C81',
    borderRadius: 'xl',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    p: 'xl',
  },
  imageCover: {
    w: 'raw:150px',
    h: 'raw:150px',
    borderRadius: 'round',
    overflow: 'hidden',
    mb: 'xs',
    '& img': {
      w: '100',
      h: '100',
      objectFit: 'cover',
    },
  },
  title: {
    componentName: 'Typography',
    variant: 'h1',
    color: 'white',
  },
  subTitle: {
    componentName: 'Typography',
    variant: 'paragraph',
    color: 'gray.lighter',
  },
  button: {
    componentName: 'Button',
    variant: 'primary',
    w: '100',
    fontWeight: 'regular',
  },
});


export default function App() {
  return (
    <div className={classes('container')}>
      <div className={classes('card')}>
        <div className={classes('imageCover')}>
          <img
            src="https://plus.unsplash.com/premium_photo-1668443421470-81e4efc29bf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="girl portrait"
          />
        </div>
        <h2 className={classes('title')}>Katy Perdy</h2>
        <p className={classes('subTitle')}>Ux Designer</p>
        <Socials />
        <button className={classes('button')}>Follow</button>
      </div>
    </div>
  );
}
`;

const viteConfig = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { MorfeoVitePlugin } from '@morfeo/compiler';
import docsTheme from './morfeo.theme';
import {darkTheme} from '@morfeo/preset-default';
import {deepMerge} from '@morfeo/utils';
import {morfeo} from '@morfeo/web';

morfeo.setTheme("default", deepMerge(darkTheme, docsTheme));

export default defineConfig({
  plugins: [react(), MorfeoVitePlugin()],
});`;

export const viteFiles: SandpackFiles = {
  'App.tsx': viteIndex,
  'vite.config.ts': viteConfig,
  'components/Socials.tsx': socialComponent,
  'styles.css': {
    code: globalStyle,
    hidden: true,
  },
  'morfeo.theme.js': {
    code: morfeoTheme,
    readOnly: true,
  },
};
