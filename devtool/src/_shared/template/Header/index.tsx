import clsx from "clsx";
import React from "react";
import { BackLink } from "../../components";
import { useRouter } from "../../hooks";
import styles from "./style.module.css";

export const Header: React.FC = () => {
  const { history } = useRouter();
  const canGoBack = history.length > 0;

  return (
    <header className={styles.header}>
      {canGoBack && (
        <BackLink
          className={styles.backButton}
          style={{
            color: "var(--colors-inverted-text-color)",
            fontSize: "var(--font-sizes-xxl)",
            cursor: "pointer",
          }}
        >
          {"⬅️"}
        </BackLink>
      )}
      <h1 className={clsx("color-inverted-text-color", styles.title)}>
        morfeo
      </h1>
    </header>
  );
};
