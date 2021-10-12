import React from 'react';
import { ThemeKey } from '@morfeo/react';
import { noCase } from 'change-case';
import { RouteName } from '../../../_shared/contexts';

import styles from './style.module.css';
import clsx from 'clsx';
import { Link } from '../Link';
import { CopyButton } from '../CopyButton';

type Props = {
  slice: ThemeKey;
};

export const SliceCard: React.FC<Props> = ({ slice }) => {
  return (
    <div className={clsx('morfeo-card', styles.container)}>
      <div className={clsx('morfeo-card', styles.innerCard)}>
        <CopyButton text={slice} />
      </div>
      <div className={styles.bottomContainer}>
        <Link to={'slice' as RouteName} className="morfeo-typography-h2">
          {noCase(slice)}
        </Link>
      </div>
    </div>
  );
};
