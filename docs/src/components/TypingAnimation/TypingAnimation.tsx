import React from 'react';
import { morfeo } from 'src/morfeo.theme';
import { useTypingAnimation } from './useTypingAnimation';

const classes = morfeo.css({
  text: {
    textGradient: 'text.primary',
    position: 'relative',
    '&::after': {
      content: '"|"',
      position: 'absolute',
      textGradient: 'text.primary',
      fontWeight: 'medium',
      fontSize: {
        default: '3xl',
        sm: '4xl',
      },
      animation: 'blink 1s alternate infinite',
      transform: 'translateY(-5px)',
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
  return <span className={classes('text')}>{typedReason}</span>;
}
