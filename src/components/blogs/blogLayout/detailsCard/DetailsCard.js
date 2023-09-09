import Image from "next/image";
import styles from "./details.module.scss";
import ShareBtn from "../shareBtn/ShareBtn";
import { blogCardDate } from "@/utils/dates";

const DetailsCard = ({ data }) => {
  return (
    <div className={styles.details}>
      <div className={styles.author}>
        <div className={styles.authorProfile}>
          <Image
            src={data?.author.avatar_urls["96"]}
            alt={data?.author["name"]}
            width={100}
            height={100}
            className={styles.image}
          />
          <div className={styles.authorDetails}>
            <span className={styles.authorName}>
              {data?.author["name"]}
            </span>
          </div>
        </div>
        <ShareBtn />
      </div>
      <h1 className={`text-xl md:text-2xl`} dangerouslySetInnerHTML={{ __html: data?.title }} />
      <h3 className={styles.category}>
        {data.category}
      </h3>
      <span className={`text-xs text-gray-600 tracking-wider`}>
        Updated on: {blogCardDate(data.updatedAt, true)}
      </span>
    </div>
  )
}

export default DetailsCard