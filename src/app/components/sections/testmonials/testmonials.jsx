import { TestimonialWrapper } from "./TestmonialsWrapper";
import { getTranslation } from "@/app/i18n/helpers";

// Main component using Swiper.js
export async function TestimonialSwiper({ params: { lng } }) {
  const { t } = await getTranslation(lng);
  const testmonialsData = t("testmonials", {
    returnObjects: true,
  });
  return <TestimonialWrapper testmonailsData={testmonialsData} />;
}
