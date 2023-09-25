import { createMorfeo } from '../../src';

const morfeo = createMorfeo();

describe('resolvers', () => {
  test('should call a custom resolver if registered', () => {
    const resolver = jest.fn();
    const unsubscribe = morfeo.parsers.onResolveProperty(resolver);

    morfeo.theme.set({ colors: { primary: 'blue' } });

    morfeo.parsers.resolve({ color: 'primary' });

    expect(resolver).toHaveBeenCalledTimes(1);

    unsubscribe();
  });

  test('should call multiple resolvers in case none of them returns anything', () => {
    const resolvers = [jest.fn(), jest.fn()];
    const unsubscribers = resolvers.map(resolver =>
      morfeo.parsers.onResolveProperty(resolver),
    );

    morfeo.theme.set({ colors: { primary: 'blue' } });

    morfeo.parsers.resolve({ color: 'primary' });

    resolvers.forEach(resolver => {
      expect(resolver).toHaveBeenCalledTimes(1);
    });

    unsubscribers.forEach(unsubscribe => unsubscribe());
  });

  test('should not call additional resolvers in case one resolves the style', () => {
    const resolvers = [
      jest.fn(),
      jest.fn().mockReturnValue({
        color: 'resolved by the first resolver',
      }),
      jest.fn().mockReturnValue({
        color: 'resolved by another resolver',
      }),
    ];
    const unsubscribers = resolvers.map(resolver =>
      morfeo.parsers.onResolveProperty(resolver),
    );

    morfeo.theme.set({ colors: { primary: 'blue' } });

    const result = morfeo.parsers.resolve({ color: 'primary' });

    expect(result).toEqual({
      color: 'resolved by the first resolver',
    });

    expect(resolvers[0]).toHaveBeenCalledTimes(1);
    expect(resolvers[1]).toHaveBeenCalledTimes(1);
    expect(resolvers[2]).not.toHaveBeenCalled();

    unsubscribers.forEach(unsubscribe => unsubscribe());
  });

  test('should call a resolver that has been unregistered', () => {
    morfeo.theme.set({ colors: { primary: 'blue' } });

    const resolver = jest.fn();
    const unsubscribe = morfeo.parsers.onResolveProperty(resolver);

    morfeo.parsers.resolve({ color: 'primary' });

    expect(resolver).toHaveBeenCalledTimes(1);

    unsubscribe();

    morfeo.parsers.resolve({ color: 'primary' });

    expect(resolver).toHaveBeenCalledTimes(1);
  });

  test('should call again the resolvers when on calls the `next` property', () => {
    morfeo.theme.set({ colors: { primary: 'blue' } });

    const resolvers = [
      jest.fn().mockImplementation(({ value, next }) => {
        if (value === 'call next') {
          return next({ value: 'next called' });
        }
      }),
      jest.fn(),
    ];

    const unsubscribers = resolvers.map(resolver =>
      morfeo.parsers.onResolveProperty(resolver),
    );

    const result = morfeo.parsers.resolve({
      // @ts-ignore
      nextProp: 'call next',
    });

    expect(result).toEqual({
      nextProp: 'next called',
    });

    expect(resolvers[0]).toHaveBeenCalledTimes(2);
    expect(resolvers[1]).toHaveBeenCalledTimes(1);

    unsubscribers.forEach(unsubscribe => unsubscribe());
  });
});
