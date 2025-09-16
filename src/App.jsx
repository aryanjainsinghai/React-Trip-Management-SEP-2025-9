import React from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTrip from "./pages/AddTrip";
import EditTrip from "./pages/EditTrip";
import { useState } from "react";
import initialTrips from "./data/trips";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial",
  },
  shape: {
    borderRadius: 12, // rounded corners globally
  },
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#f50057" },
    background: { default: "#f5f5f5" },
  },
});

function App() {
  const [trips, setTrips] = useState(initialTrips);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Reset default CSS */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard trips={trips} setTrips={setTrips} />} />
          <Route path="/add" element={<AddTrip trips={trips} setTrips={setTrips} />} />
          <Route path="/edit/:id" element={<EditTrip trips={trips} setTrips={setTrips} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
