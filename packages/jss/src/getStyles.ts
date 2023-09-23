import { Morfeo, Style } from '@morfeo/web';
import { deepMerge } from '@morfeo/utils';
import { Jss, StyleSheetFactoryOptions } from 'jss';

type MorfeoJSSOptions = StyleSheetFactoryOptions & {
  jss: Jss;
  morfeo: Morfeo;
};

function getStyleSheet<K extends string>(
  styles: Record<K, Style>,
  { jss, ...options }: MorfeoJSSOptions,
) {
  return jss.createStyleSheet<K>(styles as any, options);
}

export function getStyles<K extends string>(
  styles: Record<K, Style>,
  { jss, morfeo, ...options }: MorfeoJSSOptions,
) {
  let sheet = getStyleSheet<K>(styles, { jss, morfeo, ...options });

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

  const update = (props: Record<K, Style>): Record<K, string> => {
    currentStyles = deepMerge(currentStyles, props) as Record<K, Style>;
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
    return classes;
  };
  const unsubscribe = morfeo.theme.subscribe(onThemeChange);

  function destroy() {
    sheet.detach();
    unsubscribe();
  }

  return { classes, sheet, jss, destroy, update };
}
