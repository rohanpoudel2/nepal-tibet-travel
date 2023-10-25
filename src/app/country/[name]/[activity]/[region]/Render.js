"use client"
import Hero from "@/components/country/region/Hero/Hero"
import styles from "./region.module.scss"
import DataTable from "@/components/country/trekking/trekkingTours/data-table"
import Image from "next/image"
import { useState, useEffect, useMemo } from "react"
import { getTaxonomyName } from "@/utils/wordpress"

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
  const [slug, setSlug] = useState('');
  useEffect(() => {
    let isSubscribed = true;
    const fetchData = async () => {
      try {
        const updatedData = await Promise.all(d.map(async (dItem) => {
          const country = await getTaxonomyName(dItem.country[0], 'country');
          const area = await getTaxonomyName(Math.max(...dItem.destination), 'destination');
          const grade = await getTaxonomyName(dItem.difficulty, 'difficulty');
          const activities = await getTaxonomyName(Math.max(...dItem.activities), 'activities');
          setSlug(dItem.slug)
          return {
            id: dItem.id,
            preview: dItem.featured_image.sizes.medium.source_url,
            name: dItem.title.rendered,
            country: JSON.parse(country)?.name,
            area: JSON.parse(area)?.name,
            duration: dItem.duration.days + ' days',
            grade: JSON.parse(grade)?.name,
            activities: JSON.parse(activities)?.name,
          }
        }));

        if (isSubscribed) {
          setData(updatedData);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    return () => {
      isSubscribed = false;
    };
  }, [d]);

  const REGION_NAME = regionName.split('-');

  const getRegionName = useMemo(() => {
    return REGION_NAME[0][0].toUpperCase() + REGION_NAME[0].slice(1) + ' ' + REGION_NAME[1][0].toUpperCase() + REGION_NAME[1].slice(1).split('_')[0]
  },
    [REGION_NAME]
  )

  return (
    <div className={styles.region}>
      <Hero title={getRegionName} />
      <div className="container">
        <section className={styles.areaSection}>
          <div className={`${styles.areaDescription} text-2xl mb-8`}>
            <h2 className={`${styles.areaTitle} mb-4`}>
              {getRegionName}
            </h2>
            <div className={styles.areaDescription}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, dolorum impedit ad fugit nesciunt eligendi voluptatem, doloremque nostrum cum, a suscipit nobis eum vitae eos perspiciatis exercitationem? Sunt, corporis accusamus.
              </p>
            </div>
          </div>
          <DataTable columns={columns} data={data} regionName={getRegionName} slug={slug} />
        </section>
      </div>
    </div>
  )
}

export default Region;