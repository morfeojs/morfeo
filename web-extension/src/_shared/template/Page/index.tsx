import clsx from 'clsx';
import { noCase, capitalCase } from 'change-case';
import { PropsWithChildren } from 'react';
import styles from './page.module.css';

type Props = PropsWithChildren<{
  breadcrumb?: string[];
  title?: string;
}>;

function capitalize(string: string) {
  return capitalCase(noCase(string));
}

export const Page: React.FC<Props> = ({ children, title, breadcrumb }) => {
  return (
    <div className={styles.page}>
      {title && breadcrumb && (
        <div className={styles.header}>
          <h1 className="morfeo-typography-h1">{capitalize(title)}</h1>
          <h3 className={clsx('morfeo-typography-h3', styles.breadcrumb)}>
            {breadcrumb.map(capitalize).join(' > ')}
          </h3>
        </div>
      )}
      {children}
    </div>
  );
};
