import { Box, Container } from "@mui/material";
import { HeroButton, HeroData, HeroVideo } from "./content";

export default function Hero() {
  return (
    <Box
      sx={{
        pt: 14,
        pb: 16,
        position: "relative",
        background: ` url(/hero/background.png),
    linear-gradient(180deg, #d3ac71, #be975c 46%, #785644);`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover, contain",
      }}
    >
      <img
        src="/hero/wave.svg"
        style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}
      />
      <Container maxWidth="lg">
        <HeroData />
        <HeroVideo />
        <HeroButton />
      </Container>
    </Box>
  );
}
