import { useEffect, useState } from 'react';
import { TypingInterval, TypingStatus } from './constants';

export const useTypingAnimation = (words: string[]) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [typingStatus, setTypingStatus] = useState(TypingStatus.Typing);
  const [typedWord, setTypedWord] = useState(words[selectedIndex]);

  const text = words[selectedIndex];

  useEffect(() => {
    if (typingStatus === TypingStatus.Typing) {
      const nextTypedReason = text.slice(0, typedWord.length + 1);

      if (nextTypedReason === typedWord) {
        setTypingStatus(TypingStatus.Waiting);
        return;
      }

      const timeout = setTimeout(() => {
        setTypedWord(nextTypedReason);
      }, TypingInterval.Type);

      return () => clearTimeout(timeout);
    }

    if (typingStatus === TypingStatus.Erasing) {
      if (!typedWord) {
        const timeout = setTimeout(() => {
          setSelectedIndex((selectedIndex + 1) % words.length);
          setTypingStatus(TypingStatus.Typing);
        }, TypingInterval.Erase);

        return () => clearTimeout(timeout);
      }

      const nextRemainingReason = text.slice(0, typedWord.length - 1);

      const timeout = setTimeout(() => {
        setTypedWord(nextRemainingReason);
      }, TypingInterval.Type);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setTypingStatus(TypingStatus.Erasing);
    }, TypingInterval.Wait);

    return () => clearTimeout(timeout);
  }, [words, selectedIndex, text, typedWord, typingStatus]);

  return typedWord;
};
