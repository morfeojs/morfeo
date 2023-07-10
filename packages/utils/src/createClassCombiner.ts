import { deepMerge } from './deepMerge';

type ClassObject = {
  [K: string]: string | ClassObject;
};

function traverse(classObject: ClassObject): string {
  const keys = Object.keys(classObject);

  return keys.reduce((acc, curr) => {
    let value = classObject[curr];
    if (typeof value !== 'string') {
      value = traverse(value);
    }

    return acc ? `${acc} ${value}` : value;
  }, '');
}

export function createClassCombiner<C extends ClassObject>(classObject: C) {
  function combineClasses(
    ...classesOrObjects: (
      | ClassObject
      | keyof C
      // eslint-disable-next-line @typescript-eslint/ban-types
      | (string & {})
      | undefined
      | null
      | boolean
    )[]
  ): string {
    const [className, mergedClassObject] = (
      classesOrObjects as (string | ClassObject)[]
    ).reduce<[string, ClassObject]>(
      ([classes, object], curr) => {
        if (!curr) {
          return [classes, object];
        }

        const value =
          typeof curr === 'string' ? classObject[curr] || curr : curr;

        if (typeof value === 'string') {
          return [`${classes} ${value}`, object];
        }

        return [classes, deepMerge(object, value)];
      },
      ['', {}],
    );

    return `${className} ${traverse(mergedClassObject)}`.trim();
  }

  return Object.assign(combineClasses, classObject);
}
