import React, { useCallback } from "react";
import { Link } from "../../components";
import { RouteName } from "../../contexts";
import { useMemo } from "react";
import clsx from "clsx";

import { useThemeSlices } from "../../hooks";
import styles from "./style.module.css";

type Props = {
  open?: boolean;
  setOpen: (open: boolean) => void;
};

export const SideBar: React.FC<Props> = ({ open, setOpen }) => {
  const slices = useThemeSlices();

  const renderedSlices = useMemo(
    () =>
      slices.map((slice) => (
        <Link
          key={slice}
          to={slice as RouteName}
          onNavigate={() => setOpen(false)}
        >
          {slice}
        </Link>
      )),
    [setOpen, slices]
  );

  const toggle = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  return (
    <div className={clsx(styles.sidebar, open && styles.open)}>
      <div className={styles.linksContainer}>{renderedSlices}</div>
      <button
        className={clsx("morfeo-button-round", styles.toggle)}
        onClick={toggle}
      >
        {open ? "-" : "+"}
      </button>
    </div>
  );
};
