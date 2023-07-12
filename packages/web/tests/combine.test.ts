import { combine, createClassCombiner } from '../src';

describe('combine', () => {
  test('should combine strings and class objects', () => {
    const className = combine({ key: 'leaf #1' }, 'plain string', {
      firstLevel: {
        secondLevel: 'leaf #2',
      },
    });

    expect(className).toBe('plain string leaf #1 leaf #2');
  });

  test('should create a custom combiner', () => {
    const customCombiner = createClassCombiner({ key: 'leaf #1' });
    const className = customCombiner('key', {
      firstLevel: {
        secondLevel: 'leaf #2',
      },
    });

    expect(className).toBe('leaf #1 leaf #2');
  });
});
