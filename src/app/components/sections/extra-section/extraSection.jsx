import { ExtraSectionWrapper } from "./ExtraSectionWrapper";
import { getTranslation } from "@/app/i18n/helpers";

export async function ExtraSection({ params: { lng } }) {
  const { t } = await getTranslation(lng);
  const extraSectionData = t("extraSection", {
    returnObjects: true,
  });
  return <ExtraSectionWrapper extraSectionData={extraSectionData} />;
}
