import { deepMerge } from '../../src/utils';

describe('deepMerge', () => {
  test('should deep merge objects', () => {
    const first = {
      name: 'John',
      surname: 'Doe',
      info: {
        age: 18,
      },
    };
    const second = {
      name: 'Not John',
      info: {
        birthday: '01/01/1970',
      },
    };

    const expected = {
      name: 'Not John',
      surname: 'Doe',
      info: {
        age: 18,
        birthday: '01/01/1970',
      },
    };

    expect(deepMerge(first, second as any)).toEqual(expected);
  });

  describe('when merging arrays', () => {
    test('should replace the old array with the new one', () => {
      const first = {
        arrayValue: [1, 2, 3],
      };
      const second = {
        arrayValue: [1, 2],
        anotherArray: [{ id: 1 }, { id: 2 }],
        nestedObject: {
          another: [1, 2],
        },
      };
      const expected = {
        arrayValue: [1, 2],
        anotherArray: [{ id: 1 }, { id: 2 }],
        nestedObject: {
          another: [1, 2],
        },
      };

      expect(deepMerge(first, second)).toEqual(expected);
    });
  });

  describe('when merging more the two objects', () => {
    test('should preserve the keys of every object', () => {
      const first = {
        object: {
          name: 'John',
        },
      };
      const second = {
        object: {
          surname: 'Doe',
        },
        info: {
          foo: 'bar',
        },
      };

      const third = {
        object: {
          surname: 'Smith',
        },
        info: {
          bar: 'foo',
        },
      };

      const expected = {
        object: {
          name: 'John',
          surname: 'Smith',
        },
        info: {
          foo: 'bar',
          bar: 'foo',
        },
      };

      expect(deepMerge(first, second as any, third)).toEqual(expected);
    });
  });

  describe('when merging invalid object', () => {
    test('should not override invalid values', () => {
      const first = {
        object: {
          name: 'John',
        },
      };
      const second = undefined;

      const third = undefined;

      const expected = {
        object: {
          name: 'John',
        },
      };

      expect(deepMerge(first, second as any, third)).toEqual(expected);
    });
  });
});
