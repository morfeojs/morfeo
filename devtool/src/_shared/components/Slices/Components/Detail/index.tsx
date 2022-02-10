import { Color, Component, component, morfeo } from '@morfeo/react';
import clsx from 'clsx';
import { useMemo, useState, useCallback } from 'react';
import { useRouter } from '../../../../hooks';
import { MorfeoComponent } from '../MorfeoComponent';
import styles from './style.module.css';
import { Card } from '../../../Card';
import { Icon } from '../../../Icon';

export const Detail = () => {
  const { route } = useRouter();
  const { state } = route;
  const { detailKey: componentName = '', componentVariant } = state || {};
  const { meta } =
    component(componentName as Component, componentVariant).get() || {};
  const { devtoolConfig } = meta || {};
  const [defaultStyleActive, setDefaultStyleActive] = useState(true);

  const currentThemeName = morfeo.getCurrentTheme();

  const computedBackground = useMemo(() => {
    if (typeof devtoolConfig?.background === 'object') {
      return devtoolConfig?.background[currentThemeName];
    }
    return (devtoolConfig?.background as Color) || ('#fff' as Color);
  }, [currentThemeName, devtoolConfig?.background]);

  const onDefaultStyleCheckboxChange = useCallback(() => {
    setDefaultStyleActive(state => !state);
  }, [])

  return (
    <div className={styles.container}>
      {devtoolConfig?.style && (
        <div className={styles.defaultStyleAlertContainer}>
          <input type="checkbox" checked={defaultStyleActive} onChange={onDefaultStyleCheckboxChange} />
          <div className="ml-2xs">
            <Icon name="warning" />
          </div>
          <h4 className="morfeo-typography-h4">
            Web extension default style
          </h4>
          <div>
            <Icon name="warning" />
          </div>
        </div>
      )}
      <Card
        className={clsx('morfeo-card-primary', styles.previewContainer)}
        style={{
          bg: computedBackground,
        }}
      >
        <MorfeoComponent
          applyDefaultStyle={defaultStyleActive}
          name={componentName as Component}
          variant={componentVariant}
        >
          {componentName}
        </MorfeoComponent>
      </Card>
    </div>
  );
};
