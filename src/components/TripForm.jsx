import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import { Box } from "@mui/material";

export default function TripForm({ initialValues = {}, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  // Common field style (dark theme, no white background)
  const fieldStyle = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 1, // 👈 smaller radius (~4px)
      backgroundColor: "#1e293b", // dark background instead of white
      color: "#f1f5f9",
      "& fieldset": { borderColor: "#334155" },
      "&:hover fieldset": { borderColor: "#38bdf8" },
      "&.Mui-focused fieldset": { borderColor: "#0ea5e9" },
    },
    "& .MuiInputLabel-root": { color: "#94a3b8" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#38bdf8" },
    "& .MuiFormHelperText-root": { color: "#f87171" }, // error text
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "grid",
        gap: 2,
        width: "100%",
        maxWidth: "600px",
        mx: "auto",
        p: 3,
        backgroundColor: "#0f172a", // dark background instead of white
        borderRadius: 2, // subtle round (8px)
        boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
      }}
    >
      <TextField
        label="Destination"
        {...register("destination", { required: "Destination required" })}
        error={!!errors.destination}
        helperText={errors.destination?.message}
        fullWidth
        variant="outlined"
        sx={fieldStyle}
      />

      <TextField
        label="Start Date"
        type="date"
        {...register("startDate", { required: "Start Date required" })}
        InputLabelProps={{ shrink: true }}
        error={!!errors.startDate}
        helperText={errors.startDate?.message}
        fullWidth
        variant="outlined"
        sx={fieldStyle}
      />

      <TextField
        label="End Date"
        type="date"
        {...register("endDate", { required: "End Date required" })}
        InputLabelProps={{ shrink: true }}
        error={!!errors.endDate}
        helperText={errors.endDate?.message}
        fullWidth
        variant="outlined"
        sx={fieldStyle}
      />

      <TextField
        label="Price"
        type="number"
        {...register("price", { required: "Price required", min: 0 })}
        error={!!errors.price}
        helperText={errors.price?.message}
        fullWidth
        variant="outlined"
        sx={fieldStyle}
      />

      <TextField
        label="Status"
        select
        {...register("status", { required: "Status required" })}
        fullWidth
        variant="outlined"
        sx={fieldStyle}
      >
        <MenuItem value="PLANNED">PLANNED</MenuItem>
        <MenuItem value="ONGOING">ONGOING</MenuItem>
        <MenuItem value="COMPLETED">COMPLETED</MenuItem>
      </TextField>

      <Button
        type="submit"
        variant="contained"
        sx={{
          borderRadius: 1.5, // ~6px
          mt: 2,
          py: 1.2,
          fontWeight: 600,
          backgroundColor: "#0ea5e9",
          color: "#fff",
          boxShadow: "0 4px 12px rgba(14,165,233,0.5)",
          "&:hover": {
            backgroundColor: "#0284c7",
            boxShadow: "0 6px 16px rgba(14,165,233,0.7)",
          },
        }}
      >
        Save
      </Button>
    </Box>
  );
}
