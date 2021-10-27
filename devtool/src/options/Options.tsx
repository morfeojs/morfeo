import clsx from 'clsx';
import logoVertical from '../_shared/assets/images/logo-vertical.png';
import { redirect, t } from '../_shared/utils';
import styles from './style.module.css';

function Options() {
  return (
    <div className={styles.container} data-morfeo-theme="light">
      <img src={logoVertical} alt="logo" className={styles.image} />
      <p className={clsx(styles.description, 'morfeo-typography-p1', 'my-xl')}>
        {t('bigDescription')}
      </p>
      <button
        className={clsx(styles.button, 'morfeo-button')}
        onClick={() => redirect('https://morfeo.dev')}
      >
        <span className="morfeo-typography-cta">Website</span>
      </button>
    </div>
  );
}

export default Options;
