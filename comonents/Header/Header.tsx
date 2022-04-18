import Image from "next/image";
import { ReactNode } from "react";

import zenitzhu from "../../public/slide_pictures/Zenizhu.jpeg";
import zenitzhu2 from "../../public/slide_pictures/Zenizhu_2.jpeg";
import fushigura from "../../public/slide_pictures/Fushigura.jpeg";
import rengoku from "../../public/slide_pictures/Rengoku.jpeg";

import styles from "../../styles/Header.module.scss";
import Center_Container from "../Center_Container/Center_Container";

const Header = ({ children }: { children?: ReactNode }) => {
  return (
    <header className={styles.header}>
      {children}
      <Center_Container>
        <Image
          alt="image"
          src="/slide_pictures/Zenizhu.jpeg"
          width={1280}
          height={720}
        />
      </Center_Container>
    </header>
  );
};

export default Header;
