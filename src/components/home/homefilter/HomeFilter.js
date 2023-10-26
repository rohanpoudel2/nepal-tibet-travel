"use client"
import { useEffect, useState } from "react";
import styles from "./homefilter.module.scss";

const HomeFilter = ({ country, region, activity }) => {
  const [selectedCountry, setSelectedCountry] = useState({
    "countryId": 17,
    "countryName": "Nepal",
    "countrySlug": "nepal"
  });
  const [selectedRegion, setSelectedRegion] = useState(region);

  useEffect(() => {
    console.log(region)
    setSelectedRegion(region.filter(d => {
      console.log(d.regionParentId, selectedCountry.countryId);
      if (d.regionParentId === selectedCountry.countryId) return d;
    }))
  }, [selectedCountry])

  return (
    <div className={styles.homefilter}>
      <form className={styles.items}>
        <div className={styles.item}>
          <i className="fa-solid fa-location-arrow"></i>
          <div className={styles.input}>
            <label className={styles.label}>Location</label>
            <select
              value={selectedCountry.countrySlug}
              onChange={(e) => {
                const selectedCountryObject = country.find(
                  (data) => data.countrySlug === e.target.value
                );
                setSelectedCountry(selectedCountryObject || {});
              }}
              className={styles.select}
              name="location"
              id="location"
              required
            >
              {
                country.map(data =>
                  <option key={data.countrySlug} value={data.countrySlug}>{data.countryName}</option>
                )
              }
            </select>
          </div>
        </div>
        <div className={styles.item}>
          <i className="fa-solid fa-campground"></i>
          <div className={styles.input}>
            <label className={styles.label}>Activities</label>
            <select className={styles.select} name="location" id="location" required>
              {
                activity.map(data =>
                  <option key={data.activitySlug} value={{ data: data.activitySlug, id: data.activityId }}>{data.activityName}</option>
                )
              }
            </select>
          </div>
        </div>
        <div className={styles.item}>
          <i className="fa-solid fa-compass"></i>
          <div className={styles.input}>
            <label className={styles.label}>Trip Area</label>
            <select className={styles.select} name="location" id="location" required>
              {
                selectedRegion.map(data =>
                  <option key={data.regionSlug} value={data.regionSlug}>{data.regionName}</option>
                )
              }
            </select>
          </div>
        </div>
        <div className={styles.item}>
          <button className={styles.button}>
            <i className="fa-solid fa-magnifying-glass"></i>
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default HomeFilter