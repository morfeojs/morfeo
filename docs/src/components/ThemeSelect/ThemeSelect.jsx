import React, { useState } from 'react';
import { morfeo, deepMerge } from '@morfeo/react';
import { lightTheme } from '@morfeo/preset-default';

const themes = {
  theme1: deepMerge(lightTheme, {
    colors: {
      primary: '#16a085',
    },
    radii: {
      m: '30px',
    },
    spacings: {
      s: '30px',
    },
  }),
  theme2: deepMerge(lightTheme, {
    colors: {
      primary: '#e67e22',
    },
    radii: {
      m: '30px',
    },
    spacings: {
      s: '20px',
    },
  }),
  theme3: deepMerge(lightTheme, {
    colors: {
      primary: '#8e44ad',
    },
    radii: {
      m: '30px',
    },
    spacings: {
      s: '40px',
    },
  }),
};

Object.keys(themes).forEach(name => morfeo.setTheme(name, themes[name]));

export function ThemeSelect({ style: baseStyle }) {
  const [selected, setSelected] = useState();
  const style = morfeo.resolve({
    ...baseStyle,
    transition: 'all 0.5s',
  });
  const applyTheme = name => {
    return () => {
      morfeo.setCurrentTheme(name);
      setSelected(name);
    };
  };
  return (
    <>
      <button
        className="button button--primary button--lg margin--sm"
        onClick={applyTheme('theme1')}
        style={{
          backgroundColor: themes['theme1'].colors['primary'],
          borderColor: themes['theme1'].colors['primary'],
        }}
      >
        Apply theme #1
      </button>
      <button
        className="button button--primary button--lg margin--sm"
        onClick={applyTheme('theme2')}
        style={{
          backgroundColor: themes['theme2'].colors['primary'],
          borderColor: themes['theme2'].colors['primary'],
        }}
      >
        Apply theme #2
      </button>
      <button
        className="button button--primary button--lg margin--sm"
        onClick={applyTheme('theme3')}
        style={{
          backgroundColor: themes['theme3'].colors['primary'],
          borderColor: themes['theme3'].colors['primary'],
        }}
      >
        Apply theme #3
      </button>
      {selected && <div style={morfeo.resolve(style)}></div>}
    </>
  );
}
