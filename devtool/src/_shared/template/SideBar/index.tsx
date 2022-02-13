import React, { useState, useCallback } from 'react';
import { Color } from '@morfeo/react';
import clsx from 'clsx';
import browser from 'webextension-polyfill';
import { t } from '../../utils';
import { Accordion, Icon, Link } from '../../components';
import { Components, Slices } from './Menus';
import styles from './style.module.css';
import { RouteName } from '../../contexts';

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
    <h3
      onClick={onClick}
      className="morfeo-typography-h3  ml-2xs"
      style={{ cursor: 'pointer', color: 'var(--colors-inverted-text)' }}
    >
      {children}
    </h3>
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
          <div className="mb-3xs" />
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
            color={'invertedText' as Color}
          />
        </button>
      </div>
      <div className={styles.sidebarFooter}>
        <div className={styles.footerItem}>
          <Icon name="docs" size="s" color={'invertedText' as Color} />
          <ExternalLink to="https://morfeo.dev/">
            {t('sidebarDocs')}
          </ExternalLink>
        </div>
        <div className={styles.footerItem}>
          <Icon name="credits" size="s" color={'invertedText' as Color} />
          <Link
            className="morfeo-typography-h3 ml-2xs"
            style={{
              cursor: 'pointer',
              color: 'var(--colors-inverted-text)',
            }}
            to={RouteName.CREDITS}
            onNavigate={toggle}
          >
            {t('sidebarCredits')}
          </Link>
        </div>
        <div className={styles.footerItem}>
          <Icon name="github" size="s" color={'invertedText' as Color} />
          <ExternalLink to="https://github.com/morfeojs/morfeo">
            {t('sidebarGithub')}
          </ExternalLink>
        </div>
      </div>
    </div>
  );
};
