import React from 'react';
import { Color, useStyle } from '@morfeo/react';
import { Card } from '../../../Card';
import { useRouter } from '../../../../hooks';
import styles from './style.module.css';

function hex2rgba(code: string) {
  let hex = code.replace(/[^0-9a-fA-F]/g, '');

  if (hex.length < 5) {
    hex = hex
      .split('')
      .map(s => s + s)
      .join('');
  }

  const rgba: (string | number)[] =
    hex.match(/.{1,2}/g)?.map(s => parseInt(s, 16)) || [];

  const alpha =
    rgba.length > 3
      ? parseFloat((parseInt(rgba[3].toString()) / 255).toString()).toFixed(2)
      : 1;

  return `${alpha !== 1 ? 'rgba' : 'rgb'}(${rgba.join(', ')})`;
}

function rgba2hex(color: string) {
  const rgba = color.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
  return `#${(
    (1 << 24) +
    (parseInt(rgba[0]) << 16) +
    (parseInt(rgba[1]) << 8) +
    parseInt(rgba[2])
  )
    .toString(16)
    .slice(1)}`;
}

export const Detail: React.FC = () => {
  const { route } = useRouter();
  const { state } = route;

  const cardStyle = useStyle({ bg: state?.detailKey as Color });
  const bgColor = cardStyle['background']?.toString() || '#fff';

  return (
    <div className={styles.container}>
      <Card
        className="morfeo-card-primary"
        style={{ bg: state?.detailKey as Color }}
      />
      <div className={styles.colorsCodesContainer}>
        <h2 className="morfeo-typography-h2">
          RGBA: {bgColor.includes('#') ? hex2rgba(bgColor) : bgColor}
        </h2>
        <h2 className="morfeo-typography-h2">
          HEX: {bgColor.includes('#') ? bgColor : rgba2hex(bgColor)}
        </h2>
      </div>
    </div>
  );
};
