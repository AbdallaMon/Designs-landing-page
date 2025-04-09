import { Box, Button, Typography } from "@mui/material";
import { heroData } from "./data";
import { TitleWithSubTitle } from "../../ui/TitleWithSubTitle";
import { ActionButton } from "../../ui/ActionButton";

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
export function HeroButton() {
  return <ActionButton action={heroData.action} />;
}
export { HeroData, HeroVideo, HeroButton };
