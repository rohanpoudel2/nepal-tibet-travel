import Hero from "@/components/blogs/blogLayout/hero/Hero";
import BlogContent from "@/components/blogs/blogLayout/blogContent/BlogContent";
import BlogRecommendation from "@/components/blogs/blogLayout/blogRecommendation/BlogRecommendation";
import { getBlog } from "@/utils/wordpress";
import { notFound } from "next/navigation";
import Sidebar from "@/components/blogs/sidebarRecommendation/Sidebar";
import { Separator } from "@/components/ui/separator";
import GoBack from "@/components/activity/hero/goback/GoBack";

const getData = async (slug) => {
  const res = await getBlog(slug);
  if (!res) {
    return;
  }
  let response = JSON.parse(res);
  if (response.length === 0) return notFound();
  return response;
}

const Blog = async ({ params }) => {
  const data = await getData(params?.slug);
  const blogData = data[0];
  return (
    <section className="bg-white">
      <div className="container px-6 mx-auto">
        <GoBack className="mb-5 block md:hidden" />
        <div className="lg:flex lg:-mx-6 mb-5">
          <Hero
            image={blogData['_embedded']['wp:featuredmedia'][0].source_url}
            detailCard={{
              author: blogData["_embedded"]?.author[0],
              title: blogData?.title.rendered,
              category: blogData?._embedded["wp:term"][0][0].name,
              updatedAt: blogData?.modified
            }}
          />
          <Sidebar
            data={{
              recommended: blogData.acf.recommended_blog,
              others: [blogData.acf.other_links]
            }}
            top={true}
          />
        </div>
        <Separator />
        <BlogContent
          data={blogData?.content.rendered}
        />
        <div>
          <Sidebar />
        </div>
      </div>
    </section>
  )
}

export default Blog