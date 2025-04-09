import { Companies } from "./components/sections/companies/compaines";
import { ConsultQuestions } from "./components/sections/consult-questions/consultQuestions";
import { Consult } from "./components/sections/consult/consult";
import { ConsultLevel } from "./components/sections/consultLevels/consultLevel";
import { ExtraSection } from "./components/sections/extra-section/extraSection";
import { Faq } from "./components/sections/faq/FAQ";
import Hero from "./components/sections/hero/hero";
import { Results } from "./components/sections/result/result";
import { Footer } from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Companies />
      <ConsultQuestions />
      <Consult />
      <ConsultLevel />
      <Results />
      <Faq />
      <ExtraSection />
      <Footer />
    </div>
  );
}
