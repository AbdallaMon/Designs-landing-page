import { Box, Button } from "@mui/material";

export function ActionButton({ action }) {
  return (
    <Box sx={{ marginTop: 8, display: "flex", justifyContent: "center" }}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        href={action.url}
        target="_blank"
        rel="noopener noreferrer"
        component="a"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
          padding: 2,
          borderRadius: "50px",
          fontSize: 24,
          px: 6,
          fontWeight: 700,
        }}
      >
        {action.text}
      </Button>
    </Box>
  );
}
