import { blogCardDate } from "@/utils/dates";
import styles from "./informationpage.module.scss";

const Terms = ({ title, updatedOn, content }) => {
  return (
    <div className='h-full'>
      <div className='bg-[#47A5CF]'>
        <div className='container py-[50px]'>
          <div className='text-white'>
            <h1 className='text-3xl'>{title}</h1>
            <h3 className='text-base font-normal'>Last Updated: {blogCardDate(updatedOn)}</h3>
          </div>
        </div>
      </div>
      <section className={styles.terms}>
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </section>
    </div>
  )
}

export default Terms