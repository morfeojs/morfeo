import { morfeo } from 'src/morfeo.theme';
import { Sandpack } from '@codesandbox/sandpack-react';
import { nightOwl } from '@codesandbox/sandpack-themes';
import { playgroundFiles } from './playgroundFiles';
import { useMemo, useState } from 'react';
import { PlaygroundTemplateList } from './TemplateList';
import { PlaygroundTemplate } from './types';
import { FadeInBox } from '../FadeInBox';

const classes = morfeo.css({
  container: {
    minH: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 'xl',
  },
  textContainer: {
    maxW: 'raw:800px',
    textAlign: 'center',
  },
  wrapper: {
    w: '100',
  },
  editor: {
    h: 'raw:700px',
  },
});

export const PlaygroundSection: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] =
    useState<PlaygroundTemplate>('nextjs');

  function handleTemplateChange(template: PlaygroundTemplate) {
    setSelectedTemplate(template);
  }

  const playgroundTemplateList: PlaygroundTemplate[] = [
    'nextjs',
    'vite-react-ts',
  ];

  const selectedTemplateFiles = useMemo(
    () => playgroundFiles[selectedTemplate],
    [selectedTemplate],
  );

  return (
    <FadeInBox className={classes('container')}>
      <div className={classes('textContainer')}>
        <FadeInBox.Title>
          Landing <span className="accent">playground</span>
        </FadeInBox.Title>
        <FadeInBox.Caption>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolor
          sapiente autem libero, esse inventore consequatur officia laboriosam
          itaque beatae quis id suscipit vero vel adipisci blanditiis cumque
        </FadeInBox.Caption>
        <PlaygroundTemplateList
          playgroundTemplateList={playgroundTemplateList}
          handleTemplateChange={handleTemplateChange}
          selectedTemplate={selectedTemplate}
        />
      </div>
      <div className={classes('wrapper')}>
        <Sandpack
          template={selectedTemplate}
          theme={nightOwl}
          options={{
            editorHeight: 580,
            autoReload: true,
            autorun: true,
          }}
          files={selectedTemplateFiles}
          customSetup={{
            dependencies: {
              '@morfeo/react': 'latest',
              '@morfeo/next': 'latest',
              '@morfeo/preset-default': 'latest',
              '@morfeo/utils': 'latest',
              '@types/react-dom': '18.2.4',
              '@babel/core': 'latest',
              tslib: 'latest',
              '@morfeo/compiler': 'latest',
            },
          }}
        />
      </div>
    </FadeInBox>
  );
};
