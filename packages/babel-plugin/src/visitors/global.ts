import type { NodePath } from '@babel/traverse';
import type { CallExpression } from '@babel/types';
import { getStyleObject, CSSCollector } from '../utils';

export function createGlobalVisitor(
  callExpressionPath: NodePath<CallExpression>,
) {
  callExpressionPath.traverse({
    ObjectExpression(path) {
      path.stop();

      const { styleObject } = getStyleObject(path.node);

      CSSCollector.addGlobal(styleObject);
    },
  });
}
