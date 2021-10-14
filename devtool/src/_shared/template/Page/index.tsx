import styles from './page.module.css';
import clsx from 'clsx';

type Props = {
  breadcrumb?: string[];
  title?: string;
};

export const Page: React.FC<Props> = ({ children, title, breadcrumb }) => {
  return (
    <div className={styles.page}>
      {title && breadcrumb && (
        <div className={styles.header}>
          <h1 className="morfeo-typography-h1">{title}</h1>
          <h2 className={clsx('morfeo-typography-h2', styles.breadcrumb)}>
            {breadcrumb.join(' > ')}
          </h2>
        </div>
      )}
      <div className={styles.section}>{children}</div>
    </div>
  );
};
