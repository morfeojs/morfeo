import { getStyles, Style } from '@morfeo/web';
import { css } from './css';
import { splitStyles } from './splitStyles';

export function getClassesAndCSS(classesStyleObject: Record<string, Style>) {
  const classNames = Object.keys(classesStyleObject);

  const classes = classNames.reduce((acc, className) => {
    const splittedStyles = splitStyles(classesStyleObject[className]);

    const currentClass = splittedStyles.reduce((acc, style) => {
      const { classes, sheet } = getStyles({
        [className]: style,
      });

      css.add(classes[className], sheet.toString());

      return `${acc} ${classes[className]}`.trim();
    }, '');

    return { ...acc, [className]: currentClass };
  }, {});

  return { classes, css: css.get() };
}
