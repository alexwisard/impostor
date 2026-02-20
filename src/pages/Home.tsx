import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SymptomsSection } from "@/components/sections/SymptomsSection";
import { ExhaustionSection } from "@/components/sections/ExhaustionSection";
import { TestSection } from "@/components/sections/TestSection";    
import { ProgramSection } from "@/components/sections/ProgramSection";  
import { ResultSection } from "@/components/sections/ResultSection";
import { RegistrationSection } from "@/components/sections/RegistrationSection";  

export function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SymptomsSection />
      <ExhaustionSection />
      <TestSection />
      <ProgramSection />
      <ResultSection />
      <RegistrationSection />
    </>
  );
}