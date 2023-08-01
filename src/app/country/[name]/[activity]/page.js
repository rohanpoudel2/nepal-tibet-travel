"use client"
import Hero from "@/components/country/trekking/hero/Hero"
import styles from "./trekking.module.scss"
import ImportantLinks from "@/components/country/trekking/importantLinks/ImportantLinks";
import Image from "next/image";
import DataTable from "@/components/country/trekking/trekkingTours/data-table";


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

const Trekking = ({ params }) => {

  const { activity, name } = params;

  return (
    <div className={styles.trekking}>
      <Hero
        country={name}
        activity={activity.replace(/-/g, " ")}
      />
      <div className="container">
        <div className={styles.shortDesc}>
          <p>
            Nowhere else in the Himalaya you will find the Physical cultural and religion diversity which exists in Nepal. From the ancient animistic Bon religion of the western mountains and the Tibetan Buddhist culture of the Sherpa of Everest to the rich Hindu tradition of the heartland of the Kingdom. Nepal offers a unique kaleidoscope of South Asian culture. Combined with the world's most spectacular mountains and a truly warm and hospitable people, you have the ingredients of the experience of a lifetime.
          </p>
        </div>
        <div className={styles.importantLinks}>
          <ImportantLinks image={"/images/ebc.jpeg"} text="Trekking Tips" />
          <ImportantLinks image={"https://images.pexels.com/photos/7813158/pexels-photo-7813158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} text="Nepal Transport" />
        </div>
        <div className={styles.trekkingAreas}>
          <section className={styles.areaSection}>
            <div className={styles.areaDescription}>
              <h2 className={styles.areaTitle}>
                Kanchenjunga Area
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
    </div>
  )
}

export default Trekking