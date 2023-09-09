const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getPageData = async (slug) => {
  try {
    const res = await fetch(`${BASE_URL}/pages?slug=${slug}`, { next: { revalidate: 10 } });
    const parsedRes = await res.json();
    return (JSON.stringify(parsedRes));
  } catch (error) {
    console.error(error);
  }
}

export async function getBlogs() {
  try {
    const blogRes = await fetch(`${BASE_URL}/posts?_embed`, { next: { revalidate: 10 } });
    const blogs = await blogRes.json();
    return (JSON.stringify(blogs));
  } catch (error) {
    console.error(error);
  }
}

export async function getBlog(slug) {
  try {
    const blogRes = await fetch(`${BASE_URL}/posts?filter[slug]=${slug}&_embed`, { next: { revalidate: 10 } });
    const blog = await blogRes.json();
    return (JSON.stringify(blog));
  } catch (error) {
    console.error(error);
  }
}