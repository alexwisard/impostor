import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/layout";

const symptoms = [
  "ти довго готуєшся перед запуском",
  "відкладаєш публікацію результатів",
  "знецінюєш власні досягнення",
  "порівнюєш себе з найсильнішими",
  "не можеш прийняти комплімент",
];

export function SymptomsSection() {
  return (
    <section id="symptoms" className="py-24 bg-muted/20">
      <Container>
        <FadeIn>
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">Симптоми</p>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-normal mb-12">
            Як це проявляється
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-3 mb-12">
          {symptoms.map((s, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="flex items-start gap-4 p-5 border border-border hover:border-muted-foreground transition-colors duration-300">
                <span className="text-muted-foreground text-sm mt-0.5 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-muted-foreground leading-relaxed">{s}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground mb-3">І головне:</p>
            <p className="text-xl md:text-2xl">
              Ти вкладаєшся більше за інших, але не дозволяєш собі{" "}
              <span className="text-muted-foreground">повну видимість.</span>
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}