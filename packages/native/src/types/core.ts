import { Color, Opacity, Space } from '@morfeo/core';
import { ViewStyle, ImageStyle, TextStyle } from 'react-native';

type CustomNativeProperties = {
  shadowColor?: Color;
  shadowOffset?: Space;
  shadowRadius?: number;
  shadowOpacity?: Opacity;
};

type NativeStyle = ViewStyle & ImageStyle & TextStyle;

type NativeCustomStyle = Omit<NativeStyle, keyof CustomNativeProperties> &
  CustomNativeProperties;

interface NativeShadowConfig {
  elevation?: number;
}

declare module '@morfeo/core' {
  export interface CustomStyle extends NativeCustomStyle {}

  export interface CustomProperties extends CustomNativeProperties {}

  export interface ResolvedStyle extends NativeStyle {}
  export interface ShadowConfig extends NativeShadowConfig {}
}
