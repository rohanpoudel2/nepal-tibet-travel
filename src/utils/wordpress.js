const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const CUSTOM_BASE_URL = process.env.NEXT_PUBLIC_API_NTT_URL;

export const getPageData = async (slug) => {
  try {
    const res = await fetch(`${BASE_URL}/pages?slug=${slug}`, { next: { revalidate: 10 } });
    const parsedRes = await res.json();
    return (JSON.stringify(parsedRes));
  } catch (error) {
    console.log(error);
  }
}

export async function getBlogs(type = 'posts') {
  try {
    const blogRes = await fetch(`${BASE_URL}/${type}?_embed`, { next: { revalidate: 10 } });
    const blogs = await blogRes.json();
    return (JSON.stringify(blogs));
  } catch (error) {
    console.log(error);
  }
}

export async function getBlog(slug, type = 'posts') {
  try {
    let blogRes = await fetch(`${BASE_URL}/${type}?slug=${slug}&_embed`, { next: { revalidate: 10 } });
    const blog = await blogRes.json();
    return (JSON.stringify(blog));
  } catch (error) {
    console.log(error);
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
    console.log(error);
  }
}

export async function getRegionTours(slug, data) {
  try {
    const options = {
      method: 'GET',
      next: { revalidate: 10 },
      headers: {
        'Content-Type': 'application/json',
        'X-Custom-Data': JSON.stringify(data),
      },
    };
    const regionTourRes = await fetch(`${CUSTOM_BASE_URL}/trips?destination=${slug}`, options);
    const regionTours = await regionTourRes.json();
    return (JSON.stringify(regionTours))
  } catch (error) {
    console.log(error);
  }
}

export async function getTaxonomyName(id, name) {
  try {
    const countryRes = await fetch(`${BASE_URL}/${name}/${id}`, { next: { revalidate: 10 } });
    const countryDataRes = await countryRes.json();
    return (JSON.stringify(countryDataRes))
  } catch (error) {
    console.log(error);
  }
}

export async function getTripInfo(slug) {
  try {
    const tripRes = await fetch(`${BASE_URL}/trip?slug=${slug}&_embed`, { next: { revalidate: 10 } });
    const tripResData = await tripRes.json();
    return (JSON.stringify(tripResData));
  } catch (error) {
    console.log(error);
  }
}

export async function getFilterCountries() {
  try {
    const countryRes = await fetch(`${BASE_URL}/country?per_page=100`, { next: { revalidate: 10 } });
    const countryResData = await countryRes.json();

    const formattedCountries = countryResData.map(country => ({
      countryId: getCountryId(country.name),
      countryName: country.name,
      countrySlug: country.slug,
    }));

    formattedCountries.sort((a, b) => a.countryId - b.countryId);

    return JSON.stringify(formattedCountries);
  } catch (error) {
    console.log(error);
  }
}

function getCountryId(countryName) {
  const countryIdMap = {
    Nepal: [17, 30],
    Tibet: [37, 48],
    Bhutan: [46, 54],
  };
  return countryIdMap[countryName] || 0;
}


export async function getFilterActivities() {
  try {
    const activityRes = await fetch(`${BASE_URL}/activities?per_page=100`, { next: { revalidate: 10 } });
    const activityResData = await activityRes.json();
    const formattedActivities = activityResData.map(activity => ({
      activityParentId: activity.parent,
      activityId: activity.id,
      activityName: activity.name,
      activitySlug: activity.slug,
    })).filter(d => d.activityParentId !== 0);

    return JSON.stringify(formattedActivities);
  } catch (error) {
    console.log(error);
  }
}

export async function getFilterRegions() {
  try {
    const regionRes = await fetch(`${BASE_URL}/destination?per_page=100`, { next: { revalidate: 10 } });
    const regionResData = await regionRes.json();

    const formattedRegions = regionResData.map(region => ({
      regionParentId: region.parent,
      regionName: region.name,
      regionSlug: region.slug,
    })).filter(d => d.regionParentId !== 0);

    return JSON.stringify(formattedRegions);
  } catch (error) {
    console.log(error);
  }
}

export async function getMedia(id) {
  try {
    const mediaRes = await fetch(`${BASE_URL}/media/${id}`, { next: { revalidate: 10 } });
    const mediaResData = await mediaRes.json();
    return mediaResData;
  } catch (error) {
    console.log(error);
  }
}