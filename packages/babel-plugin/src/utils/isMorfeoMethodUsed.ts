import type { NodePath } from '@babel/traverse';
import type { CallExpression } from '@babel/types';

export function isMorfeoMethodUsed(
  path: NodePath<CallExpression>,
  method: string,
) {
  const { callee } = path.node;

  // @ts-ignore
  return callee?.object?.name === 'morfeo' && callee.property.name === method;
}
