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


const TibetTour = () => {
  return (
    <div className="container">
      <section className={styles.tibettour}>
        <Title
          title="Tibet group tour 2023"
          subtitle="Travel with group"
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
            <TableRow>
              <TableCell>Lhasa Tour</TableCell>
              <TableCell>5 Days</TableCell>
              <TableCell>$1560</TableCell>
              <TableCell className="text-right">
                <button className="bg-blue-400 p-2 text-white font-bold rounded-lg hover:bg-blue-500">
                  Book Now
                </button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Lhasa Tour</TableCell>
              <TableCell>5 Days</TableCell>
              <TableCell>$1560</TableCell>
              <TableCell className="text-right">
                <button className="bg-blue-400 p-2 text-white font-bold rounded-lg hover:bg-blue-500">
                  Book Now
                </button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Lhasa Tour</TableCell>
              <TableCell>5 Days</TableCell>
              <TableCell>$1560</TableCell>
              <TableCell className="text-right">
                <button className="bg-blue-400 p-2 text-white font-bold rounded-lg hover:bg-blue-500">
                  Book Now
                </button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Lhasa Tour</TableCell>
              <TableCell>5 Days</TableCell>
              <TableCell>$1560</TableCell>
              <TableCell className="text-right">
                <button className="bg-blue-400 p-2 text-white font-bold rounded-lg hover:bg-blue-500">
                  Book Now
                </button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Lhasa Tour</TableCell>
              <TableCell>5 Days</TableCell>
              <TableCell>$1560</TableCell>
              <TableCell className="text-right">
                <button className="bg-blue-400 p-2 text-white font-bold rounded-lg hover:bg-blue-500">
                  Book Now
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </div>
  )
}

export default TibetTour