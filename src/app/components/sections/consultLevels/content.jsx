import { Box } from "@mui/material";
import { TitleWithSubTitle } from "../../ui/TitleWithSubTitle";
import { CollapsibleStage } from "./CollapsibleStage";
import { consultLevelsData } from "./data";

export function ConsultLevelContent() {
  return (
    <Box
      sx={{
        py: 8,
        px: 2,
        backgroundColor: "primary.main",
      }}
    >
      <TitleWithSubTitle
        title={consultLevelsData.title}
        subTitle={consultLevelsData.subTitle}
      />
      <Box mt={2}>
        {consultLevelsData.levels.map((level, index) => (
          <CollapsibleStage key={index} stage={level} />
        ))}
      </Box>
    </Box>
  );
}
