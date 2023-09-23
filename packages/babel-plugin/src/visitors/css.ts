import type { NodePath } from '@babel/traverse';
import type { CallExpression } from '@babel/types';
import type { Morfeo } from '@morfeo/web';
import { getStyleObject, CSSCollector } from '../utils';

export function createCssVisitor(
  morfeo: Morfeo,
  callExpressionPath: NodePath<CallExpression>,
) {
  callExpressionPath.traverse({
    ObjectExpression(path) {
      path.stop();

      const { styleObject } = getStyleObject(morfeo, path.node);

      Object.keys(styleObject).forEach(classKey => {
        CSSCollector.add(styleObject[classKey]);
      });
    },
  });
}
