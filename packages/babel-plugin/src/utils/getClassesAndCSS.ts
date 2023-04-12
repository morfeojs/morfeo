import { Style } from '@morfeo/web';
import { css } from './css';
import { splitStyles } from './splitStyles';

export function getClassesAndCSS<K extends string>(
  classesStyleObject: Record<K, Style>,
) {
  const classNames = Object.keys(classesStyleObject);

  const classes = classNames.reduce<Record<K, string>>((acc, className) => {
    const splittedStyles = splitStyles(classesStyleObject[className]);

    const currentClass = splittedStyles.reduce<string>((acc, style) => {
      const cssClass = css.add(style);

      const classes = `${acc} ${cssClass}`.trim();

      return classes;
    }, '');

    return { ...acc, [className]: currentClass };
  }, {} as Record<K, string>);

  return { classes, css: css.get() };
}
