import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/layout";

const testResults = [
  "реальний рівень виснаження",
  "схильність до самознецінення",
  "ступінь внутрішнього перфекціонізму",
  "ризик емоційного перевантаження",
];

export function TestSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/20">
      <Container>
        <FadeIn>
          <h2 className="text-[clamp(2rem,5vw,3.8rem)] font-normal leading-tight mb-4">
            Перший крок —
          </h2>
          <h2 className="text-[clamp(2rem,5vw,3.8rem)] font-normal leading-tight mb-16 text-muted-foreground">
            не сміливість. Перший крок — вимір.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Перед вебінаром ви пройдете короткий тест на рівень вигорання
              та внутрішнього тиску.
            </p>
            <p className="mb-4">Він покаже:</p>
            <div className="space-y-3">
              {testResults.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-px h-5 bg-muted-foreground opacity-50 mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="border border-border p-8 h-full flex flex-col justify-between">
              <div className="space-y-4 mb-8">
                {["Без публічності.", "Без оцінки.", "Без ризику для статусу."].map((phrase, i) => (
                  <p key={i} className="text-xl font-normal">{phrase}</p>
                ))}
              </div>
              <p className="text-muted-foreground text-sm">
                Це ваша перша точка відліку.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}