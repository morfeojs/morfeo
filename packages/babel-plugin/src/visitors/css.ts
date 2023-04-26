import type { NodePath } from '@babel/traverse';
import type { CallExpression } from '@babel/types';
import { getStyleObject, css } from '../utils';

export function createCssVisitor(
  callExpressionPath: NodePath<CallExpression>,
  state: any,
) {
  callExpressionPath.traverse({
    ObjectExpression(path) {
      path.stop();

      const { styleObject } = getStyleObject(path.node);

      const classes = Object.keys(styleObject).reduce(
        (acc, classKey) => ({
          ...acc,
          [classKey]: css.add(styleObject[classKey]),
        }),
        {},
      );

      state.file.metadata.morfeo = css.get();

      callExpressionPath.replaceWithSourceString(JSON.stringify(classes));
    },
  });
}
