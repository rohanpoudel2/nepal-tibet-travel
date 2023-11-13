"use client"
import { useEffect, useState } from "react";
import styles from "./homefilter.module.scss";
import { useRouter } from "next/navigation";

const HomeFilter = ({ country, region, activity }) => {
  const [selectedCountry, setSelectedCountry] = useState({
    "countryId": [17, 30],
    "countryName": "Nepal",
    "countrySlug": "nepal"
  });
  const [selectedRegion, setSelectedRegion] = useState(region);
  const [selectedActivity, setSelectedActivity] = useState(activity);
  const router = useRouter();

  const selectedCountryData = country.find(country => country.countrySlug === selectedCountry.countrySlug);
  const sortedCountryData = [selectedCountryData, ...country.filter(country => country.countrySlug !== selectedCountry.countrySlug)];

  useEffect(() => {
    setSelectedRegion(region.filter(d => {
      if (d.regionParentId === selectedCountry.countryId[0]) return d;
    }));
    setSelectedActivity(activity.filter(d => {
      if (d.activityParentId === selectedCountry.countryId[1]) return d;
    }));
  }, [selectedCountry])

  const handleSubmit = e => {
    e.preventDefault();
    router.push('/country/nepal/trekking/annapurna-region_24');
  }

  return (
    // <div className={styles.homefilter}>
    //   <form className={styles.items} onSubmit={handleSubmit}>
    //     <div className={styles.item}>
    //       <i className="fa-solid fa-location-arrow" />
    //       <div className={styles.input}>
    //         <label className={styles.label}>Location</label>
    //         <select
    //           value={selectedCountry.countrySlug}
    //           onChange={(e) => {
    //             const selectedCountryObject = country.find(
    //               (data) => data.countrySlug === e.target.value
    //             );
    //             setSelectedCountry(selectedCountryObject || {});
    //           }}
    //           className={styles.select}
    //           name="location"
    //           id="location"
    //           required
    //         >
    //           {
    //             sortedCountryData.map(data =>
    //               <option key={data.countrySlug} value={data.countrySlug}>{data.countryName}</option>
    //             )
    //           }
    //         </select>
    //       </div>
    //     </div>
    //     <div className={styles.item}>
    //       <i className="fa-solid fa-campground" />
    //       <div className={styles.input}>
    //         <label className={styles.label}>Activities</label>
    //         <select className={styles.select} name="location" id="location" required>
    //           {
    //             selectedActivity.map(data =>
    //               <option key={data.activitySlug} value={{ data: data.activitySlug, id: data.activityId }}>{data.activityName}</option>
    //             )
    //           }
    //         </select>
    //       </div>
    //     </div>
    //     <div className={styles.item}>
    //       <i className="fa-solid fa-compass" />
    //       <div className={styles.input}>
    //         <label className={styles.label}>Trip Area</label>
    //         <select className={styles.select} name="location" id="location" required>
    //           {
    //             selectedRegion.map(data =>
    //               <option key={data.regionSlug} value={data.regionSlug}>{data.regionName}</option>
    //             )
    //           }
    //         </select>
    //       </div>
    //     </div>
    //     <div className={styles.item}>
    //       <button className={styles.button}>
    //         <i className="fa-solid fa-magnifying-glass" />
    //         Search
    //       </button>
    //     </div>
    //   </form>
    // </div>
    <div className="m-10 w-screen max-w-screen-md absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
      <div className="flex flex-col">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
          <form className="">
            <div className="relative mb-10 w-full flex  items-center justify-between rounded-md">
              <svg className="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8" className=""></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
              </svg>
              <input type="name" name="search" className="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50" placeholder="Search Trips" />
            </div>
            <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
              <button className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">Reset</button>
              <button className="rounded-lg bg-sky-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default HomeFilter