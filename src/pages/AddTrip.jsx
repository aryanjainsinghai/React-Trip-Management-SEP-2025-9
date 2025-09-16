import React from "react";
import { useNavigate } from "react-router-dom";
import TripForm from "../components/TripForm";
import { Box, Typography, Paper } from "@mui/material";

export default function AddTrip({ trips, setTrips }) {
  const navigate = useNavigate();

  const handleAdd = (data) => {
    const newTrip = {
      id: trips.length > 0 ? Math.max(...trips.map((t) => t.id)) + 1 : 1, // auto id
      destination: data.destination,
      startDate: data.startDate,
      endDate: data.endDate,
      price: Number(data.price),
      status: data.status,
    };

    setTrips([...trips, newTrip]);
    navigate("/"); // redirect to Dashboard
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        p: 3,
        backgroundColor: "#0f172a", // dark background
      }}
    >
      <Paper
        sx={{
          p: 4,
          borderRadius: 4,
          maxWidth: 900,
          mx: "auto",
          backgroundColor: "#1e293b", // dark Paper instead of white
          boxShadow: "0 8px 24px rgba(0,0,0,0.5)", // subtle dark shadow
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, mb: 3, color: "#f1f5f9" }} // light text
        >
          Add Trip
        </Typography>
        <TripForm
          onSubmit={handleAdd}
          initialValues={{
            destination: "",
            startDate: "",
            endDate: "",
            price: 0,
            status: "PLANNED",
          }}
        />
      </Paper>
    </Box>
  );
}
