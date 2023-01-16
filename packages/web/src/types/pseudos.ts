import { Style } from '@morfeo/core';
import { pseudosProperties } from '../properties';

type BasePseudoProperties = {
  [K in (typeof pseudosProperties)[number]]: string;
};

export interface PseudoProperties extends BasePseudoProperties {}

export type PseudoProperty = keyof PseudoProperties;

export type PseudosParserParams<P extends PseudoProperty = PseudoProperty> = {
  value: Style;
  property: P;
};

export type PseudosParser<P extends PseudoProperty = PseudoProperty> = (
  params: PseudosParserParams<P>,
) => any;
