import Hero from "@/components/blogs/blogLayout/hero/Hero";
import styles from "./blog.module.scss";
import BlogContent from "@/components/blogs/blogLayout/blogContent/BlogContent";
import BlogRecommendation from "@/components/blogs/blogLayout/blogRecommendation/BlogRecommendation";
import { getBlog } from "@/utils/wordpress";

const getData = async (slug) => {
  const res = await getBlog(slug);
  if (!res) {
    return;
  }
  return JSON.parse(res);
}

const Blog = async ({ params }) => {

  const data = await getData(params?.slug);
  const blogData = data[0];

  return (
    <div className={styles.blog}>
      <Hero image={blogData?.acf.hero_image}
        detailCard={{
          author: blogData["_embedded"]?.author[0],
          title: blogData?.title.rendered,
          category: blogData?._embedded["wp:term"][0][0].name,
          updatedAt: blogData?.modified
        }}
      />
      <div className="container">
        <BlogContent
          data={blogData?.content.rendered}
        />
        <BlogRecommendation
          data={blogData?.acf.recommended_blog}
        />
      </div>
    </div>
  )
}

export default Blog