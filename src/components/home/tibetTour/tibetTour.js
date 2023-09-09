import styles from "./tibettour.module.scss";
import Title from "@/components/ui/title/Title";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link";


const TibetTour = ({ data }) => {
  return (
    <div className="container">
      <section className={styles.tibettour}>
        <Title
          title={data?.title}
          subtitle={data?.sub_title}
        />
        <Table className="mt-[38px]">
          <TableHeader>
            <TableRow className="text-xl">
              <TableHead>Tour Name</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              data?.group_tour.map((data, i) => (
                <TableRow key={i}>
                  <TableCell>{data?.tour_name}</TableCell>
                  <TableCell>{data?.duration} Days</TableCell>
                  <TableCell>{data?.price}</TableCell>
                  <TableCell className="text-right">
                    <Link href={data?.button.button_link.url}>
                      <button className="bg-[#47A5CF] p-2 text-white font-bold rounded-lg hover:bg-sky-600">
                        {data?.button.button_text}
                      </button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </section>
    </div>
  )
}

export default TibetTour