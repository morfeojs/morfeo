import type { NodePath } from '@babel/traverse';
import type { CallExpression } from '@babel/types';
import { AVAILABLE_MORFEO_METHODS } from '../constants';

export function getUsedMorfeoMethod(path: NodePath<CallExpression>) {
  const { callee } = path.node;

  const usedMethod = AVAILABLE_MORFEO_METHODS.find(method => {
    // @ts-ignore
    return callee?.object?.name === 'morfeo' && callee.property.name === method;
  });

  return usedMethod;
}
