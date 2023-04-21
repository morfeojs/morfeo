import type { Visitor } from '@babel/traverse';
import {
  isCreateUseStyle,
  createUseStyleVisitor,
} from './visitors/createUseStyle';
import { createCssVisitor, isCSSFunction } from './visitors/css';

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
        if (!state.file.metadata.morfeo) {
          state.file.metadata.morfeo = '';
        }

        if (isCreateUseStyle(callExpressionPath)) {
          createUseStyleVisitor(callExpressionPath, state);
        }

        if (isCSSFunction(callExpressionPath)) {
          createCssVisitor(callExpressionPath, state);
        }
      },
    },
  };
}
