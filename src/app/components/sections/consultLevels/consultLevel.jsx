import { ConsultLevelsWrapper } from "./ConsultLevelsWrapper";
import { getTranslation } from "@/app/i18n/helpers";

export async function ConsultLevel({ params: { lng } }) {
  const { t } = await getTranslation(lng);
  const consultLevelsData = t("consultLevels", {
    returnObjects: true,
  });
  return <ConsultLevelsWrapper consultLevelsData={consultLevelsData} />;
}
