import { theme, component, deepMerge } from '../../src';

const defaultTheme = {
  colors: {
    primary: 'black',
  },
  components: {
    NoVariants: {
      tag: 'div',
      style: {
        bg: 'primary',
      },
      props: {
        label: 'component without variants',
      },
    },
    WithVariants: {
      tag: 'p',
      style: {
        color: 'primary',
      },
      props: {
        label: 'component with variants',
      },
      variants: {
        h1: {
          tag: 'h1',
          style: {
            bg: 'secondary',
          },
        },
      },
    },
  },
} as const;

describe('component', () => {
  beforeEach(() => {
    theme.set(defaultTheme as any);
    theme.cleanUp();
  });

  afterEach(() => {
    theme.reset();
  });

  test('should get the component configuration inside the theme', () => {
    const config = component('NoVariants' as any).get();
    const tag = component('NoVariants' as any).getTag();
    const props = component('NoVariants' as any).getProps();
    const style = component('NoVariants' as any).getStyle();
    expect(config).toEqual(defaultTheme.components.NoVariants);
    expect(tag).toEqual(defaultTheme.components.NoVariants.tag);
    expect(props).toEqual(defaultTheme.components.NoVariants.props);
    expect(style).toEqual(defaultTheme.components.NoVariants.style);
  });

  test('should return the base config if the variant does not exist', () => {
    const config = component('NoVariants' as any, 'invalidVariant').get();
    expect(config).toEqual(defaultTheme.components.NoVariants);
  });

  test('should return `undefined` if the component does not exist', () => {
    const props = component(
      'Invalid Component' as any,
      'invalidVariant',
    ).getProps();

    expect(props).toEqual(undefined);
  });

  test('should merge the configuration of the base component with its variant', () => {
    const config = component('WithVariants' as any, 'h1').get();
    const tag = component('WithVariants' as any, 'h1').getTag();
    const variants = component('WithVariants' as any, 'h1').getVariants();
    const props = component('WithVariants' as any, 'h1').getProps();
    const style = component('WithVariants' as any, 'h1').getStyle();
    const { variants: mergedVariants, ...mergedConfig } = deepMerge(
      defaultTheme.components.WithVariants,
      defaultTheme.components.WithVariants.variants.h1 as any,
    );
    expect(config).toEqual(mergedConfig);
    expect(tag).toEqual(mergedConfig.tag);
    expect(props).toEqual(mergedConfig.props);
    expect(style).toEqual(mergedConfig.style);
    expect(variants).toEqual(mergedVariants);
  });
});
