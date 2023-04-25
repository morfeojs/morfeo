import { morfeo } from '@morfeo/css';

const classes = morfeo.css({
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
    width: '100',
    mt: 'l',
    overflow: 'hidden',
    position: 'relative',
    py: 'l',
    textAlign: 'left',
  },
  runtime: {
    flex: '1',
    bg: 'gray.darkest',
  },
  buildtime: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',

    bg: 'gray.darkest',
  },
  css: {
    flex: '1',
  },
  js: {
    flex: '1',
  },
  separator: {
    position: 'absolute',
    width: '2xs',
    height: 'raw:calc(100% + 4rem)',
    gradient: 'primary',
    top: 'raw:50%',
    left: 'raw:50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 'high',
  },
});

export function BuildTime() {
  return (
    <section className={classes.container}>
      <h2 className={classes.title}>
        Build Time, <span>Everywhere</span>
      </h2>
      <div className={classes.inner}>
        <div className={classes.runtime}>
          <pre>
            {`
import { morfeo } from "@morfeo/css";

const classes = morfeo.css({
  button: {
    bg: 'primary',
    corner: 'm',
    px: 'l'
  }
});

function Button() {
  return <button className={classes.button}>Click me</button>
}`}
          </pre>
        </div>
        <div className={classes.buildtime}>
          <div className={classes.css}>
            <pre>{`
.bg-primary: {
  background-color: #0066ff;
}

.corner-m: {
  border-radius: 12px;
}

.px-l: {
  padding-left: 24px;
  padding-right: 24px;
} 
`}</pre>
          </div>
          <div className={classes.separator} />
        </div>
      </div>
    </section>
  );
}
