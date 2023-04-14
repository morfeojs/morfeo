import type { Visitor } from '@babel/traverse';
import {
  isCreateUseStyle,
  createUseStyleVisitor,
} from './visitors/createUseStyle';

export default function getVisitor(): Visitor {
  return {
    ImportDeclaration(path) {
      if (path.node.source.value !== '@morfeo/css') {
        return path.skip();
      }

      path.remove();
    },
    CallExpression: {
      enter(callExpressionPath, state: any) {
        if (isCreateUseStyle(callExpressionPath)) {
          createUseStyleVisitor(callExpressionPath, state);
        }
      },
    },
  };
}
