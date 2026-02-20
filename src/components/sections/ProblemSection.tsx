import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/layout";

export function ProblemSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-start">

          <FadeIn>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.2] font-normal mb-6">
              Ти не сумніваєшся в знаннях.
            </h2>
            <p className="text-[clamp(1.2rem,2vw,1.6rem)] text-muted-foreground font-normal mb-8">
              Ти сумніваєшся в праві їх показати.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ти ростеш. Вчишся. Підвищуєш планку.<br />
              Але коли справа доходить до реалізації — з'являється пауза.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-4 mb-10">
              {["ще не ідеально", "ще треба доробити", "ще трохи підготуюся"].map((phrase, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-px bg-border flex-shrink-0" />
                  <p className="text-muted-foreground italic text-xl">{phrase}</p>
                </div>
              ))}
            </div>

            <div className="border-l-2 border-border pl-6 py-2">
              <p className="text-muted-foreground leading-relaxed">
                Це не про незнання.{" "}
                <span className="text-foreground">
                  Це про внутрішній конфлікт між амбіцією і страхом перевірки реальністю.
                </span>
              </p>
            </div>
          </FadeIn>

        </div>
      </Container>
    </section>
  );
}