import React, { useState } from 'react';
import { theme, parsers } from '@morfeo/react';

const themes = {
  theme1: {
    colors: {
      'primary.300': '#16a085',
    },
    radii: {
      m: '30px',
    },
    spacings: {
      s: '30px',
    },
  },
  theme2: {
    colors: {
      'primary.300': '#e67e22',
    },
    radii: {
      m: '30px',
    },
    spacings: {
      s: '20px',
    },
  },
  theme3: {
    colors: {
      'primary.300': '#8e44ad',
    },
    radii: {
      m: '30px',
    },
    spacings: {
      s: '40px',
    },
  },
};

export function ThemeSelect({ style: baseStyle }) {
  const [selected, setSelected] = useState();
  const style = parsers.resolve({
    ...baseStyle,
    transition: 'all 0.5s',
  });
  const applyTheme = name => {
    return () => {
      theme.set(themes[name]);
      setSelected(name);
    };
  };
  return (
    <>
      <button
        className="button button--primary button--lg margin--sm"
        onClick={applyTheme('theme1')}
        style={{
          backgroundColor: themes['theme1'].colors['primary.300'],
          borderColor: themes['theme1'].colors['primary.300'],
        }}
      >
        Apply theme #1
      </button>
      <button
        className="button button--primary button--lg margin--sm"
        onClick={applyTheme('theme2')}
        style={{
          backgroundColor: themes['theme2'].colors['primary.300'],
          borderColor: themes['theme2'].colors['primary.300'],
        }}
      >
        Apply theme #2
      </button>
      <button
        className="button button--primary button--lg margin--sm"
        onClick={applyTheme('theme3')}
        style={{
          backgroundColor: themes['theme3'].colors['primary.300'],
          borderColor: themes['theme3'].colors['primary.300'],
        }}
      >
        Apply theme #3
      </button>
      {selected && <div style={parsers.resolve(style)}></div>}
    </>
  );
}
