import { faqData } from "./data";

import { Box } from "@mui/material";
import CollapsibleComponent from "@/app/components/ui/QuestionAnswerCollapse";
import { TitleWithSubTitle } from "../../ui/TitleWithSubTitle";
import colors from "@/app/helpers/colors";
import { ActionButton } from "../../ui/ActionButton";

export function FaqContent() {
  return (
    <Box
      id="faq"
      sx={{ p: 2, pt: 8, pb: 8, backgroundColor: "secondary.main" }}
    >
      <TitleWithSubTitle title={faqData.title} titleColor={colors.textColor} />

      {faqData.questions.map((item) => (
        <FaqItem key={item.id} item={item} />
      ))}
      <Box sx={{ my: 3 }}>
        <ActionButton
          action={faqData.action}
          actionBg={colors.actionAlt}
          actionText={colors.secondary}
        />
      </Box>
    </Box>
  );
}
function FaqItem({ item }) {
  return (
    <Box>
      <CollapsibleComponent title={item.question} index={item.id}>
        {item.answer}
      </CollapsibleComponent>
    </Box>
  );
}
