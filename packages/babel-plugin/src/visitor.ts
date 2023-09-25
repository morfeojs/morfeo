import type { Visitor } from '@babel/traverse';
import type { MorfeoBabelPluginOptions } from './types';
import { createCssVisitor } from './visitors/css';
import { createComponentVisitor } from './visitors/component';
import { createGlobalVisitor } from './visitors/global';
import { CSSCollector, getUsedMorfeoMethod } from './utils';

const VISITORS_CREATOR_MAP = {
  css: createCssVisitor,
  global: createGlobalVisitor,
  component: createComponentVisitor,
};

export default function getVisitor({
  morfeo,
}: MorfeoBabelPluginOptions): Visitor {
  return {
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
          visitor(morfeo, callExpressionPath);
          state.file.metadata.morfeo = CSSCollector.get();
        }
      },
    },
  };
}
