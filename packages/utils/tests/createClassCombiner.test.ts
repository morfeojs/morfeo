import { createClassCombiner } from '../src';

describe('createClassCombiner', () => {
  test('should combine the classes objects and return a string containing the classes in the leafs', () => {
    const combineClasses = createClassCombiner({});
    expect(
      combineClasses({ p: 'p-m' }, { bg: { md: 'bg-md-primary' } }),
    ).toEqual('p-m bg-md-primary');
  });

  test('should combine classes objects and plain strings', () => {
    const combineClasses = createClassCombiner({});
    expect(combineClasses({ p: 'p-m' }, 'className')).toEqual('className p-m');
  });

  test('should override properties while combining classes ot always have one class for a property', () => {
    const combineClasses = createClassCombiner({});
    expect(combineClasses({ p: 'p-m' }, { p: 'p-s' })).toEqual('p-s');
  });

  test('should skip falsy classes', () => {
    const combineClasses = createClassCombiner({});
    expect(
      combineClasses({ p: 'p-m' }, 'className', false, null, undefined),
    ).toEqual('className p-m');
  });

  test('should use the values of the object passed to createClassCombiner in case the string is a key of that object', () => {
    const combineClasses = createClassCombiner({
      objectKey: 'objectValue',
    });
    expect(combineClasses('objectKey')).toEqual('objectValue');
  });
});
