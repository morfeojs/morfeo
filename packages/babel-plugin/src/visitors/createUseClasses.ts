import type { NodePath } from '@babel/traverse';
import type { CallExpression } from '@babel/types';
import { toJS, getClassesAndCSS } from '../utils';

export function isCreateUseClasses(path: NodePath<CallExpression>) {
  return path.get('callee').isIdentifier({
    name: 'createUseClasses',
  });
}

export function createUseClassesVisitor(
  callExpressionPath: NodePath<CallExpression>,
  state: any,
) {
  return callExpressionPath.traverse({
    ObjectExpression(path) {
      // It should stop at the parent object
      path.stop();
      const classesStyleObject = toJS(path.node);

      const classNames = Object.keys(classesStyleObject);

      const { classes, css } = getClassesAndCSS(classesStyleObject);

      const classesObject = classNames.reduce(
        (acc, curr) => `${acc}\n${curr}: "${classes[curr]}",`,
        '',
      );

      const template = `function() {
        return { ${classesObject} };
      }`;

      if (!state.file.metadata.morfeo) {
        state.file.metadata.morfeo = '';
      }
      state.file.metadata.morfeo += css;

      callExpressionPath.replaceWithSourceString(template);
    },
  });
}
