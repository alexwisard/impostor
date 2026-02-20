import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/layout";

const results = [
  "чітко зрозуміти свій стан",
  "відокремити реальний рівень від внутрішньої критики",
  "прийняти рішення щодо подальшої роботи",
];

export function ResultSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/20">
      <Container>
        <div className="grid md:grid-cols-2 gap-16">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6">Результат</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-normal mb-8">
              Після вебінару
            </h2>
            <p className="text-muted-foreground mb-8">Ви зможете:</p>
            <div className="space-y-4">
              {results.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-4 h-4 border border-muted-foreground opacity-50 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="border border-border p-8 mt-12 md:mt-16">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Для тих, кому потрібна глибша індивідуальна підтримка, буде
                можливість записатися на{" "}
                <span className="text-foreground">діагностичну сесію.</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}