import { morfeo } from '@morfeo/css';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Card } from '../Card';
import clsx from 'clsx';
import Image from 'next/image';

const classes = morfeo.css({
  container: {
    minHeight: 'raw:300px',
  },
  content: {
    p: 's',
    display: 'flex',
    overflow: 'hidden',
    width: '100',
  },
  title: {
    componentName: 'Typography',
    variant: 'h2',
  },
  column: {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignContent: 'center',
    justifyContent: 'flex-end',
    '& img': {
      alignSelf: 'center',
    },
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 'low',
    '& img': {
      position: 'absolute',
      right: 'xs',
      top: 'xs',
      zIndex: 'lowest',
    },
  },
});

type FeatureCardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  title: string;
  variant?: 'row' | 'column';
  imageSrc: string;
};

export function FeatureCard({
  title,
  variant = 'column',
  imageSrc,
  ...props
}: FeatureCardProps) {
  return (
    <Card {...props} className={classes.container}>
      <div className={clsx(classes.content, classes[variant], props.className)}>
        <div>
          <span className={classes.title}>{title}</span>
          {props.children}
        </div>
        <Image
          src={imageSrc}
          alt={title}
          height={variant === 'column' ? 100 : 250}
          width={variant === 'column' ? 100 : 250}
        />
      </div>
    </Card>
  );
}
