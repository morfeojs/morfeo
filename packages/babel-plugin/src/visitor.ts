import type { Visitor } from '@babel/traverse';
import { createCssVisitor } from './visitors/css';
import { createComponentVisitor } from './visitors/component';
import { createGlobalVisitor } from './visitors/global';
import { CSSCollector, getUsedMorfeoMethod } from './utils';

const VISITORS_CREATOR_MAP = {
  css: createCssVisitor,
  global: createGlobalVisitor,
  component: createComponentVisitor,
};

const allowedImports = ['@morfeo/web', '@morfeo/react'];

export default function getVisitor(): Visitor {
  return {
    ImportDeclaration(path) {
      if (!allowedImports.includes(path.node.source.value)) {
        return path.skip();
      }
    },
    CallExpression: {
      enter(callExpressionPath, state: any) {
        const usedMethod = getUsedMorfeoMethod(callExpressionPath);

        if (!usedMethod) {
          return;
        }

        if (!state.file.metadata.morfeo) {
          state.file.metadata.morfeo = {
            styles: {},
            globalStyles: {},
          };
        }

        const visitor = VISITORS_CREATOR_MAP[usedMethod];

        if (visitor) {
          visitor(callExpressionPath);
          state.file.metadata.morfeo = CSSCollector.get();
        }
      },
    },
  };
}
