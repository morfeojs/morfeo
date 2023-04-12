import { toJS } from '../src/utils';
import { Expression, ObjectExpression } from '@babel/types';

describe('toJS', () => {
  it('should convert a simple object expression into a valid js object', () => {
    const objectExpression: ObjectExpression = {
      type: 'ObjectExpression',
      name: 'whatever',
      properties: [
        {
          type: 'ObjectProperty',
          key: {
            type: 'StringLiteral',
            // @ts-expect-error
            name: 'string',
          },
          // @ts-expect-error
          value: {
            type: 'StringLiteral',
            value: 'string value',
          },
        },
      ],
    };
    const result = toJS(objectExpression);

    expect(result).toEqual({ string: 'string value' });
  });

  it('should convert a nested object expression into a valid js object', () => {
    const objectExpression: ObjectExpression = {
      type: 'ObjectExpression',
      name: 'whatever',
      properties: [
        {
          type: 'SpreadElement',
          key: {
            name: 'whatever',
          },
          // @ts-ignore
          argument: {
            type: 'ArrayExpression',
            elements: [
              // @ts-ignore
              {
                type: 'StringLiteral',
                value: 'value',
              },
            ],
          },
        },
      ],
    };
    const result = toJS(objectExpression);

    expect(result).toEqual({ '0': 'value' });
  });

  it('should not include a callback in the extracted object', () => {
    const objectExpression: ObjectExpression = {
      type: 'ObjectExpression',
      name: 'whatever',
      properties: [
        {
          type: 'ObjectProperty',
          key: {
            type: 'StringLiteral',
            // @ts-expect-error
            name: 'callback',
          },
          value: {
            // @ts-expect-error
            type: 'ObjectMethod',
          },
        },
      ],
    };
    const result = toJS(objectExpression);

    expect(result).toEqual({});
  });

  describe('for nullish or invalid values', () => {
    it('should return undefined for invalid properties', () => {
      const objectExpression: Expression = {
        // @ts-expect-error
        type: 'InvalidExpression',
        name: 'undefined',
      };
      const result = toJS(objectExpression);

      expect(result).not.toBeDefined();
    });

    it('should handle nullish values', () => {
      const objectExpression: Expression = {
        type: 'NullLiteral',
        // @ts-expect-error
        value: 'null',
      };
      const result = toJS(objectExpression);

      expect(result).toEqual(null);
    });

    it('should handle nullish array elements', () => {
      const objectExpression: Expression = {
        type: 'ArrayExpression',
        elements: [
          null,
          // @ts-expect-error
          {
            type: 'StringLiteral',
            value: 'string value',
          },
        ],
      };
      const result = toJS(objectExpression);

      expect(result).toEqual(['string value']);
    });

    it('should use the value as a name for the prop in case the name is missing', () => {
      const objectExpression: ObjectExpression = {
        type: 'ObjectExpression',
        name: 'whatever',
        properties: [
          {
            type: 'ObjectProperty',
            // @ts-expect-error
            key: {
              type: 'StringLiteral',
              value: 'string',
            },
            // @ts-expect-error
            value: {
              type: 'StringLiteral',
              value: 'string value',
            },
          },
        ],
      };
      const result = toJS(objectExpression);

      expect(result).toEqual({ string: 'string value' });
    });
  });

  describe('when there are spreaded element', () => {
    it('should convert the spread into an array', () => {
      const objectExpression: Expression = {
        type: 'ArrayExpression',
        elements: [
          {
            type: 'SpreadElement',
            argument: {
              type: 'ArrayExpression',
              elements: [
                // @ts-expect-error
                {
                  type: 'StringLiteral',
                  value: 'string value',
                },
              ],
            },
          },
        ],
      };
      const result = toJS(objectExpression);

      expect(result).toEqual(['string value']);
    });
  });

  it('should convert the spread into an object', () => {
    const objectExpression: ObjectExpression = {
      type: 'ObjectExpression',
      name: 'whatever',
      properties: [
        {
          type: 'SpreadElement',
          key: {
            name: 'whatever',
          },
          // @ts-ignore
          argument: {
            type: 'ObjectExpression',
            name: 'whatever',
            properties: [
              {
                type: 'ObjectProperty',
                key: {
                  type: 'StringLiteral',
                  // @ts-expect-error
                  name: 'string',
                },
                // @ts-expect-error
                value: {
                  type: 'StringLiteral',
                  value: 'string value',
                },
              },
            ],
          },
        },
      ],
    };
    const result = toJS(objectExpression);

    expect(result).toEqual({ string: 'string value' });
  });
});
