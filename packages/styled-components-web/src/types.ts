import { Theme, Style, Component, Variant } from '@morfeo/web';
import { StyledComponentBase } from 'styled-components';

export type ComponentTag = keyof JSX.IntrinsicElements | Component;

type PropByTag<P extends Style | TemplateStringsArray, K extends ComponentTag> =
  K extends Component
    ? P extends Style
      ? Omit<P, 'variant'> & { variant?: Variant<K> }
      : P
    : P;

export type MorfeoStyledComponent<K extends ComponentTag, P extends Style> =
  StyledComponentBase<
    K extends Component ? keyof JSX.IntrinsicElements : K,
    Theme,
    PropByTag<P, K>
  >;

export type MorfeoStyledCallback<
  P extends Style = Style,
  K extends ComponentTag = ComponentTag,
> = (tag: K) => MorfeoStyledComponent<K, P>;

type MorfeoStyledMap<P extends Style | TemplateStringsArray = Style> = {
  [K in ComponentTag]: (
    props: PropByTag<P, K> | TemplateStringsArray,
  ) => P extends Style
    ? MorfeoStyledComponent<K, P>
    : MorfeoStyledComponent<K, any>;
};

export type MorfeoStyled<P extends Style | TemplateStringsArray = Style> =
  MorfeoStyledCallback<P extends Style ? P : any> & MorfeoStyledMap<P>;
