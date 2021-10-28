import clsx from 'clsx';
import React, { useCallback, useMemo } from 'react';
import { Author } from '../../../_shared/types';
import { redirect } from '../../../_shared/utils';
import styles from './style.module.css';

type Props = {
  person: Author;
};

function getInitials(name: string) {
  const names = name.split(' ');
  const initials = names.map(part => part[0].toUpperCase());

  return initials.join('');
}

export const PersonCard: React.FC<Props> = ({ person }) => {
  const { name, image, url, contributions = [] } = person;

  const onClick = useCallback(() => {
    redirect(url);
  }, [url]);

  const cover = useMemo(() => {
    if (image) {
      return <img src={image} alt={name} className={styles.cardImage} />;
    }

    return (
      <div className={styles.cardImage}>
        <h2 className="morfeo-typography-h2">{getInitials(name)}</h2>
      </div>
    );
  }, [image, name]);

  return (
    <div className={styles.cardContainer} onClick={onClick}>
      {cover}
      <h3 className={clsx('morfeo-typography-h3', styles.name)}>{name}</h3>
      <div className={styles.contributionsContainer}>
        {contributions.map(contribution => (
          <span key={contribution}>{contribution}</span>
        ))}
      </div>
    </div>
  );
};
