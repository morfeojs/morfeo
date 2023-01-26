import type { NodePath, Visitor } from '@babel/traverse';
import type { CallExpression } from '@babel/types';
import { toJS, getClassesAndCSS } from './utils';

function isMorfeoParse(path: NodePath<CallExpression>) {
  const { callee } = path.node;

  return (
    // @ts-expect-error
    callee.object?.name === 'morfeo' &&
    // @ts-expect-error
    callee.property.name === 'parse'
  );
}

export default function getVisitor(): Visitor {
  return {
    ImportDeclaration(path) {
      const imported = path.get('specifiers');

      if (imported.length !== 1 || !imported[0].isImportSpecifier()) {
        return;
      }

      const binding = path.scope.getBinding('morfeo');

      if (!binding) {
        return;
      }

      const { references, referencePaths } = binding;

      if (references !== 1) {
        return;
      }

      referencePaths.forEach(reference => {
        if (
          reference.parentPath &&
          reference.parentPath.isMemberExpression() &&
          reference.parentPath.get('property').isIdentifier({
            name: 'parse',
          }) &&
          reference.parentPath.get('object').isIdentifier({ name: 'morfeo' })
        ) {
          path.remove();
        }
      });
    },
    CallExpression: {
      enter(callExpressionPath, state: any) {
        if (!isMorfeoParse(callExpressionPath)) {
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
