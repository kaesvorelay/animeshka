import { ReactNode } from "react";

import styles from "../../styles/Center_Container.module.scss";

const Center_Container = ({ children }: { children: ReactNode }) => {
  return <div className={styles.center_container}>{children}</div>;
};

export default Center_Container;
