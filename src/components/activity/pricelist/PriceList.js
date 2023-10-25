import styles from "./pricelist.module.scss";

const PriceList = () => {
  return (
    <div className={styles.pricelist}>
      <h2 className={styles.title}>
        Price List
      </h2>
      <div className="flex gap-5 items-start">
        <div className="flex-1 flex flex-col gap-[10px]">
          <span className="font-bold">Group Joining</span>
          <div className={`${styles.lists}`}>
            <span className={styles.list}>
              $1,495 (1-3 Person)
            </span>
            <span className={styles.list}>
              $1,450 (4-7 Person)
            </span>
            <span className={styles.list}>
              $1,395 (8-11 Person)
            </span>
            <span className={styles.list}>
              $1,350 (12+ Person)
            </span>
          </div>
        </div>
        <div className="flex-1">
          <span className="font-bold">Private Tour</span>
        </div>
      </div>
    </div>
  )
}

export default PriceList
