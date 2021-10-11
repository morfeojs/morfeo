import React from "react";
import { ThemeKey } from "@morfeo/react";
import { Link } from "../Link";
import { RouteName } from "../../../_shared/contexts";
import { useRouter } from "../../hooks";

import styles from "./style.module.css";
import clsx from "clsx";

type Props = {
  slice: ThemeKey;
};

export const SliceCard: React.FC<Props> = ({ slice }) => {
  const { navigate } = useRouter();
  return (
    <div
      className={clsx("morfeo-card", styles.sliceCard)}
      onClick={() => navigate(slice as RouteName)}
    >
      <Link to={slice as RouteName}>{slice}</Link>
      <button className="morfeo-button-round height-l width-l mt-s" />
    </div>
  );
};
