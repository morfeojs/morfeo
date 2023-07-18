import type { NodePath } from '@babel/traverse';
import type { CallExpression } from '@babel/types';
import { component } from '@morfeo/web';
import { addNamespace } from '@babel/helper-module-imports';
import { getStyleObject, dynamicClasses, CSSCollector } from '../utils';

export function createComponentVisitor(
  callExpressionPath: NodePath<CallExpression>,
) {
  callExpressionPath.traverse({
    ObjectExpression(path) {
      path.stop();
      const [componentNameNode, styleNode] = callExpressionPath.node.arguments;

      // @ts-ignore
      const componentNameOrTag = componentNameNode.value;

      const { styleObject, styleFunctions, themeableStyleFunctions } =
        // @ts-ignore
        getStyleObject(styleNode);

      const dynamicClassNames = themeableStyleFunctions.reduce<string[]>(
        (acc, themeableStyleFunction) => {
          const classes = dynamicClasses.create(
            themeableStyleFunction.property,
            themeableStyleFunction.path,
            { componentName: componentNameOrTag, ...styleObject },
          );

          return [
            ...acc,
            `${JSON.stringify(classes)}[(${
              themeableStyleFunction.code
            })(props)]`,
          ];
        },
        [],
      );

      const componentOptions = component(
        componentNameOrTag,
        styleObject.variant,
        styleObject.state,
      );

      const propsFromTheme = componentOptions.getProps() || {};
      const componentTag = componentOptions.getTag() || componentNameOrTag;

      const style = styleFunctions.reduce(
        (acc, { variable, code }) => `${acc}"${variable}": (${code})(props),`,
        '',
      );

      const staticClassNames = CSSCollector.expand(styleObject);

      const JSXIdentifier = addNamespace(callExpressionPath, 'react', {
        nameHint: 'JSXFactory',
      });

      const MorfeoWebIdentifier = addNamespace(
        callExpressionPath,
        '@morfeo/web',
        {
          nameHint: 'MorfeoWeb',
        },
      );

      const template = `function (props = {}) {
        const { tag: Component = "${componentTag}", ...componentProps } = ${JSON.stringify(
        propsFromTheme,
      )};
        const className = ${MorfeoWebIdentifier.name}.combine(
          componentProps.className,
          props.className,
          ${JSON.stringify(staticClassNames)},
          ...[${dynamicClassNames}],
        )

        const style = {
          ...componentProps.style,
          ...{${style}},
          ...props.style,
        };

        return ${JSXIdentifier.name}.createElement(
          Component,
          {
            ...componentProps,
            ...props,
            className,
            style,
          }
        );
      }`;

      callExpressionPath.replaceWithSourceString(template);
    },
  });
}
