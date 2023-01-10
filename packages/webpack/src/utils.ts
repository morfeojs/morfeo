import * as loaderUtils from 'loader-utils';
import type { LoaderContext } from 'webpack';

export function getCssPath(context: LoaderContext<unknown>, css: string) {
  return loaderUtils.interpolateName(
    context,
    '@morfeo/static/css/[name].[hash:base64:7].css',
    {
      content: css,
    },
  );
}
