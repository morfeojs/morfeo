import { useEffect, useState } from 'react';

function getMatches(query: string): boolean {
  if (typeof window !== 'undefined') {
    return window.matchMedia(query).matches;
  }
  return false;
}

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => getMatches(query));

  useEffect(() => {
    function handleChange() {
      setMatches(getMatches(query));
    }

    const matchMedia = window.matchMedia(query);

    handleChange();

    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}
