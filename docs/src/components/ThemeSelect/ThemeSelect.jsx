import React, { useEffect } from 'react';
import { deepMerge } from '@morfeo/utils';
import { morfeo, useCurrentTheme } from '@morfeo/react';
import { lightTheme } from '@morfeo/preset-default';

const themes = {
  'Theme #1': deepMerge(lightTheme, {
    colors: {
      primary: '#16a085',
      background: '#16a085',
      text: '#ffffff',
    },
    radii: {
      m: '30px',
    },
    spacings: {
      s: '30px',
    },
  }),
  'Theme #2': deepMerge(lightTheme, {
    colors: {
      primary: '#e67e22',
      background: '#e67e22',
      text: '#ffffff',
    },
    radii: {
      m: '30px',
    },
    spacings: {
      s: '20px',
    },
  }),
  'Theme #3': deepMerge(lightTheme, {
    colors: {
      primary: '#8e44ad',
      background: '#8e44ad',
      text: '#ffffff',
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
  const [currentTheme, setCurrentTheme] = useCurrentTheme();
  const style = morfeo.resolve({
    ...baseStyle,
    transition: 'all 0.5s',
    fontSize: 'xl',
    fontWeight: 'bold',
    shadow: 'medium',
  });

  const applyTheme = name => {
    return () => {
      setCurrentTheme(name);
    };
  };

  useEffect(() => {
    return () => {
      setCurrentTheme('light');
    };
  }, []);

  return (
    <>
      {Object.keys(themes).map(themeName => (
        <button
          key={themeName}
          className="button button--primary button--lg margin--sm"
          onClick={applyTheme(themeName)}
          style={{
            backgroundColor: themes[themeName].colors['primary'],
            borderColor: themes[themeName].colors['primary'],
          }}
        >
          Apply {themeName}
        </button>
      ))}
      <div style={morfeo.resolve(style)}>Current theme: {currentTheme}</div>
    </>
  );
}
