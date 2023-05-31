import { morfeo } from '@morfeo/css';
import Image from 'next/image';
import clsx from 'clsx';
import { PlaygroundTemplate } from './types';

type Props = {
  handleTemplateChange: (template: PlaygroundTemplate) => void;
  playgroundTemplateList: PlaygroundTemplate[];
  selectedTemplate: PlaygroundTemplate;
};

const classes = morfeo.css({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 's',
    mt: 'm',
    flexWrap: 'wrap',
  },
  templateTab: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2xs',
    px: 'xs',
    py: '2xs',
    corner: '2xs',
    borderWidth: 's',
    borderColor: 'gray.dark',
    transition: 'fast',
    cursor: 'pointer',
  },
  active: {
    borderColor: 'primary.lightest',
  },
  label: {
    componentName: 'Typography',
    variant: 'body',
    color: 'gray.lighter',
    '&.active': {
      color: 'primary',
    },
  },
});

const templateLogoMap: Record<PlaygroundTemplate, string> = {
  nextjs: '/next_logo.png',
  'vite-react-ts': '/vite_logo.png',
};

const templateLabelMap: Record<PlaygroundTemplate, string> = {
  nextjs: 'Next.js',
  'vite-react-ts': 'Vite + React',
};

export const PlaygroundTemplateList: React.FC<Props> = ({
  handleTemplateChange,
  playgroundTemplateList,
  selectedTemplate,
}) => {
  return (
    <div className={classes.container}>
      {playgroundTemplateList.map(template => {
        return (
          <div
            className={clsx(
              classes.templateTab,
              selectedTemplate === template && classes.active,
            )}
            key={template}
            onClick={() => handleTemplateChange(template)}
          >
            <Image
              src={templateLogoMap[template]}
              width={30}
              height={30}
              alt={`${template} logo`}
            />
            <h3 className={classes.label}>{templateLabelMap[template]}</h3>
          </div>
        );
      })}
    </div>
  );
};
