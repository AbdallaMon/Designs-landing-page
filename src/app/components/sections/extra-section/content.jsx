import { Box, Typography } from "@mui/material";
import { extraSectionData } from "./data";
import { ActionButton } from "../../ui/ActionButton";

export function ExtraSectionContent() {
  return (
    <Box
      id="extra-section"
      sx={{
        py: 8,
        pb: 14,
        px: 2,
        backgroundColor: "background.default",
        position: "relative",
        zIndex: 1, // Ensure the content is above the image
      }}
    >
      {extraSectionData.cards.map((card, index) => (
        <ExtraSectionCard key={index} card={card} />
      ))}
      <img
        src="/extra/wave.svg"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "auto",
          zIndex: -1, // Ensure the image is behind the content
        }}
      />
    </Box>
  );
}

function ExtraSectionCard({ card }) {
  return (
    <Box
      className="extra-section-card"
      sx={{
        background: card.colors.background,
        p: 3,
        px: 2.5,
        mb: 3,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" sx={{ mb: 2, color: card.colors.color }}>
        {card.title}
      </Typography>
      <Typography variant="h5" sx={{ color: card.colors.color }}>
        {card.description}
      </Typography>
      <ActionButton action={card.action} />
    </Box>
  );
}
