import { Companies } from "./components/sections/companies/compaines";
import { ConsultQuestions } from "./components/sections/consult-questions/consultQuestions";
import Hero from "./components/sections/hero/hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Companies />
      <ConsultQuestions />
    </div>
  );
}
