import { ConsultWrapper } from "./ConsultWrapper";
import { getTranslation } from "@/app/i18n/helpers";

export async function Consult({ params: { lng } }) {
  const { t } = await getTranslation(lng);
  const consultData = t("consult", {
    returnObjects: true,
  });
  return <ConsultWrapper consultData={consultData} />;
}
