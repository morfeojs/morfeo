import type { NodePath } from '@babel/traverse';
import type { CallExpression, ObjectExpression } from '@babel/types';
import type { Morfeo } from '@morfeo/web';
import { getStyleObject, CSSCollector } from '../utils';
import { generateCSSFromProperty } from '../utils/generateCSSFromProperty';

export function createComponentVisitor(
  morfeo: Morfeo,
  callExpressionPath: NodePath<CallExpression>,
) {
  callExpressionPath.traverse({
    ObjectExpression(path) {
      path.stop();
      const [componentNameNode, styleNode] = callExpressionPath.node.arguments;

      // @ts-ignore
      const componentNameOrTag = componentNameNode.value;
      const isMorfeoComponent =
        !!morfeo.theme.getSlice('components')[componentNameOrTag];

      const { styleObject, themableStyles } = getStyleObject(
        morfeo,
        styleNode as ObjectExpression,
      );

      const completeStyleObject = {
        ...(isMorfeoComponent ? { componentName: componentNameOrTag } : {}),
        ...styleObject,
      };

      themableStyles.forEach(themableStyle =>
        generateCSSFromProperty({
          ...themableStyle,
          morfeo,
          style: completeStyleObject,
        }),
      );

      CSSCollector.add(completeStyleObject);
    },
  });
}
