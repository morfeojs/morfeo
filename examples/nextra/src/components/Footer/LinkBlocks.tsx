import { morfeo } from '@morfeo/css';
import { FooterLinkBlock } from './types';

type Props = {
  linkBlockList: FooterLinkBlock[];
};

const classes = morfeo.css({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: {
      default: 'space-between',
      sm: 'center',
    },
    gap: {
      default: 'l',
      sm: 'raw:12rem',
    },
  },
  blockTitle: {
    componentName: 'Typography',
    variant: 'h3',
    mb: '2xs',
  },
  linksList: {
    '& li:not(:last-child)': {
      mb: '3xs',
    },
  },
  link: {
    transition: 'fast',
    '&:hover': {
      color: 'white',
    },
  },
});

export const LinkBlocks: React.FC<Props> = ({ linkBlockList }) => {
  return (
    <div className={classes('container')}>
      {linkBlockList.map(linkBlock => (
        <div key={linkBlock.title}>
          <h3 className={classes('blockTitle')}>{linkBlock.title}</h3>
          <ul className={classes('linksList')}>
            {linkBlock.linkList.map(({ href, label, newTab }) => (
              <li key={label} className={classes('link')}>
                <a href={href} target={newTab ? '_blank' : undefined}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
