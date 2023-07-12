import styles from "./menuitem.module.scss";
import { useState } from "react";
import SubMenuItem from "../subMenuItem/SubMenuItem";
import Link from "next/link";

const MenuItem = ({ data }) => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
  }
  return (
    <Link href={data?.link}>
      <div
        className={styles.navItem}
        onClick={showMenu}
        onMouseOver={() => setMenu(true)}
        onMouseLeave={() => setMenu(false)}
      >
        {data?.title}
        {
          menu &&
          <div className={styles.subMenu}>
            {
              data?.subMenu.map((data, index) => (
                <div className={styles.submenu_item} key={index}>
                  <SubMenuItem
                    name={data?.name}
                    link={data?.link}
                  />
                </div>
              ))
            }
          </div>
        }
      </div>
    </Link>
  )
}

export default MenuItem