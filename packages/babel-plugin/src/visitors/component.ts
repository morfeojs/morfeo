import type { NodePath } from '@babel/traverse';
import type { CallExpression, ObjectExpression } from '@babel/types';
import { getStyleObject, CSSCollector } from '../utils';
import { generateCSSFromProperty } from '../utils/generateCSSFromProperty';
import { theme } from '@morfeo/web';

export function createComponentVisitor(
  callExpressionPath: NodePath<CallExpression>,
) {
  callExpressionPath.traverse({
    ObjectExpression(path) {
      path.stop();
      const [componentNameNode, styleNode] = callExpressionPath.node.arguments;

      // @ts-ignore
      const componentNameOrTag = componentNameNode.value;
      const isMorfeoComponent =
        !!theme.getSlice('components')[componentNameOrTag];

      const { styleObject, themableStyles } = getStyleObject(
        styleNode as ObjectExpression,
      );

      const completeStyleObject = {
        ...(isMorfeoComponent ? { componentName: componentNameOrTag } : {}),
        ...styleObject,
      };

      themableStyles.forEach(themableStyle =>
        generateCSSFromProperty({
          ...themableStyle,
          style: completeStyleObject,
        }),
      );

      CSSCollector.add(completeStyleObject);
    },
  });
}
