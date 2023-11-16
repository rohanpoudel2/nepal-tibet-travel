"use client";
import { Star } from "@/components/ui/star";
import Title from "@/components/ui/title/Title";
import React, { useEffect, useState } from "react";

const Favorite = () => {
  const [favoriteTrips, setFavoriteTrips] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

    setFavoriteTrips(favorites);
  }, []);

  const trips = [
    {
      id: 293,
      name: "Everest Base Camp Trek",
      location: "Everest Region, Nepal",
      image:
        "https://images.pexels.com/photos/13548334/pexels-photo-13548334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.9,
      price: 1200,
    },
  ];

  const favoriteTripsData = trips.filter((trip) => favoriteTrips.includes(trip.id));

  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favoriteTrips.filter((tripId) => tripId !== id);
    setFavoriteTrips(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container mt-10">
      <Title title="Your Favorite Trips" />
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {favoriteTripsData.map((trip) => (
          <article key={trip.id} className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
            <a href="#">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <img
                  className="h-[160px] md:h-auto w-full object-cover"
                  src={trip.image}
                  alt="Hotel Photo"
                />
                <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                  <Star filled={true} />
                  <span className="text-slate-400 ml-1 text-sm">{trip.rating}</span>
                </div>
              </div>
              <div className="mt-1 p-2">
                <h2 className="text-slate-700">{trip.name}</h2>
                <p className="text-slate-400 mt-1 text-sm">{trip.location}</p>
                <div className="mt-3 flex items-end justify-between">
                  <p>
                    <span className="text-lg font-bold text-sky-500">${trip.price}</span>
                    <span className="text-slate-400 text-sm">/per person</span>
                  </p>
                  <button
                    className="group inline-flex rounded-xl bg-gray-100 p-2 hover:bg-gray-200"
                    onClick={() => handleRemoveFavorite(trip.id)}
                  >
                    <i className="fa-solid fa-heart text-red-500" />
                  </button>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
