import React, { useMemo } from 'react';
import { Color, useThemeSlice } from '@morfeo/react';
import { Icon, Link } from '../../components';
import { RouteName } from '../../contexts';
import { SliceName } from '../../contexts/Routing/types';
import { IconName } from '../../components/Icon/icons';
import { useSlicesWithStatus } from '../../hooks';
import styles from './style.module.css';
import { SliceStatus } from '../../types';
import clsx from 'clsx';

type Props = {
  onNavigate?: () => void;
};

type MenuItemType = {
  to?: RouteName;
  text: string;
  icon: IconName;
  route: SliceName;
  detail?: string;
  status?: SliceStatus;
};

type MenuProps = {
  items: MenuItemType[];
  onNavigate?: () => void;
};

type MenuItemProps = MenuItemType & {
  onNavigate?: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({
  to = RouteName.SLICE,
  text,
  icon,
  route,
  detail,
  status,
  onNavigate,
}) => {
  const isNotActive =
    status && [SliceStatus.INACTIVE, SliceStatus.COMING_SOON].includes(status);
  const opacityStyle = {
    opacity: isNotActive ? 'var(--opacities-medium)' : 1,
  };
  return (
    <div className={clsx(styles.menuItem, isNotActive && styles.inactiveItem)}>
      <Icon
        name={icon}
        color={(isNotActive ? 'gray.lighter' : 'invertedTextColor') as Color}
        size="xs"
        style={opacityStyle}
      />
      <Link
        to={to}
        state={{ slice: route, detailKey: detail }}
        onNavigate={onNavigate}
        disabled={isNotActive}
        className="morfeo-typography-h3"
        style={{
          ...opacityStyle,
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
    {items.map(item => (
      <MenuItem
        key={`${item.route}-${item.detail}`}
        {...item}
        onNavigate={onNavigate}
      />
    ))}
  </div>
);

export const Slices: React.FC<Props> = ({ onNavigate }) => {
  const slices = useSlicesWithStatus();
  const items: MenuItemType[] = useMemo(
    () =>
      slices.map(slice => ({
        text: slice.name,
        route: slice.name as SliceName,
        icon: 'slice',
        status: slice.status,
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
        to: RouteName.COMPONENT,
        text: component,
        route: SliceName.COMPONENTS,
        detail: component,
        icon: 'component',
      })),
    [components],
  );

  return <Menu items={items} onNavigate={onNavigate} />;
};
