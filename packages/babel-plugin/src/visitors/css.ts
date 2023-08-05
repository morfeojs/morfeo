import type { NodePath } from '@babel/traverse';
import type { CallExpression } from '@babel/types';
import { getStyleObject, CSSCollector } from '../utils';

export function createCssVisitor(callExpressionPath: NodePath<CallExpression>) {
  callExpressionPath.traverse({
    ObjectExpression(path) {
      path.stop();

      const { styleObject } = getStyleObject(path.node);

      Object.keys(styleObject).forEach(classKey => {
        CSSCollector.add(styleObject[classKey]);
      });
    },
  });
}
