import { Box } from "@mui/material";
import Navbar from "../components/ui/Navbar";
import Hero from "../components/sections/hero/hero";
import { Companies } from "../components/sections/companies/compaines";
import { ConsultQuestions } from "../components/sections/consult-questions/consultQuestions";
import { Consult } from "../components/sections/consult/consult";
import { ConsultLevel } from "../components/sections/consultLevels/consultLevel";
import { Results } from "../components/sections/result/result";
import { TestimonialSwiper } from "../components/sections/testmonials/testmonials";
import { Faq } from "../components/sections/faq/FAQ";
import { ExtraSection } from "../components/sections/extra-section/extraSection";
import { About } from "../components/sections/about/about.jsx";
import { Footer } from "../components/ui/Footer";
import { getTranslation } from "../i18n/helpers";

export default async function Home({ params }) {
  const resolvedParams = await params;

  const { t } = await getTranslation(resolvedParams.lng);
  const navbar = t("navbar", {
    returnObjects: true,
  });
  const footer = t("footer", {
    returnObjects: true,
  });
  return (
    <Box
      sx={{
        overflowX: "hidden",
      }}
    >
      <Navbar {...navbar} lng={resolvedParams.lng} />
      <Hero params={resolvedParams} />
      <Companies params={resolvedParams} />
      <ConsultQuestions params={resolvedParams} />
      <Consult params={resolvedParams} />
      <ConsultLevel params={resolvedParams} />
      <Results params={resolvedParams} />
      <TestimonialSwiper params={resolvedParams} />
      <Faq params={resolvedParams} />
      <About params={resolvedParams} />
      <ExtraSection params={resolvedParams} />
      <Footer footerContent={footer} />
    </Box>
  );
}
