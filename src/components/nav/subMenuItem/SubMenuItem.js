import Link from "next/link";
import styles from "./submenuitem.module.scss";

const SubMenuItem = ({ name, link }) => {

  return (
    <Link href={link}>
      <div className={styles.submenu_item}>
        {name}
      </div>
    </Link>
  )
}

export default SubMenuItem