import { motion, MotionProps } from 'framer-motion';
import { PropsWithChildren, ReactNode, RefObject } from 'react';
import { morfeo } from '@morfeo/css';

type Props = {
  ref?: RefObject<HTMLDivElement>;
} & React.HTMLAttributes<HTMLDivElement> &
  MotionProps & {
    title?: string | ReactNode;
  };

const classes = morfeo.css({
  container: {
    width: '100',
    mb: '4xl',
  },
  title: {
    componentName: 'Typography',
    variant: 'display',
    color: 'gray.lightest',
    fontSize: '3xl',
    lineHeight: 'none',
    mb: 's',
    maxW: 'raw:800px',
    '& .accent': {
      color: 'primary',
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
  },
  caption: {
    componentName: 'Typography',
    variant: 'p',
    w: '100',
    maxW: 'raw:800px',
    textAlign: 'center',
    '& .line-through': {
      textDecoration: 'line-through',
    },
    '& .gradient': {
      textGradient: 'accentToPrimary',
      fontWeight: 'bold',
    },
  },
});

type SectionTitleProps = {
  children?: ReactNode;
};

function Title({ children }: SectionTitleProps) {
  return <h2 className={classes('title')}>{children}</h2>;
}

function Caption({ children }: SectionTitleProps) {
  return <p className={classes('caption')}>{children}</p>;
}

export function FadeInBox({
  children,
  className,
  ...rest
}: PropsWithChildren<Props>) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: '-35%', once: true }}
      transition={{ duration: 0.6 }}
      className={classes('container', className)}
      {...rest}
    >
      {children}
    </motion.section>
  );
}

FadeInBox.Title = Title;
FadeInBox.Caption = Caption;
