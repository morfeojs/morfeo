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

type MenuItemType = {
  text: string;
  icon: IconName;
  route: SliceName;
  detail?: string;
};

type MenuProps = {
  items: MenuItemType[];
  onNavigate?: () => void;
};

type MenuItemProps = MenuItemType & {
  onNavigate?: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({
  text,
  icon,
  route,
  detail,
  onNavigate,
}) => {
  return (
    <div className={styles.menuItem}>
      <Icon name={icon} color={'invertedTextColor' as Color} size="xs" />
      <Link
        to={RouteName.SLICE}
        state={{ slice: route, detailKey: detail?.toLowerCase() }}
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
    {items.map(({ text, icon, route, detail }) => (
      <MenuItem
        key={`${route}-${detail}`}
        icon={icon}
        route={route}
        detail={detail}
        text={text}
        onNavigate={onNavigate}
      />
    ))}
  </div>
);

export const Slices: React.FC<Props> = ({ onNavigate }) => {
  const slices = useThemeSlices();
  const items: MenuItemType[] = useMemo(
    () =>
      slices.map(slice => ({
        text: slice,
        route: slice as SliceName,
        icon: 'slice',
      })),
    [slices],
  );

  return <Menu items={items} onNavigate={onNavigate} />;
};

export const Components: React.FC<Props> = ({ onNavigate }) => {
  const components = useThemeSlice('components');

  const items: MenuItemType[] = useMemo(
    () =>
      Object.keys(components || {}).map(component => ({
        text: component,
        route: SliceName.COMPONENTS,
        detail: component,
        icon: 'component',
      })),
    [components],
  );

  return <Menu items={items} onNavigate={onNavigate} />;
};
