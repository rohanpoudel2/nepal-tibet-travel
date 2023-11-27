import styles from "./tibettour.module.scss";
import Title from "@/components/ui/title/Title";
import { getRegionName } from "@/utils/functions";
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
    <section className="bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="container">
        <div className={styles.tibettour}>
          <Title
            title={data?.title}
            subtitle={data?.sub_title}
          />
          <Table className="mt-[38px]">
            <TableHeader>
              <TableRow className="text-xl">
                <TableHead>Tour Name</TableHead>
                <TableHead>Region</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                data?.group_tour.map((data, i) => (
                  <TableRow key={i}>
                    <TableCell>{data?.post_title}</TableCell>
                    <TableCell>{getRegionName(data?.destination)}</TableCell>
                    <TableCell className="font-semibold text-base">
                      <span className="line-through">
                        ${data?.price}
                      </span>
                      <span className="ml-2">
                        ${data?.sale_price}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Link href={`/country/${data?.country}/${data?.activities}/${data?.destination}/${data?.post_name}`}>
                        <button className="bg-sky-500 p-2 text-white font-bold rounded-lg hover:bg-sky-600">
                          Explore
                        </button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}

export default TibetTour