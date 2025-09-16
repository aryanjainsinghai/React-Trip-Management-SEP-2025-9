import React from "react";
import { TextField, MenuItem, Grid, Box } from "@mui/material";

export default function SearchFilter({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  sortBy,
  setSortBy,
}) {
  return (
    <Box sx={{ mb: 1 }}>
      <Grid container spacing={2} justifyContent="center">
        {/* Search Input */}
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Search by Destination"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
                backgroundColor: "#1e293b",
                color: "#f1f5f9",
                "& fieldset": { borderColor: "#334155" },
                "&:hover fieldset": { borderColor: "#38bdf8" },
                "&.Mui-focused fieldset": { borderColor: "#0ea5e9" },
              },
              "& .MuiInputLabel-root": { color: "#94a3b8" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#38bdf8" },
            }}
          />
        </Grid>

        {/* Status Filter */}
        <Grid item xs={12} md={4}>
          <TextField
            select
            fullWidth
            label="Filter by Status"
            variant="outlined"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            sx={{
              minWidth: "350px", // 👈 aur lamba banane ke liye
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
                backgroundColor: "#1e293b",
                color: "#f1f5f9",
                "& fieldset": { borderColor: "#334155" },
                "&:hover fieldset": { borderColor: "#38bdf8" },
                "&.Mui-focused fieldset": { borderColor: "#0ea5e9" },
              },
              "& .MuiInputLabel-root": { color: "#94a3b8" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#38bdf8" },
            }}
          >
            <MenuItem value="ALL">All Statuses</MenuItem>
            <MenuItem value="PLANNED">PLANNED</MenuItem>
            <MenuItem value="ONGOING">ONGOING</MenuItem>
            <MenuItem value="COMPLETED">COMPLETED</MenuItem>
          </TextField>
        </Grid>

        {/* Sort By */}
        <Grid item xs={12} md={4}>
          <TextField
            select
            fullWidth
            label="Sort By"
            variant="outlined"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            sx={{
              minWidth: "350px", // 👈 aur lamba banane ke liye
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
                backgroundColor: "#1e293b",
                color: "#f1f5f9",
                "& fieldset": { borderColor: "#334155" },
                "&:hover fieldset": { borderColor: "#38bdf8" },
                "&.Mui-focused fieldset": { borderColor: "#0ea5e9" },
              },
              "& .MuiInputLabel-root": { color: "#94a3b8" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#38bdf8" },
            }}
          >
            <MenuItem value="">Sort By</MenuItem>
            <MenuItem value="price_asc">Price: Low → High</MenuItem>
            <MenuItem value="price_desc">Price: High → Low</MenuItem>
            <MenuItem value="start_asc">Start Date: Old → New</MenuItem>
            <MenuItem value="start_desc">Start Date: New → Old</MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </Box>
  );
}
