import { css } from '@morfeo/css';
import { Card } from '../Card';

const classes = css({
  container: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    py: '4xl',
  },
  title: {
    componentName: 'Typography',
    variant: 'display',
    lineHeight: 'none',
    color: 'gray.lightest',
    mb: 's',
    '& span': {
      textGradient: 'text.primary',
    },
  },
  inner: {
    display: 'flex',
    gap: 's',
    width: '100',
    pt: 'l',
  },
  cards: {
    display: 'flex',
    flexDirection: 'column',
    gap: 's',
    flex: '1',
  },
  card: {
    cursor: 'pointer',
    p: 'm',
  },
  preview: {
    flex: '1',
  },
});

export function HowItWorks() {
  return (
    <section className={classes.container}>
      <h2 className={classes.title}>
        How it <span>Works</span>
      </h2>
      <div className={classes.inner}>
        <div className={classes.cards}>
          <Card className={classes.card}>Set your theme</Card>
          <Card className={classes.card}>Style your components</Card>
          <Card className={classes.card}>Enjoy</Card>
        </div>
        <Card className={classes.preview} />
      </div>
    </section>
  );
}
