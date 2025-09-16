import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TripForm from "../components/TripForm";
import { Box, Typography } from "@mui/material";

export default function EditTrip({ trips, setTrips }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const tripId = Number(id);
  const trip = trips.find((t) => t.id === tripId);

  if (!trip)
    return (
      <Box sx={{ width: "100%", p: 3, backgroundColor: "#0f172a", minHeight: "100vh" }}>
        <Typography variant="h6" sx={{ color: "#f1f5f9" }}>
          Trip not found
        </Typography>
      </Box>
    );

  const handleSave = (data) => {
    const updatedTrip = {
      ...trip,
      destination: data.destination,
      startDate: data.startDate,
      endDate: data.endDate,
      price: Number(data.price),
      status: data.status,
    };

    const updatedTrips = trips.map((t) => (t.id === tripId ? updatedTrip : t));
    setTrips(updatedTrips);
    navigate("/"); // redirect to Dashboard
  };

  return (
    <Box
      sx={{
        width: "100%",
        p: 3,
        backgroundColor: "#0f172a",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          p: 4,
          borderRadius: 4,
          maxWidth: 900,
          width: "100%",
          backgroundColor: "#1e293b",
          boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
        }}
      >
        {/* Heading without extra box */}
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, mb: 3, color: "#f1f5f9" }}
        >
          Edit Trip
        </Typography>

        <TripForm initialValues={trip} onSubmit={handleSave} />
      </Box>
    </Box>
  );
}
