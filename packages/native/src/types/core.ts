import { Color, Opacity, Space } from '@morfeo/core';
import { ViewStyle, ImageStyle, TextStyle } from 'react-native';

type CustomNativeStyle = {
  shadowColor?: Color;
  shadowOffset?: Space;
  shadowRadius?: Space;
  shadowOpacity?: Opacity;
};

type CustomNativeProperties = {
  shadowColor: 'colors';
  shadowOffset: 'space';
  shadowRadius: 'space';
  shadowOpacity: 'opacities';
};

type NativeStyle = ViewStyle & ImageStyle & TextStyle;

type NativeCustomStyle = Omit<NativeStyle, keyof CustomNativeStyle> &
  CustomNativeStyle;

interface NativeShadowConfig {
  elevation?: Space;
}

declare module '@morfeo/core' {
  export interface CustomStyle extends NativeCustomStyle {}

  export interface CustomProperties extends CustomNativeProperties {}

  export interface ResolvedStyle extends NativeStyle {}
  export interface ShadowConfig extends NativeShadowConfig {}
}
