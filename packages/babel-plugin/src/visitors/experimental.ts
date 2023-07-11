import type { NodePath } from '@babel/traverse';
import type { CallExpression } from '@babel/types';
import { addNamespace } from '@babel/helper-module-imports';
import { getStyleObject, css } from '../utils';

export function createExperimentalVisitor(
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
          [classKey]: css.expand(styleObject[classKey]),
        }),
        {},
      );

      state.file.metadata.morfeo = css.get();

      const identifier = addNamespace(callExpressionPath, '@morfeo/utils', {
        nameHint: 'morfeoUtils',
      });

      const stringifiedClassObject = JSON.stringify(classes);

      const template = `Object.assign(function (...classes) {
        const classObject = ${stringifiedClassObject};
        return ${identifier.name}.createClassCombiner(classObject)(...classes);
      }, ${stringifiedClassObject})`;

      callExpressionPath.replaceWithSourceString(template);
    },
  });
}
