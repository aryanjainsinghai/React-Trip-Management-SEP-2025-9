import React, { useState } from "react";
import TripList from "../components/TripList";
import SearchFilter from "../components/SearchFilter";
import Pagination from "../components/Pagination";
import { Box, Typography, Container } from "@mui/material";

export default function Dashboard({ trips, setTrips }) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  // Filter
  const filteredTrips = trips
    .filter((trip) =>
      trip.destination.toLowerCase().includes(search.toLowerCase())
    )
    .filter((trip) =>
      statusFilter && statusFilter !== "ALL"
        ? trip.status === statusFilter
        : true
    );

  // Sort
  const sortedTrips = [...filteredTrips].sort((a, b) => {
    switch (sortBy) {
      case "price_asc":
        return a.price - b.price;
      case "price_desc":
        return b.price - a.price;
      case "start_asc":
        return new Date(a.startDate) - new Date(b.startDate);
      case "start_desc":
        return new Date(b.startDate) - new Date(a.startDate);
      default:
        return 0;
    }
  });

  // Pagination
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedTrips = sortedTrips.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(sortedTrips.length / itemsPerPage);

  // Delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this trip?")) {
      setTrips(trips.filter((t) => t.id !== id));
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh", // full viewport height
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f5f5f5",
        p: 2,
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          flexGrow: 1, // take remaining space
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* Filters */}
        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            backgroundColor: "#fff",
          }}
        >
          <SearchFilter
            search={search}
            setSearch={setSearch}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </Box>

        {/* Trip Table */}
        <Box
          sx={{
            flexGrow: 1, // expands to fill vertical space
            p: 2,
            borderRadius: 2,
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            backgroundColor: "#fff",
            overflow: "auto", // scroll only inside this if content is long
          }}
        >
          <TripList trips={paginatedTrips} onDelete={handleDelete} />
        </Box>

        {/* Pagination */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </Box>

        {/* Summary */}
        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Summary
          </Typography>
          <Typography>Total Trips: {trips.length}</Typography>
          <Typography>
            Average Price:{" "}
            {trips.length > 0
              ? (
                  trips.reduce((sum, t) => sum + t.price, 0) / trips.length
                ).toFixed(2)
              : 0}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
