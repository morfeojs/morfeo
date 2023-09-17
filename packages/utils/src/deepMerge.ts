export function deepMerge<T extends object[]>(
  ...objects: T
): ArrayOfObjectsToObject<T> {
  return objects.reduce<any>((acc, curr) => merge(acc, curr), {});
}

function merge<T>(oldState: T, newState?: T): T {
  if (typeof oldState !== typeof newState) {
    return newState ?? oldState;
  }

  if (Array.isArray(newState)) {
    return newState as T;
  }

  if (typeof newState !== 'object') {
    return newState as T;
  }

  const keys = Object.keys(newState as object);

  return keys.reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: merge((oldState as any)[curr], (newState as any)[curr]),
    }),
    oldState,
  );
}

type ArrayOfObjectsToObject<
  A extends object[],
  Acc extends Record<string, unknown> = {},
> = A extends [
  infer T extends Record<string, unknown>,
  ...infer Rest extends Record<string, unknown>[],
]
  ? ArrayOfObjectsToObject<Rest, Acc & T>
  : Acc;
