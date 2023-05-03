import { motion, MotionProps } from 'framer-motion';
import { PropsWithChildren, RefObject } from 'react';

type Props = {
  ref?: RefObject<HTMLDivElement>;
} & React.HTMLAttributes<HTMLDivElement> &
  MotionProps;

export const FadeInBox: React.FC<PropsWithChildren<Props>> = ({
  children,
  ...rest
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: '-35%', once: true }}
      transition={{ duration: 0.6 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
