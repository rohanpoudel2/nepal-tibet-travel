"use client"
import Image from "next/image";
import styles from "./nav.module.scss";
import { useContext, useEffect, useState } from "react";
import MenuItem from "./MenuItem/MenuItem";
import Link from "next/link";
import SearchModal from "./searchModal/SearchModal";
import { usePathname } from "next/navigation";
import { ModalContext } from "@/context/ModalContext";
import Modal from "../ui/modal/Modal";

const Nav = () => {

  const [colourChange, setColourChange] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { openModal } = useContext(ModalContext);
  const pathname = usePathname();

  useEffect(() => {
    const changeNavColour = () => {
      if (window.scrollY >= 80) {
        setColourChange(true);
      } else {
        setColourChange(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMobileNav(false);
      }
    }

    window.addEventListener("scroll", changeNavColour);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", changeNavColour);
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    setShowSearchModal(false);
  }, [pathname])

  const showMobileItems = () => {
    setShowMobileNav(p => !p);
    if (!showMobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }



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
              <Image
                src="/images/mactrek_small.svg"
                alt="logo"
                fill
                className={styles.image_small}
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
              <div className={styles.search} onClick={() => setShowSearchModal(!showSearchModal)}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
          <div id="mobile_nav_items" className={styles.mobile_nav_items} style={{ display: showMobileNav ? "flex" : "none" }}>
            <Image
              src="/images/mobile_nav_background.jpeg"
              alt="nav_background"
              fill
              className={styles.mobile_nav_background}
            />
            <div className={styles.close_nav} onClick={showMobileItems}>
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className={styles.mobile_nav_item}>
              <MenuItem
                data={
                  {
                    title: "nepal",
                    link: "/country/nepal",
                  }
                }
              />
            </div>
            <div className={styles.mobile_nav_item}>
              <MenuItem
                data={
                  {
                    title: "tibet",
                    link: "/country/nepal",
                  }
                }
              />
            </div>
            <div className={styles.mobile_nav_item}>
              <MenuItem
                data={
                  {
                    title: "bhutal",
                    link: "/country/nepal",
                  }
                }
              />
            </div>
            <div className={styles.navItem}>
              <div className={styles.search} onClick={() => setShowSearchModal(!showSearchModal)}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
          <div className={styles.open_nav} onClick={showMobileItems}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
      {
        showSearchModal && <SearchModal setShowModal={setShowSearchModal} showModal={showSearchModal} />
      }
      {
        openModal && <Modal />
      }
    </div >
  )
}

export default Nav