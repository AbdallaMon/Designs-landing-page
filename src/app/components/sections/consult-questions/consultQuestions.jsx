import { ConsultQuestionsWrapper } from "./ConsultQuestionsWrapper";
import { getTranslation } from "@/app/i18n/helpers";

export async function ConsultQuestions({ params: { lng } }) {
  const { t } = await getTranslation(lng);
  const consultQuestionsData = t("consultQuestions", {
    returnObjects: true,
  });
  return (
    <ConsultQuestionsWrapper ConsultQuestionsData={consultQuestionsData} />
  );
}
