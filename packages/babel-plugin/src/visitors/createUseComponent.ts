import type { NodePath } from '@babel/traverse';
import type { CallExpression } from '@babel/types';
import { component } from '@morfeo/web';
import { getStyleObject, dynamicClasses, css } from '../utils';

export function isCreateUseComponent(path: NodePath<CallExpression>) {
  return path.get('callee').isIdentifier({
    name: 'createUseComponent',
  });
}

export function createUseComponentVisitor(
  callExpressionPath: NodePath<CallExpression>,
  state: any,
) {
  callExpressionPath.traverse({
    ObjectExpression(path) {
      path.stop();

      const { styleObject, styleFunctions, themeableStyleFunctions } =
        getStyleObject(path.node);

      const staticClassNames = css
        .add(styleObject)
        .split(' ')
        .map(c => `"${c}"`);

      const dynamicClassNames = themeableStyleFunctions.reduce<string[]>(
        (acc, themeableStyleFunction) => {
          const classes = dynamicClasses.create(
            themeableStyleFunction.property,
            themeableStyleFunction.path,
            styleObject,
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
        styleObject.componentName,
        styleObject.variant,
        styleObject.state,
      );

      const propsFromTheme = componentOptions.getProps() || {};

      const style = styleFunctions.reduce(
        (acc, { variable, code }) => `${acc}"${variable}": (${code})(props),`,
        '',
      );

      if (!state.file.metadata.morfeo) {
        state.file.metadata.morfeo = '';
      }
      state.file.metadata.morfeo += css.get();

      const template = `function (props = {}) {
        const componentProps = ${JSON.stringify(propsFromTheme)};
        const className = [
          props.className,
          ...[${dynamicClassNames}],
          ...[${staticClassNames}],
          componentProps.className,
        ]
        .filter(Boolean)
        .filter((className, index, array) => array.indexOf(className) === index).join(' ');

        const style = {
          ...componentProps.style,
          ...{${style}},
          ...props.style,
        };

        return {
          ...componentProps,
          className,
          style,
        };
      }`;

      callExpressionPath.replaceWithSourceString(template);
    },
  });
}
