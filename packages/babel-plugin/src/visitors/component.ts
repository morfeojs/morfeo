import type { NodePath } from '@babel/traverse';
import type { CallExpression, ObjectExpression } from '@babel/types';
import { getStyleObject, CSSCollector } from '../utils';
import { generateCSSFromProperty } from '../utils/generateCSSFromProperty';

export function createComponentVisitor(
  callExpressionPath: NodePath<CallExpression>,
) {
  callExpressionPath.traverse({
    ObjectExpression(path) {
      path.stop();
      const [componentNameNode, styleNode] = callExpressionPath.node.arguments;

      // @ts-ignore
      const componentNameOrTag = componentNameNode.value;

      const { styleObject, themableStyles } = getStyleObject(
        styleNode as ObjectExpression,
      );

      themableStyles.forEach(themableStyle =>
        generateCSSFromProperty({
          ...themableStyle,
          style: { componentName: componentNameOrTag, ...styleObject },
        }),
      );

      CSSCollector.add(styleObject);
    },
  });
}
