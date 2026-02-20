import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/layout";

const modes = [
  "постійної підготовки",
  "постійного самоконтролю",
  "постійного підвищення стандартів",
];

export function ExhaustionSection() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">

          <FadeIn className="md:col-span-1">
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6">Наслідки</p>
            <h2 className="text-[clamp(1.6rem,2.5vw,2.2rem)] font-normal leading-tight">
              Чому це<br />виснажує
            </h2>
          </FadeIn>

          <FadeIn delay={0.15} className="md:col-span-2">
            <p className="text-muted-foreground mb-6">Бо ти живеш у режимі:</p>
            <div className="space-y-3 mb-10">
              {modes.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground opacity-40 flex-shrink-0" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>

            <div className="border border-border p-6">
              <p className="text-muted-foreground leading-relaxed">
                Мозок не фіксує досягнення.{" "}
                <span className="text-foreground">
                  Він шукає, що ще треба довести.
                </span>{" "}
                Так поступово формується вигорання.
              </p>
            </div>
          </FadeIn>

        </div>
      </Container>
    </section>
  );
}