import { Visitor } from '@babel/traverse';
import { createCssVisitor } from './visitors/css';
import { createComponentVisitor } from './visitors/component';
import { isMorfeoMethodUsed } from './utils';
import { createExperimentalVisitor } from './visitors/experimental';

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

        if (isMorfeoMethodUsed(callExpressionPath, 'component')) {
          createComponentVisitor(callExpressionPath, state);
        }

        if (isMorfeoMethodUsed(callExpressionPath, 'css')) {
          createCssVisitor(callExpressionPath, state);
        }

        if (isMorfeoMethodUsed(callExpressionPath, 'experimental')) {
          createExperimentalVisitor(callExpressionPath, state);
        }
      },
    },
  };
}
