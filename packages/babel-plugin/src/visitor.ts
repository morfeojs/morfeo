import type { NodePath, Visitor } from '@babel/traverse';
import type { CallExpression } from '@babel/types';
import { toJS, getClassesAndCSS } from './utils';

function isCreateUseClasses(path: NodePath<CallExpression>) {
  return path.get('callee').isIdentifier({
    name: 'createUseClasses',
  });
}

export default function getVisitor(): Visitor {
  return {
    ImportDeclaration(path) {
      if (path.node.source.value !== '@morfeo/css') {
        return path.skip();
      }

      path.remove();
    },
    CallExpression: {
      enter(callExpressionPath, state: any) {
        if (!isCreateUseClasses(callExpressionPath)) {
          return;
        }

        callExpressionPath.traverse({
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

            const newCode = `() => ({
              ${classesObject}
            })`;

            if (!state.file.metadata.morfeo) {
              state.file.metadata.morfeo = '';
            }
            state.file.metadata.morfeo += css;

            callExpressionPath.replaceWithSourceString(newCode);
          },
        });
      },
    },
  };
}
