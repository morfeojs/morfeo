/**
 * This code has been taken from: https://github.com/hypervillain/ast-to-literal
 * and converted to TypeScript.
 * Thanks to the author [Hugo Villain](https://github.com/hypervillain)
 */
import * as t from '@babel/types';

const primitiveTypes = ['BooleanLiteral', 'StringLiteral', 'NumericLiteral'];

export function toJS(node: t.Expression): any {
  function computeProps(props: t.ObjectExpression['properties']) {
    return (props as any[]).reduce((acc, prop) => {
      if (prop.type === 'SpreadElement') {
        return {
          ...acc,
          ...toJS(prop.argument),
        };
      }

      if (prop.type !== 'ObjectMethod') {
        const val = toJS(prop.value);
        if (val !== undefined) {
          return {
            ...acc,
            [prop.key.name || prop.key.value]: val,
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
          ? toJS(element.argument)
          : [toJS(element)]),
      ];
    }, [] as t.ArrayExpression[]);
  }
}
