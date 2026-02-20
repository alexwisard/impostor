import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/layout";

const topics = [
  "реальний механізм синдрому самозванця у професіоналів",
  "чому перфекціонізм часто є формою захисту",
  "як перейти від потенціалу до втілення",
  "як навчитися фіксувати рівень без руйнування самоідентичності",
  "як зменшити страх перевірки реальністю",
];

export function ProgramSection() {
  return (
    <section id="program" className="py-24 md:py-32">
      <Container>
        <FadeIn>
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6">Програма</p>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-normal mb-12">
            На вебінарі ми розберемо
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {topics.map((topic, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="flex items-start gap-6 py-5 border-b border-border group cursor-default">
                <span className="text-muted-foreground text-xs pt-1 w-8 flex-shrink-0 group-hover:text-foreground transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                  {topic}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}