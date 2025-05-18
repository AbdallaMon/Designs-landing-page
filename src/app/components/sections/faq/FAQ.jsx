import { FaqWrapper } from "./FaqWrapper";
import { getTranslation } from "@/app/i18n/helpers";

export async function Faq({ params: { lng } }) {
  const { t } = await getTranslation(lng);
  const faqData = t("faq", {
    returnObjects: true,
  });
  return <FaqWrapper faqData={faqData} />;
}
