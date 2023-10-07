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

export async function getCountryRegions(country, activityId) {
  try {
    const parentDestinationResponse = await fetch(`${BASE_URL}/destination?slug=${country}`, { next: { revalidate: 10 } });
    const parentDestination = await parentDestinationResponse.json();
    const parentDestinationId = parentDestination[0].id;
    const tripResponse = await fetch(`${BASE_URL}/trip?activities=${activityId}`, { next: { revalidate: 10 } });
    const trips = await tripResponse.json();
    const activityResponse = await fetch(`${BASE_URL}/activities/${activityId}`, { next: { revalidate: 10 } });
    const activity = await activityResponse.json();
    const destinationIds = [...new Set(trips.map(trip => trip.destination[0]))];
    const destinationPromises = destinationIds.map(destinationId => {
      return fetch(`${BASE_URL}/destination/${destinationId}`).then(response => response.json(), { next: { revalidate: 10 } });
    });
    const destinations = await Promise.all(destinationPromises);
    const responseObj = {
      activity: activity,
      countryRegions: destinations.filter(destination => destination.parent === parentDestinationId)
    };
    return JSON.stringify(responseObj);
  } catch (error) {
    console.error(error);
  }
}

export async function getRegionTours(id, embed = false) {
  try {
    const regionTourRes = await fetch(`${BASE_URL}/trip?destination=${id}${embed ? '&_embed' : ''}`, { next: { revalidate: 10 } });
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