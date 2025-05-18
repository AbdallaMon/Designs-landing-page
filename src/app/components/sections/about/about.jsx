import { getTranslation } from "@/app/i18n/helpers";
import { AboutWrapper } from "./AboutWrapper";

export async function About({ params: { lng } }) {
  const { t } = await getTranslation(lng);
  const aboutData = t("about", {
    returnObjects: true,
  });
  return <AboutWrapper aboutData={aboutData} />;
}
