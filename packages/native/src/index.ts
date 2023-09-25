import { createMorfeo, baseParser, Morfeo } from '@morfeo/core';
import { shadows, shadowOffset } from './parsers';

function createNativeMorfeo(...args: Parameters<typeof createMorfeo>): Morfeo {
  const instance = createMorfeo(...args);
  instance.parsers.add('shadowColor', props =>
    baseParser({ ...props, scale: 'colors' }),
  );
  instance.parsers.add('shadowOpacity', props =>
    baseParser({ ...props, scale: 'opacities' }),
  );
  instance.parsers.add('shadowOffset', shadowOffset);
  instance.parsers.add('shadowRadius', props =>
    baseParser({ ...props, scale: 'spacings' }),
  );
  instance.parsers.add('shadow', shadows);

  return instance;
}

export * from '@morfeo/core';
export * from './types';

export { createNativeMorfeo as createMorfeo };
