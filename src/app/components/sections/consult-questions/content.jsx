import { consultData } from "./data";

import { Box } from "@mui/material";
import CollapsibleComponent from "@/app/components/ui/QuestionAnswerCollapse";
import { TitleWithSubTitle } from "../../ui/TitleWithSubTitle";
import colors from "@/app/helpers/colors";
import { ActionButton } from "../../ui/ActionButton";

export function ConsultContent() {
  return (
    <Box sx={{ p: 2, pt: 4, pb: 8, backgroundColor: "secondary.main" }}>
      <TitleWithSubTitle
        title={consultData.title}
        subTitle={consultData.subTitle}
        titleColor={colors.textColor}
      />

      {consultData.questions.map((item) => (
        <ConsultItem key={item.id} item={item} />
      ))}
      <Box sx={{ my: 4 }}>
        <ActionButton action={consultData.action} />
      </Box>
    </Box>
  );
}
function ConsultItem({ item }) {
  return (
    <Box>
      <CollapsibleComponent title={item.question} index={item.id}>
        {item.answer}
      </CollapsibleComponent>
    </Box>
  );
}
