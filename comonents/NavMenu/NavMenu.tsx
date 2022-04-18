import Link from "next/link";

import styles from "../../styles/Nav.module.scss";

const NavMenu = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.nav_title}>ANIMESHKA</h1>
      <ul className={styles.nav_list}>
        <li>
          <Link href="#">Anime</Link>
        </li>
        <li>
          <Link href="#">Manga</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
