import { CompaniesWrapper } from "./CompaniesWrapper";
import { getTranslation } from "@/app/i18n/helpers";

export async function Companies({ params: { lng } }) {
  const { t } = await getTranslation(lng);
  const companiesData = t("companies", {
    returnObjects: true,
  });
  return <CompaniesWrapper companiesData={companiesData} />;
}
