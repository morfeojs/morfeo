import React from 'react';
import Logo from '@theme/Logo';
import packageJson from '../../../../package.json';
import classes from './Logo.module.css';

export default function NavbarLogo() {
  return (
    <div className={classes.container}>
      <Logo
        className="navbar__brand"
        imageClassName="navbar__logo"
        titleClassName="navbar__title text--truncate"
      />
      <span className={classes.version}>v{packageJson.version}</span>
    </div>
  );
}
