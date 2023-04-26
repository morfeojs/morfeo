import type { NodePath } from '@babel/traverse';
import type { CallExpression } from '@babel/types';
import { component } from '@morfeo/web';
import { getStyleObject, dynamicClasses, css } from '../utils';
import { addNamespace } from '@babel/helper-module-imports';

export function createComponentVisitor(
  callExpressionPath: NodePath<CallExpression>,
  state: any,
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

      const staticClassNames = css
        .add(styleObject)
        .split(' ')
        .map(c => `"${c}"`);

      state.file.metadata.morfeo = css.get();

      const identifier = addNamespace(callExpressionPath, 'react', {
        nameHint: 'JSXFactory',
      });

      const template = `function (props = {}) {
        const { tag: Component = "${componentTag}", ...componentProps } = ${JSON.stringify(
        propsFromTheme,
      )};
        const className = [
          componentProps.className,
          props.className,
          ...[${dynamicClassNames}],
          ...[${staticClassNames}],
        ]
        .filter(Boolean)
        .filter((className, index, array) => array.indexOf(className) === index)
        .join(' ');

        const style = {
          ...componentProps.style,
          ...{${style}},
          ...props.style,
        };

        return ${identifier.name}.createElement(
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
