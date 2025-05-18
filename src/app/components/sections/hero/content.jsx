import { Box, Container } from "@mui/material";
import { TitleWithSubTitle } from "../../ui/TitleWithSubTitle";
import { ActionButton } from "../../ui/ActionButton";

export function HeroContent({ heroData }) {
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
        className="hero-wave"
        style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}
      />
      <Container maxWidth="lg">
        <HeroData heroData={heroData} />
        <HeroVideo heroData={heroData} />
        <HeroButton heroData={heroData} />
      </Container>
    </Box>
  );
}
function HeroData({ heroData }) {
  return (
    <div className="hero-title-wrapper">
      <TitleWithSubTitle title={heroData.title} subTitle={heroData.subTitle} />
    </div>
  );
}
function HeroVideo({ heroData }) {
  return (
    <Box
      className="hero-video-container"
      sx={{
        backgroundColor: "primary.main",
        borderRadius: 5,
        padding: 2.5,
        maxWidth: { xs: "100%", md: "800px" },
        mx: "auto",
      }}
    >
      <Box
        component="iframe"
        width="100%"
        sx={{
          maxWidth: { xs: "100%", md: "800px" },
          height: { xs: "200px", md: "400px" },
        }}
        src={heroData.video.src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      {/* <iframe
        width="100%"
        style={{
          maxWidth: "100%",
        }}
        height="200"
        src={heroData.video.src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}
    </Box>
  );
}
function HeroButton({ heroData }) {
  return (
    <div className="hero-button">
      <ActionButton action={heroData.action} />
    </div>
  );
}
export { HeroData, HeroVideo, HeroButton };
