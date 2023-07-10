"use client"
import Image from "next/image";
import styles from "./nav.module.scss";
import { useEffect, useState } from "react";

const Nav = () => {

  const [colourChange, setColourChange] = useState(false);

  useEffect(() => {
    const changeNavColour = () => {
      if (window.scrollY >= 80) {
        setColourChange(true);
      } else {
        setColourChange(false);
      }
    };

    window.addEventListener("scroll", changeNavColour);

    return () => {
      window.removeEventListener("scroll", changeNavColour);
    }
  }, []);

  return (
    <div className={styles.navbar} style={{ backgroundColor: colourChange ? "white" : "rgba(255,255,255,0.5)" }} >
      <div className="container">
        <div className={styles.nav}>
          <div className={styles.logo}>
            <Image
              src="/images/mactrek.svg"
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.navItems}>
            <div className={styles.navItem}>home</div>
            <div className={styles.navItem}>nepal</div>
            <div className={styles.navItem}>tibet</div>
            <div className={styles.navItem}>bhutan</div>
            <div className={styles.navItem}>
              <div className={styles.search}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Nav