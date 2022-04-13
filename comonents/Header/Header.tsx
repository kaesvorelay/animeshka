import { ReactNode } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay, WithAutoPlayProps } from "react-swipeable-views-utils";

import styles from "../../styles/Header.module.scss";
const AutoPlaySwipeableViews: any = autoPlay(SwipeableViews);

const Header = ({ children }: { children?: ReactNode }) => {
  return (
    <header className={styles.header}>
      {children}
      <AutoPlaySwipeableViews>
        <div>slide n°1</div>
        <div>slide n°2</div>
        <div>slide n°3</div>
      </AutoPlaySwipeableViews>
    </header>
  );
};

export default Header;
