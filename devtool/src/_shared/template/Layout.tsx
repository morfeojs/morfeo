import React, { useState } from "react";
import clsx from "clsx";
import { RoutingProvider } from "../contexts";
import { SideBar } from "./SideBar";
import { Header } from "./Header";

import styles from "./style.module.css";

export const Layout: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <RoutingProvider>
      <main
        className={clsx(styles.main, open && styles.open)}
        data-morfeo-theme="light"
      >
        <SideBar open={open} setOpen={setOpen} />
        <Header />
        <div className={clsx(styles.overlay, open && styles.open)} />
        <section className={clsx(styles.content, open && styles.open)}>
          {children}
        </section>
      </main>
    </RoutingProvider>
  );
};
