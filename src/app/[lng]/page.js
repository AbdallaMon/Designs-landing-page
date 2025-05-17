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

export default function Home() {
  return (
    <Box
      sx={{
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <Hero />
      <Companies />
      <ConsultQuestions />
      <Consult />
      <ConsultLevel />
      <Results />
      <TestimonialSwiper />
      <Faq />
      <About />
      <ExtraSection />
      <Footer />
    </Box>
  );
}
