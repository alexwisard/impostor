import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section id="register" className="py-24 md:py-32 border-t border-border">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-8">
              Початок тут
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-normal mb-6 leading-tight">
              Перший крок —<br />
              <span className="text-muted-foreground">вимір без ризику.</span>
            </h2>
            <p className="text-muted-foreground mb-12 leading-relaxed">
              Пройдіть короткий тест і зареєструйтеся на вебінар.<br />
              Без публічності. Без оцінки.
            </p>
            <Button size="lg" asChild>
              <a href="#">Пройти тест і зареєструватися</a>
            </Button>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}