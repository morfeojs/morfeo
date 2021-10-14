import React, { useMemo } from 'react';
import { Color, useThemeSlice } from '@morfeo/react';
import { Icon, Link } from '../../components';
import { RouteName } from '../../contexts';
import { useThemeSlices } from '../../hooks';
import { IconName } from '../../components/Icon/icons';
import styles from './style.module.css';
import { SliceName } from '../../contexts/Routing/types';

type Props = {
  onNavigate?: () => void;
};

type MenuProps = {
  items: { text: string; icon: IconName }[];
  onNavigate?: () => void;
};

type MenuItemProps = {
  icon: IconName;
  text: string;
  onNavigate?: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ text, icon, onNavigate }) => {
  return (
    <div className={styles.menuItem}>
      <Icon name={icon} color={'invertedTextColor' as Color} size="xs" />
      <Link
        to={RouteName.SLICE}
        state={{ slice: text as SliceName }}
        onNavigate={onNavigate}
        className="morfeo-typography-h2"
        style={{
          color: 'var(--color-inverted-text-color)',
          marginBottom: 'var(--spacings-none)',
          marginLeft: 'var(--spacings-xxs)',
          cursor: 'pointer',
        }}
      >
        {text}
      </Link>
    </div>
  );
};

export const Menu: React.FC<MenuProps> = ({ items, onNavigate }) => (
  <div className={styles.linksContainer}>
    {items.map(({ text, icon }) => (
      <MenuItem key={text} icon={icon} text={text} onNavigate={onNavigate} />
    ))}
  </div>
);

export const Slices: React.FC<Props> = ({ onNavigate }) => {
  const slices = useThemeSlices();
  const items: MenuProps['items'] = useMemo(
    () =>
      slices.map(slice => ({
        text: slice,
        icon: 'slice',
      })),
    [slices],
  );

  return <Menu items={items} onNavigate={onNavigate} />;
};

export const Components: React.FC<Props> = ({ onNavigate }) => {
  const components = useThemeSlice('components');

  const items: MenuProps['items'] = useMemo(
    () =>
      Object.keys(components || {}).map(component => ({
        text: component,
        icon: 'component',
      })),
    [components],
  );

  return <Menu items={items} onNavigate={onNavigate} />;
};
