"use client"
import Hero from "@/components/country/region/Hero/Hero"
import styles from "./region.module.scss"
import DataTable from "@/components/country/trekking/trekkingTours/data-table"
import Image from "next/image"
import { useState, useEffect } from "react"
import { getRegionName } from "@/utils/functions"

const columns = [
  {
    accessorKey: "preview",
    header: "Preview",
    cell: ({ row }) => {
      const imageURL = row.getValue("preview");
      return <Image
        src={imageURL}
        alt="Tour Image"
        width={300}
        height={200}
      />
    }
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return <h5>{row.getValue("name")}</h5>
    }
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "area",
    header: "Area",
  },
  {
    accessorKey: "duration",
    header: "Duration",
  },
  {
    accessorKey: "grade",
    header: "Grade",
  },
  {
    accessorKey: "activities",
    header: "Activities",
  }
]

const Region = ({ d, regionName }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(
      d.map(data => ({
        id: data.id,
        preview: data.image['medium_large'],
        name: data.name,
        country: data.country[0],
        area: data.area[0],
        duration: data.duration,
        grade: data.difficulty[0],
        activities: data.activities[0],
        slug: data.slug
      }))
    );
  }, [d])

  const REGION_NAME = regionName;

  return (
    <div className={styles.region}>
      <Hero title={getRegionName(REGION_NAME)} />
      <div className="container">
        <section className={styles.areaSection}>
          <div className={`${styles.areaDescription} text-2xl mb-8`}>
            <h2 className={`${styles.areaTitle} mb-4`}>
              {getRegionName(REGION_NAME)}
            </h2>
            <div className={styles.areaDescription}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, dolorum impedit ad fugit nesciunt eligendi voluptatem, doloremque nostrum cum, a suscipit nobis eum vitae eos perspiciatis exercitationem? Sunt, corporis accusamus.
              </p>
            </div>
          </div>
          <DataTable columns={columns} data={data} regionName={getRegionName(REGION_NAME)} />
        </section>
      </div>
    </div>
  )
}

export default Region;