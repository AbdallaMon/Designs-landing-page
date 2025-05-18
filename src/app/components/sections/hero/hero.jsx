import { getTranslation } from "@/app/i18n/helpers";
import HeroWrapper from "./HeroWrapper";

export default async function Hero({ params: { lng } }) {
  const { t } = await getTranslation(lng);
  const heroData = t("hero", {
    returnObjects: true,
  });
  return <HeroWrapper heroData={heroData} />;
}
