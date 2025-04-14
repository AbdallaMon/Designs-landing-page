import colors from "@/app/helpers/colors";
import { Box, Button } from "@mui/material";

export function ActionButton({
  action,
  actionBg = colors.actionBg,
  actionText = colors.actionText,
}) {
  return (
    <Box
      className="action-button"
      sx={{ marginTop: 8, display: "flex", justifyContent: "center" }}
    >
      <Button
        variant="contained"
        size="large"
        href={action.url}
        target="_blank"
        rel="noopener noreferrer"
        component="a"
        sx={{
          backgroundColor: actionBg,
          color: actionText,
          "&:hover": {
            backgroundColor: "primary.dark",
            color: "white",
          },
          padding: 2,
          borderRadius: "50px",
          fontSize: 20,
          px: 4,
          fontWeight: 700,
        }}
      >
        {action.text}
      </Button>
    </Box>
  );
}
