import styles from './page.module.css';
import clsx from 'clsx';
import { noCase, capitalCase } from 'change-case'

type Props = {
  breadcrumb?: string[];
  title?: string;
};

function capitalize(string: string) {
  return capitalCase(noCase(string))
}

export const Page: React.FC<Props> = ({ children, title, breadcrumb }) => {
  return (
    <div className={styles.page}>
      {title && breadcrumb && (
        <div className={styles.header}>
          <h1 className="morfeo-typography-h1">{capitalize(title)}</h1>
          <h2 className={clsx('morfeo-typography-h2', styles.breadcrumb)}>
            {breadcrumb.map(capitalize).join(' > ')}
          </h2>
        </div>
      )}
      <div className={styles.section}>{children}</div>
    </div>
  );
};