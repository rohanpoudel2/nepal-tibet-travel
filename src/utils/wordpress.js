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

export async function getBlogs(type = 'posts') {
  try {
    const blogRes = await fetch(`${BASE_URL}/${type}?_embed`, { next: { revalidate: 10 } });
    const blogs = await blogRes.json();
    return (JSON.stringify(blogs));
  } catch (error) {
    console.error(error);
  }
}

export async function getBlog(slug, type = 'posts') {
  let blogRes
  try {
    if (type == 'posts') {
      blogRes = await fetch(`${BASE_URL}/${type}?filter[slug]=${slug}&_embed`, { next: { revalidate: 10 } });
    } else {
      blogRes = await fetch(`${BASE_URL}/${type}?slug=${slug}&_embed`, { next: { revalidate: 10 } });
    }
    const blog = await blogRes.json();
    return (JSON.stringify(blog));
  } catch (error) {
    console.error(error);
  }
}

export async function getRegions(id = 17) {
  try {
    const destinationRes = await fetch(`${BASE_URL}/destination?parent=${id}&_embed`, { next: { revalidate: 10 } });
    const destinations = await destinationRes.json();
    return (JSON.stringify(destinations));
  } catch (error) {
    console.error(error);
  }
}

export async function getRegionTours(slug, embed = false) {
  try {
    const regionTourRes = await fetch(`${BASE_URL}/trip?destination_slug=${slug}${embed ? '&_embed' : ''}`, { next: { revalidate: 10 } });
    const regionTours = await regionTourRes.json();
    return (JSON.stringify(regionTours))
  } catch (error) {
    console.error(error);
  }
}

export async function getTaxonomyName(id, name) {
  try {
    const countryRes = await fetch(`${BASE_URL}/${name}/${id}`, { next: { revalidate: 10 } });
    const countryDataRes = await countryRes.json();
    return (JSON.stringify(countryDataRes))
  } catch (error) {
    console.error(error);
  }
}