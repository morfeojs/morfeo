function merge<T>(oldState: T, newState: T): T {
  if (typeof oldState !== typeof newState) {
    return newState || oldState;
  }

  if (Array.isArray(newState)) {
    return newState;
  }

  if (typeof newState !== 'object') {
    return newState;
  }

  const keys = Object.keys(newState);

  return keys.reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: merge((oldState as any)[curr], (newState as any)[curr]),
    }),
    oldState,
  );
}

export function deepMerge<T>(...objects: T[]): T {
  let merged = { ...objects[0] };
  for (let i = 1; i < objects.length; i += 1) {
    merged = merge(merged, objects[i]);
  }
  return merged;
}
