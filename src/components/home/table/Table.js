"use client"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function createData(tourname, duration, price, book) {
  return { tourname, duration, price, book };
}

const rows = [
  createData('Lhasa Tour', "5 Days", "800 USD",
    <Button variant="text">
      Book Now
    </Button>
  ),
  createData('Lhasa Tour', "5 Days", "800 USD",
    <Button variant="text">
      Book Now
    </Button>
  ),
  createData('Lhasa Tour', "5 Days", "800 USD",
    <Button variant="text">
      Book Now
    </Button>
  ),
  createData('Lhasa Tour', "5 Days", "800 USD",
    <Button variant="text">
      Book Now
    </Button>
  ),
  createData('Lhasa Tour', "5 Days", "800 USD",
    <Button variant="text">
      Book Now
    </Button>
  ),
  createData('Lhasa Tour', "5 Days", "800 USD",
    <Button variant="text">
      Book Now
    </Button>
  ),
];

const TableElement = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Tour Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">Duration</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">Price</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right"> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.tourname}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.tourname}
              </TableCell>
              <TableCell align="right">{row.duration}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.book}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableElement
