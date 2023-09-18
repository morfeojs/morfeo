import { deepMerge } from '@morfeo/utils';
import { morfeo } from '../../src';

const defaultTheme = {
  colors: {
    primary: 'black',
    error: 'red',
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
    WithStates: {
      tag: 'p',
      style: {
        color: 'primary',
      },
      props: {
        label: 'component with states',
      },
      variants: {},
      states: {
        error: {
          color: 'error',
        },
      },
    },
    VariantCycle: {
      style: {
        color: 'secondary',
        bg: 'primary',
      },
      variants: {
        one: {
          style: {
            color: 'primary',
          },
        },
        two: {
          style: {
            componentName: 'VariantCycle',
            variant: 'one',
            bg: 'secondary',
          },
        },
        three: {
          style: {
            componentName: 'VariantCycle',
            variant: 'two',
          },
        },
      },
    },
  },
} as const;

describe('component', () => {
  beforeEach(() => {
    morfeo.theme.set(defaultTheme as any);
  });

  afterEach(() => {
    morfeo.theme.reset();
  });

  test('should get the component configuration inside the theme', () => {
    const config = morfeo.theme.component('NoVariants' as any).get();
    const tag = morfeo.theme.component('NoVariants' as any).getTag();
    const props = morfeo.theme.component('NoVariants' as any).getProps();
    const style = morfeo.theme.component('NoVariants' as any).getStyle();
    expect(config).toEqual(defaultTheme.components.NoVariants);
    expect(tag).toEqual(defaultTheme.components.NoVariants.tag);
    expect(props).toEqual(defaultTheme.components.NoVariants.props);
    expect(style).toEqual(defaultTheme.components.NoVariants.style);
  });

  test('should return the base config if the variant does not exist', () => {
    const config = morfeo.theme
      .component('NoVariants' as any, 'invalidVariant')
      .get();
    expect(config).toEqual(defaultTheme.components.NoVariants);
  });

  test('should return `undefined` if the component does not exist', () => {
    const props = morfeo.theme
      .component('Invalid Component' as any, 'invalidVariant')
      .getProps();

    expect(props).toEqual(undefined);
  });

  test('should merge the configuration of the base component with its variant', () => {
    const config = morfeo.theme.component('WithVariants' as any, 'h1').get();
    const tag = morfeo.theme.component('WithVariants' as any, 'h1').getTag();
    const variants = morfeo.theme
      .component('WithVariants' as any, 'h1')
      .getVariants();
    const props = morfeo.theme
      .component('WithVariants' as any, 'h1')
      .getProps();
    const style = morfeo.theme
      .component('WithVariants' as any, 'h1')
      .getStyle();
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

  test('should retrieve the states of a component', () => {
    const config = morfeo.theme.component('WithStates' as any);
    const states = config.getStates();

    expect(states).toEqual({ error: { color: 'error' } });
  });

  test('should be possible to use componentName and variant inside the style of another component', () => {
    const style = morfeo.theme
      .component('VariantCycle' as any, 'three')
      .getStyle();

    expect(style).toEqual({
      color: 'primary',
      bg: 'secondary',
    });
  });

  test('getStyle and get().style should return the same values', () => {
    const styleFromGetStyle = morfeo.theme
      .component('VariantCycle' as any, 'three')
      .getStyle();

    const { style } = morfeo.theme
      .component('VariantCycle' as any, 'three')
      .get();

    expect(styleFromGetStyle).toEqual(style);
  });
});
