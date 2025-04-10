import { Box, Container } from "@mui/material";
import { heroData } from "./data";
import { TitleWithSubTitle } from "../../ui/TitleWithSubTitle";
import { ActionButton } from "../../ui/ActionButton";

export function HeroContent() {
  return (
    <Box
      id="hero"
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
function HeroData() {
  return (
    <TitleWithSubTitle title={heroData.title} subTitle={heroData.subTitle} />
  );
}
function HeroVideo() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        borderRadius: 5,
        padding: 2.5,
      }}
    >
      <iframe
        width="100%"
        style={{
          maxWidth: "100%",
        }}
        height="200"
        src={heroData.video.src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Box>
  );
}
function HeroButton() {
  return <ActionButton action={heroData.action} />;
}
export { HeroData, HeroVideo, HeroButton };
