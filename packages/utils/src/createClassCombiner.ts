import { deepMerge } from './deepMerge';

export type ClassObject<K extends string = string> = {
  [Key in K]: string | ClassObject;
};

function getLeafs(classObject: ClassObject): string {
  const keys = Object.keys(classObject);

  return keys.reduce((acc, curr) => {
    let value = classObject[curr];
    if (typeof value !== 'string') {
      value = getLeafs(value);
    }

    return acc ? `${acc} ${value}` : value;
  }, '');
}

export function createClassCombiner<C extends ClassObject>(classObject: C) {
  return function combineClasses(
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

    return `${className} ${getLeafs(mergedClassObject)}`.trim();
  };
}
