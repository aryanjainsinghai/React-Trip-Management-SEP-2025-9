import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography } from "@mui/material";

export default function TripList({ trips, onDelete }) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "100%",
        borderRadius: 2,
        boxShadow: 4,
        overflowX: "auto",
        backgroundColor: "#0f172a", // dark background
      }}
    >
      <Table sx={{ minWidth: 650 }}>
        <TableHead sx={{ backgroundColor: "#1e293b" }}>
          <TableRow>
            {["Destination", "Start Date", "End Date", "Price", "Status", "Actions"].map(
              (head) => (
                <TableCell key={head}>
                  <Typography sx={{ color: "#f1f5f9", fontWeight: 600 }}>
                    {head}
                  </Typography>
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {trips.map((t) => (
            <TableRow
              key={t.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                "&:hover": { backgroundColor: "#1e293b", cursor: "pointer" },
              }}
            >
              <TableCell sx={{ color: "#f1f5f9" }}>{t.destination}</TableCell>
              <TableCell sx={{ color: "#f1f5f9" }}>{t.startDate}</TableCell>
              <TableCell sx={{ color: "#f1f5f9" }}>{t.endDate}</TableCell>
              <TableCell sx={{ color: "#f1f5f9" }}>${t.price}</TableCell>
              <TableCell sx={{ color: "#f1f5f9" }}>{t.status}</TableCell>
              <TableCell>
                <Button
                  component={Link}
                  to={`/edit/${t.id}`}
                  variant="contained"
                  size="small"
                  startIcon={<EditIcon />}
                  sx={{
                    mr: 1,
                    borderRadius: 2,
                    backgroundColor: "#3b82f6",
                    "&:hover": { backgroundColor: "#2563eb" },
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<DeleteIcon />}
                  onClick={() => onDelete(t.id)}
                  sx={{
                    borderRadius: 2,
                    backgroundColor: "#ef4444",
                    "&:hover": { backgroundColor: "#dc2626" },
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
