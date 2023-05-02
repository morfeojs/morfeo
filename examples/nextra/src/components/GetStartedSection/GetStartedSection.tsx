import { morfeo } from '@morfeo/css';
import { ButtonLink } from '../Button';

const classes = morfeo.css({
  container: {
    minH: '50vh',
    w: '100',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 'm',
    my: '3xl',
  },
  title: {
    componentName: 'Typography',
    variant: 'display',
    textAlign: 'center',
    lineHeight: 'none',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'l',
  },
  primaryButton: {
    componentName: 'Button',
    variant: 'primary',
  },
  secondaryButton: {
    componentName: 'Button',
    variant: 'outline',
  },
});

export const GetStartedSection: React.FC = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Join the revolution</h1>
      <div className={classes.buttonContainer}>
        <ButtonLink href="/docs">Start learning</ButtonLink>
        <ButtonLink href="https://github.com/morfeojs/morfeo" variant="outline">
          Github
        </ButtonLink>
      </div>
    </div>
  );
};
