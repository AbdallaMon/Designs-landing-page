import { Box } from "@mui/material";
import { TitleWithSubTitle } from "../../ui/TitleWithSubTitle";
import { consultData } from "./data";
import { FullConsultVideoDialog } from "./ConsultVideoModal";
import { ActionButton } from "../../ui/ActionButton";
import colors from "@/app/helpers/colors";

export function ConsultContent() {
  return (
    <Box
      id="consult"
      sx={{ py: 8, px: 2, backgroundColor: "background.default" }}
    >
      <TitleWithSubTitle
        title={consultData.title}
        subTitle={consultData.subTitle}
        titleColor={colors.primary}
      />
      <Box my={2}>
        <FullConsultVideoDialog video={consultData.video} />
      </Box>
      <ActionButton action={consultData.action} />
    </Box>
  );
}
