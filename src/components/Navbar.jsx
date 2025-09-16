import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import Box from "@mui/material/Box";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#0f172a", // Dark navy background
        boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          py: 1.5,
        }}
      >
        {/* Logo + App Name */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "#f1f5f9", // soft white
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontWeight: 700,
            letterSpacing: "0.5px",
            "&:hover": { color: "#38bdf8" }, // cyan hover
          }}
        >
          <TravelExploreIcon /> Trip Manager
        </Typography>

        {/* Navigation Links */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: { xs: 1, md: 0 },
          }}
        >
          <Button
            component={Link}
            to="/"
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 500,
              color: "#e2e8f0",
              "&:hover": { color: "#38bdf8", background: "transparent" },
            }}
          >
            Dashboard
          </Button>

          {/* Highlighted CTA */}
          <Button
            component={Link}
            to="/add"
            sx={{
              borderRadius: "30px",
              textTransform: "none",
              fontWeight: 600,
              px: 3,
              py: 1,
              backgroundColor: "#0ea5e9", // cyan
              color: "#ffffff",
              boxShadow: "0 4px 10px rgba(14,165,233,0.4)",
              "&:hover": {
                backgroundColor: "#0284c7", // darker cyan
                boxShadow: "0 6px 15px rgba(14,165,233,0.6)",
              },
            }}
          >
            Add Trip
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
