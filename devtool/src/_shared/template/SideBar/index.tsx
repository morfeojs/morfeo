import React, { useState, useCallback } from 'react';
import { Color } from '@morfeo/react';
import clsx from 'clsx';
import { Accordion, Icon } from '../../components';

import { Components, Slices } from './Menus';
import styles from './style.module.css';

type Props = {
  open?: boolean;
  setOpen: (open: boolean) => void;
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
            label="Slices"
            icon="slice"
          >
            <Slices onNavigate={toggle} />
          </Accordion>
          <Accordion
            open={openMenu === 'components'}
            setOpen={getAccordionHandler('components')}
            label="Components"
            icon="component"
          >
            <Components onNavigate={toggle} />
          </Accordion>
        </div>
        <button
          className={clsx('morfeo-button-round', styles.toggle)}
          onClick={toggle}
        >
          <Icon
            name="doubleChevron.right"
            color={'invertedTextColor' as Color}
          />
        </button>
      </div>
    </div>
  );
};
