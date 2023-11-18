"use client"
import { startTransition, useEffect, useState } from "react";
import Title from "@/components/ui/title/Title";
import { Star } from "@/components/ui/star";
import { Favorites } from "@/actions/favorites";
import Link from "next/link";

const Favorite = () => {
  const [favoriteTrips, setFavoriteTrips] = useState([]);
  const [trips, setTrips] = useState([]);
  const [updateFlag, setUpdateFlag] = useState(false);


  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
    setFavoriteTrips(favorites);
  }, []);

  useEffect(() => {
    if (favoriteTrips.length || updateFlag) {
      const boundFavorites = favoriteTrips.map(id => Favorites.bind(null, { ids: [id] }));
      startTransition(() => {
        Promise.all(boundFavorites.map(fetchTrip => fetchTrip()))
          .then(tripsData => setTrips(tripsData))
      });
    } else {
      setTrips([]);
    }
  }, [favoriteTrips, updateFlag]);

  const handleRemoveFavorite = (id) => {
    setFavoriteTrips(prevState => {
      const updatedFavorites = prevState.filter((tripId) => tripId !== id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
    setUpdateFlag(prevFlag => !prevFlag);
  };


  if (trips?.length) {
    return (
      <div className="container mt-10">
        <Title title="Your Favorite Trips" />
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {trips.map((trip) => {
            const data = trip[0];
            return (
              <article key={data.ID} className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl" >
                <Link href={`/country/${data.country}/${data.activities}/${data.destination}/${data.post_name}`}>
                  <div className="relative flex items-end overflow-hidden rounded-xl">
                    <img
                      className="h-[160px] md:h-auto w-full object-cover"
                      src={data.featured_image_url}
                      alt="Hotel Photo"
                    />
                    <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                      <Star filled={true} />
                      <span className="text-slate-400 ml-1 text-sm">{data.rating}</span>
                    </div>
                  </div>
                  <div className="mt-1 p-2">
                    <h2 className="text-slate-700">{data.post_title}</h2>
                    <div className="mt-3 flex items-end justify-between">
                      <p>
                        <span className="text-lg font-bold text-sky-500">${data.price}</span>
                        <span className="text-slate-400 text-sm">/per person</span>
                      </p>
                      <button
                        className="group inline-flex rounded-xl bg-gray-100 p-2 hover:bg-gray-200"
                        onClick={(e) => {
                          e.preventDefault();
                          handleRemoveFavorite(data.ID);
                        }}
                      >
                        <i className="fa-solid fa-heart text-red-500" />
                      </button>
                    </div>
                  </div>
                </Link>
              </article>
            )
          })}
        </div>
      </div >
    );
  }

  return "";
};

export default Favorite;
