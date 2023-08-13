"use client"
import Hero from "@/components/country/region/Hero/Hero"
import styles from "./region.module.scss"
import DataTable from "@/components/country/trekking/trekkingTours/data-table"
import Image from "next/image"

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

const data = [
  {
    id: 1,
    preview: "https://images.pexels.com/photos/2902939/pexels-photo-2902939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Kanchenjunga South Base Camp Trek",
    country: "Nepal",
    area: "Kanchenjunga Region",
    duration: "16 Days",
    grade: "Strenuous",
    activities: "Trekking",
  },
  {
    id: 2,
    preview: "https://images.pexels.com/photos/2902939/pexels-photo-2902939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Kanchenjunga North Base Camp Trek",
    country: "Nepal",
    area: "Kanchenjunga Region",
    duration: "16 Days",
    grade: "Strenuous",
    activities: "Trekking",
  },
  {
    id: 3,
    preview: "https://images.pexels.com/photos/2902939/pexels-photo-2902939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Everest Base Camp Trek",
    country: "Nepal",
    area: "Everest Region",
    duration: "16 Days",
    grade: "Strenuous",
    activities: "Trekking",
  },
  {
    id: 4,
    preview: "https://images.pexels.com/photos/2902939/pexels-photo-2902939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Everest Base Camp Trek",
    country: "Nepal",
    area: "Everest Region",
    duration: "16 Days",
    grade: "Strenuous",
    activities: "Trekking",
  },
  {
    id: 5,
    preview: "https://images.pexels.com/photos/2902939/pexels-photo-2902939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Everest Base Camp Trek",
    country: "Nepal",
    area: "Everest Region",
    duration: "16 Days",
    grade: "Strenuous",
    activities: "Trekking",
  },
  {
    id: 6,
    preview: "https://images.pexels.com/photos/2902939/pexels-photo-2902939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Everest Base Camp Trek",
    country: "Nepal",
    area: "Everest Region",
    duration: "16 Days",
    grade: "Strenuous",
    activities: "Trekking",
  },
  {
    id: 7,
    preview: "https://images.pexels.com/photos/2902939/pexels-photo-2902939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Everest Base Camp Trek",
    country: "Nepal",
    area: "Everest Region",
    duration: "16 Days",
    grade: "Strenuous",
    activities: "Trekking",
  },
  {
    id: 8,
    preview: "https://images.pexels.com/photos/2902939/pexels-photo-2902939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Everest Base Camp Trek",
    country: "Nepal",
    area: "Everest Region",
    duration: "16 Days",
    grade: "Strenuous",
    activities: "Trekking",
  },
  {
    id: 9,
    preview: "https://images.pexels.com/photos/2902939/pexels-photo-2902939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Everest Base Camp Trek",
    country: "Nepal",
    area: "Everest Region",
    duration: "16 Days",
    grade: "Strenuous",
    activities: "Trekking",
  },
  {
    id: 10,
    preview: "https://images.pexels.com/photos/2902939/pexels-photo-2902939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Everest Base Camp Trek",
    country: "Nepal",
    area: "Everest Region",
    duration: "16 Days",
    grade: "Strenuous",
    activities: "Trekking",
  },
  {
    id: 11,
    preview: "https://images.pexels.com/photos/2902939/pexels-photo-2902939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Everest Base Camp Trek",
    country: "Nepal",
    area: "Everest Region",
    duration: "16 Days",
    grade: "Strenuous",
    activities: "Trekking",
  },
]


const Region = () => {
  return (
    <div className={styles.region}>
      <Hero />
      <div className="container">
        <section className={styles.areaSection}>
          <div className={`${styles.areaDescription} text-2xl mb-8`}>
            <h2 className={`${styles.areaTitle} mb-4`}>
              Everest Region
            </h2>
            <div className={styles.areaDescription}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, dolorum impedit ad fugit nesciunt eligendi voluptatem, doloremque nostrum cum, a suscipit nobis eum vitae eos perspiciatis exercitationem? Sunt, corporis accusamus.
              </p>
            </div>
          </div>
          <DataTable columns={columns} data={data} />
        </section>
      </div>
    </div>
  )
}

export default Region