import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function CustomPagination({ page, setPage, totalPages }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(e, val) => setPage(val)}
          shape="rounded"
          showFirstButton
          showLastButton
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#e2e8f0", // soft gray text
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "rgba(14,165,233,0.1)", // light cyan hover
                color: "#38bdf8",
              },
            },
            "& .Mui-selected": {
              backgroundColor: "#0ea5e9", // cyan active
              color: "#fff",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#0284c7", // darker cyan on hover
              },
            },
          }}
        />
      </Stack>
    </Box>
  );
}
