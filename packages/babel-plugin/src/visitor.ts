import type { Visitor } from '@babel/traverse';
import {
  createUseClassesVisitor,
  isCreateUseClasses,
} from './visitors/createUseClasses';
import {
  createUseComponentVisitor,
  isCreateUseComponent,
} from './visitors/createUseComponent';

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
        if (isCreateUseClasses(callExpressionPath)) {
          createUseClassesVisitor(callExpressionPath, state);
        }

        if (isCreateUseComponent(callExpressionPath)) {
          createUseComponentVisitor(callExpressionPath, state);
        }
      },
    },
  };
}
