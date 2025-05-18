import { ResultWrapper } from "./ResultWrapper";
import { getTranslation } from "@/app/i18n/helpers";

export async function Results({ params: { lng } }) {
  const { t } = await getTranslation(lng);
  const resultData = t("result", {
    returnObjects: true,
  });
  return <ResultWrapper resultData={resultData} />;
}
