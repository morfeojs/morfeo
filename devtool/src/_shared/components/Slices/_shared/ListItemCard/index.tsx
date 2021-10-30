import styles from './style.module.css';
import clsx from 'clsx';
import { Card } from '../../../Card';

type Props = {
  title: string;
  clickable?: boolean;
  mode?: 'dark' | 'light';
} & React.ComponentProps<typeof Card>;

export const ListItemCard: React.FC<Props> = ({
  onClick,
  title,
  className,
  children,
  clickable = true,
  mode,
  ...props
}) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <Card
        className={clsx(
          className,
          clickable ? 'morfeo-card-primary-clickable' : 'morfeo-card-primary',
          mode === 'dark' && 'bg-black',
          mode === 'light' && 'bg-white',
        )}
        {...props}
      >
        {children}
      </Card>
      {title && (
        <h3 className={clsx('morfeo-typography-h3', styles.name)} title={title}>
          {title}
        </h3>
      )}
    </div>
  );
};
