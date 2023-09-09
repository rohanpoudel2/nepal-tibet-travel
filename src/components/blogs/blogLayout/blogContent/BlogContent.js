import styles from "./blogcontent.module.scss";

const BlogContent = ({ data }) => {
  return (
    <div className={styles.blogContent} dangerouslySetInnerHTML={{ __html: data }} />
  )
}

export default BlogContent