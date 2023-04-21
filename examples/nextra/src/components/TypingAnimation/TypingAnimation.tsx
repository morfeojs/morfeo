import React from 'react';
import { css } from '@morfeo/css';
import { useTypingAnimation } from './useTypingAnimation';

const classes = css({
  text: {
    textGradient: 'text.primary',
    position: 'relative',
    '&::after': {
      content: '"|"',
      textGradient: 'text.primary',
      fontWeight: 'medium',
      fontSize: '4xl',
      animation: 'blink 1s alternate infinite',
    },
    '& a': {
      textDecoration: 'underline',
    },
  },
});

type Props = {
  words: string[];
};

export function TypingAnimation({ words = [] }: Props) {
  const typedReason = useTypingAnimation(words);
  return <span className={classes.text}>{typedReason}</span>;
}
