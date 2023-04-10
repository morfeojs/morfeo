import { getStyles, Style } from '@morfeo/web';
import { css } from './css';
import { splitStyles } from './splitStyles';

export function getClassesAndCSS<K extends string>(
  classesStyleObject: Record<K, Style>,
) {
  const classNames = Object.keys(classesStyleObject);

  const classes = classNames.reduce<Record<K, string>>((acc, className) => {
    const splittedStyles = splitStyles(classesStyleObject[className]);

    const currentClass = splittedStyles.reduce((acc, style) => {
      const { classes, sheet } = getStyles({
        [className]: style,
      });

      css.add(classes[className], sheet.toString());

      return `${acc} ${classes[className]}`.trim();
    }, '');

    return { ...acc, [className]: currentClass };
  }, {} as Record<K, string>);

  return { classes, css: css.get() };
}
