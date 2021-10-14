import React, { useState, useCallback } from 'react';
import { Color } from '@morfeo/react';
import clsx from 'clsx';
import browser from 'webextension-polyfill';
import { t } from '../../utils';
import { Accordion, Icon } from '../../components';
import { Components, Slices } from './Menus';
import styles from './style.module.css';

type Props = {
  open?: boolean;
  setOpen: (open: boolean) => void;
};

type ExternalLinkProps = {
  to: string;
};

export const ExternalLink: React.FC<ExternalLinkProps> = ({ to, children }) => {
  const onClick = useCallback(() => {
    browser.tabs
      .create({
        url: to,
      })
      .then(() => undefined)
      .catch(() => undefined);
  }, [to]);

  return (
    <h2
      onClick={onClick}
      className="morfeo-typography-h2  ml-xxs"
      style={{ cursor: 'pointer', color: 'var(--colors-inverted-text-color)' }}
    >
      {children}
    </h2>
  );
};

export const SideBar: React.FC<Props> = ({ open, setOpen }) => {
  const [openMenu, setOpenMenu] = useState<string>();

  const toggle = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  const getAccordionHandler = useCallback((name: string) => {
    return (isOpen: boolean) => setOpenMenu(isOpen ? name : undefined);
  }, []);

  return (
    <div className={clsx(styles.container, open && styles.open)}>
      <div className={styles.sidebar}>
        <div className={styles.menuContainer}>
          <Accordion
            open={openMenu === 'slices'}
            setOpen={getAccordionHandler('slices')}
            label={t('menu_slices')}
            icon="slice"
          >
            <Slices onNavigate={toggle} />
          </Accordion>
          <Accordion
            open={openMenu === 'components'}
            setOpen={getAccordionHandler('components')}
            label={t('menu_components')}
            icon="component"
          >
            <Components onNavigate={toggle} />
          </Accordion>
        </div>
        <button
          className={clsx('morfeo-button-side', styles.toggle)}
          onClick={toggle}
        >
          <Icon
            name="doubleChevron.right"
            color={'invertedTextColor' as Color}
          />
        </button>
      </div>
      <div className={styles.sidebarFooter}>
        <div className={styles.footerItem}>
          <Icon name="docs" size="m" color={'invertedTextColor' as Color} />
          <ExternalLink to="https://morfeo.dev/">Docs</ExternalLink>
        </div>
        <div className={styles.footerItem}>
          <Icon name="credits" size="m" color={'invertedTextColor' as Color} />
          <h2
            className="morfeo-typography-h2 ml-xxs"
            style={{
              cursor: 'pointer',
              color: 'var(--colors-inverted-text-color)',
            }}
          >
            Credits
          </h2>
        </div>
        <div className={styles.footerItem}>
          <Icon name="github" size="m" color={'invertedTextColor' as Color} />
          <ExternalLink to="https://github.com/VLK-STUDIO/morfeo">
            Github
          </ExternalLink>
        </div>
      </div>
    </div>
  );
};
