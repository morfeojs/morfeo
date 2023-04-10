/**
 * This code has been taken from: https://github.com/hypervillain/ast-to-literal
 * and converted to TypeScript.
 * Thanks to the author [Hugo Villain](https://github.com/hypervillain)
 */
import * as t from '@babel/types';

const primitiveTypes = ['BooleanLiteral', 'StringLiteral', 'NumericLiteral'];

type ToJSOptions = {
  prefix?: string;
  resolveFunction?: (params: {
    key: string;
    path: string;
    node: t.ArrowFunctionExpression | t.FunctionExpression;
  }) => string;
};

export function toJS(node: t.Expression, options: ToJSOptions = {}): any {
  function computeProps(props: t.ObjectExpression['properties']) {
    return (props as any[]).reduce((acc, prop) => {
      const key = prop.key.name || prop.key.value;
      const path = options.prefix ? `${options.prefix}.${key}` : key;

      if (
        options.resolveFunction &&
        (t.isFunctionExpression(prop.value) ||
          t.isArrowFunctionExpression(prop.value))
      ) {
        return {
          ...acc,
          [key]: options.resolveFunction({
            key,
            path,
            node: prop.value,
          }),
        };
      }

      if (prop.type === 'SpreadElement') {
        return {
          ...acc,
          ...toJS(prop.argument, { ...options, prefix: path }),
        };
      }

      if (prop.type !== 'ObjectMethod') {
        const val = toJS(prop.value, { ...options, prefix: path });
        if (val !== undefined) {
          return {
            ...acc,
            [key]: val,
          };
        }
      }

      return acc;
    }, {});
  }

  if (primitiveTypes.includes(node.type)) {
    // @ts-expect-error
    return node.value;
  }

  // @ts-expect-error
  if (node.name === 'undefined' && !node.value) {
    return undefined;
  }

  if (t.isNullLiteral(node)) {
    return null;
  }

  if (t.isObjectExpression(node)) {
    return computeProps(node.properties);
  }

  if (t.isArrayExpression(node)) {
    return node.elements.reduce((acc, element) => {
      if (!element) {
        return acc;
      }

      return [
        ...acc,
        ...(element.type === 'SpreadElement'
          ? toJS(element.argument, options)
          : [toJS(element, options)]),
      ];
    }, [] as t.ArrayExpression[]);
  }
}
