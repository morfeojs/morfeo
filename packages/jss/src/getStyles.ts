import { Morfeo, MorfeoStyle, Theme } from '@morfeo/web';
import { deepMerge } from '@morfeo/utils';
import { Jss, StyleSheetFactoryOptions } from 'jss';

type MorfeoJSSOptions<T extends Partial<Theme> = Partial<Theme>> =
  StyleSheetFactoryOptions & {
    jss: Jss;
    morfeo: Morfeo<T>;
  };

function getStyleSheet<K extends string, T extends Partial<Theme>>(
  styles: Record<K, MorfeoStyle<T>>,
  { jss, ...options }: MorfeoJSSOptions<T>,
) {
  return jss.createStyleSheet<K>(styles as any, options);
}

export function getStyles<
  K extends string,
  T extends Partial<Theme> = Partial<Theme>,
>(
  styles: Record<K, MorfeoStyle<T>>,
  { jss, morfeo, ...options }: MorfeoJSSOptions<T>,
) {
  let sheet = getStyleSheet<K, T>(styles, { jss, morfeo, ...options });

  let classes = sheet.classes;
  let currentStyles = { ...styles };

  function onThemeChange() {
    sheet.detach();

    sheet = getStyleSheet(currentStyles, {
      ...options,
      jss,
      morfeo,
      generateId: ({ key }) => classes[key],
    });

    sheet.attach();
  }

  const update = (props: Record<K, MorfeoStyle<T>>): Record<K, string> => {
    currentStyles = deepMerge(currentStyles, props) as Record<
      K,
      MorfeoStyle<T>
    >;
    sheet.addRules(currentStyles as any, {
      ...options,
      generateId: rule => {
        // We need to ignore this line because the JSS's RuleOptions interface is (apparently) wrong
        // and it doesn't expose the attribute name.
        // @ts-ignore
        const ruleName = rule.options.name;
        return classes[ruleName];
      },
    });

    classes = sheet.classes;
    return classes as Record<K, string>;
  };
  const unsubscribe = morfeo.theme.subscribe(onThemeChange);

  function destroy() {
    sheet.detach();
    unsubscribe();
  }

  return { classes, sheet, jss, destroy, update };
}
