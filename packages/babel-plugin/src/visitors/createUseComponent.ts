import type { NodePath } from '@babel/traverse';
import type { CallExpression, ObjectExpression } from '@babel/types';
import generator from '@babel/generator';
import { component } from '@morfeo/web';
import { escapeString } from '@morfeo/utils';
import { toJS, getClassesAndCSS } from '../utils';

export function isCreateUseComponent(path: NodePath<CallExpression>) {
  return path.get('callee').isIdentifier({
    name: 'createUseComponent',
  });
}

function getStyleObject(node: ObjectExpression) {
  const styleFunctions: { key: string; code: string }[] = [];

  const styleObject = toJS(node, {
    resolveFunction({ path, node }) {
      const variable = `--${escapeString(path)}`;

      const { code } = generator(node, {
        compact: true,
      });

      styleFunctions.push({
        key: variable,
        code,
      });

      return `var(${variable})`;
    },
  });

  return { styleObject, styleFunctions };
}

export function createUseComponentVisitor(
  callExpressionPath: NodePath<CallExpression>,
  state: any,
) {
  callExpressionPath.traverse({
    ObjectExpression(path) {
      path.stop();

      const { styleObject, styleFunctions } = getStyleObject(path.node);

      const { classes, css } = getClassesAndCSS({
        component: styleObject,
      });

      const className = classes.component;

      const componentOptions = component(
        styleObject.componentName,
        styleObject.variant,
        styleObject.state,
      );

      const propsFromTheme = componentOptions.getProps();

      const style = styleFunctions.reduce(
        (acc, { key, code }) => `${acc}"${key}": (${code})(props),`,
        '',
      );

      const template = `function (props = {}) {
        const componentProps = ${
          propsFromTheme ? JSON.stringify(propsFromTheme) : '{}'
        };
        const className = [componentProps.className, "${className}", props.className].filter(Boolean).join(' ');
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

      if (!state.file.metadata.morfeo) {
        state.file.metadata.morfeo = '';
      }
      state.file.metadata.morfeo += css;

      callExpressionPath.replaceWithSourceString(template);
    },
  });
}
