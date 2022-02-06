import React from 'react';
import * as Morfeo from '@morfeo/react';
import * as MorfeoPresetDefault from '@morfeo/preset-default';

MorfeoPresetDefault.initPreset();

const ReactLiveScope = {
  React,
  Morfeo,
  MorfeoPresetDefault,
  ...React,
  ...Morfeo,
  ...MorfeoPresetDefault,
};

export default ReactLiveScope;
