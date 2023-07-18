import type { NodePath } from '@babel/traverse';
import type { CallExpression } from '@babel/types';
import { addNamespace } from '@babel/helper-module-imports';
import { getStyleObject, CSSCollector } from '../utils';

export function createCssVisitor(callExpressionPath: NodePath<CallExpression>) {
  callExpressionPath.traverse({
    ObjectExpression(path) {
      path.stop();

      const { styleObject } = getStyleObject(path.node);

      const classObjects = Object.keys(styleObject).reduce(
        (acc, classKey) => ({
          ...acc,
          [classKey]: CSSCollector.expand(styleObject[classKey]),
        }),
        {},
      );

      const identifier = addNamespace(callExpressionPath, '@morfeo/web', {
        nameHint: 'morfeoWeb',
      });

      const stringifiedClassObject = JSON.stringify(classObjects);

      const template = `(function () {
        const classObject = ${stringifiedClassObject};
        return Object.assign(function (...classes) {
          return ${identifier.name}.createClassCombiner(classObject)(...classes);
        }, classObject);
      })()`;

      callExpressionPath.replaceWithSourceString(template);
    },
  });
}
