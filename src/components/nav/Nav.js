"use client"
import Image from "next/image";
import styles from "./nav.module.scss";
import { useEffect, useState } from "react";
import MenuItem from "./MenuItem/MenuItem";
import Link from "next/link";

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
          <Link href="/">
            <div className={styles.logo}>
              <Image
                src="/images/mactrek.svg"
                alt="logo"
                fill
                className={styles.image}
              />
            </div>
          </Link>
          <div className={styles.navItems}>
            <div className={styles.navItem}>
              <Link href="/">
                home
              </Link>
            </div>
            <MenuItem
              data={
                {
                  title: "nepal",
                  link: "/country/nepal",
                  subMenu: [
                    {
                      name: "Nepal Information",
                      link: "/country/nepal",
                    },
                    {
                      name: "Trekking",
                      link: "/country/nepal/trekking",
                    },
                    {
                      name: "Tour",
                      link: "/country/nepal/tour",
                    },
                    {
                      name: "Peak Climbing",
                      link: "/country/nepal/peak-climbing",
                    },
                    {
                      name: "Jungle Safari",
                      link: "/country/nepal/jungle-safari",
                    },
                    {
                      name: "Expedition",
                      link: "/country/nepal/expedition",
                    },
                    {
                      name: "Adventure Activities",
                      link: "/country/nepal/adventure-activities",
                    },
                  ]
                }
              }
            />
            <div className={styles.navItem}>
              <MenuItem
                data={
                  {
                    title: "tibet",
                    link: "/country/tibet",
                    subMenu: [
                      {
                        name: "Tibet Information",
                        link: "/country/tibet",
                      },
                      {
                        name: "Expedition",
                        link: "/country/tibet/expedition",
                      },
                      {
                        name: "Tour",
                        link: "/country/tibet/tour",
                      },
                      {
                        name: "Kailash Manosarovar Tour",
                        link: "#",
                      },
                      {
                        name: "Festival Tour",
                        link: "/country/tibet/festival-tour",
                      },
                      {
                        name: "Adventure Activities",
                        link: "/country/tibet/adventure-activities",
                      },
                    ]
                  }
                }
              />
            </div>
            <div className={styles.navItem}>
              <MenuItem
                data={
                  {
                    title: "bhutan",
                    link: "/country/bhutan",
                    subMenu: [
                      {
                        name: "Bhutan Information",
                        link: "/country/bhutan",
                      },
                      {
                        name: "Tour",
                        link: "/country/bhutan/tour",
                      },
                      {
                        name: "Trekking",
                        link: "/country/bhutan/trekking",
                      }
                    ]
                  }
                }
              />
            </div>
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