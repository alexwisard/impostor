import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout";
import { useScrollY } from "@/hooks";
import { FadeIn } from "@/components/ui/FadeIn";
import heroImage from "@/assets/hero.webp";

export function HeroSection() {
  const scrollY = useScrollY();

  return (
    <section id="hero" className="relative min-h-[calc(100vh-64px)] flex items-center py-12">
      <Container className="w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Текст слева */}
          <div>
            <FadeIn delay={0.1}>
              <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-8">
                Практичний вебінар
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <h1 className="text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.1] font-normal mb-4">
                Синдром самозванця —
              </h1>
            </FadeIn>
            <FadeIn delay={0.35}>
              <h1 className="text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.1] font-normal mb-8 text-muted-foreground">
                це не про брак знань.
              </h1>
            </FadeIn>
            <FadeIn delay={0.45}>
              <h2 className="text-[clamp(1.1rem,2vw,1.6rem)] font-normal text-muted-foreground mb-8">
                Це про страх перевірити свій рівень.
              </h2>
            </FadeIn>
            <FadeIn delay={0.55}>
              <p className="text-base text-muted-foreground max-w-md mb-10 leading-relaxed">
                Практичний вебінар для професіоналів, які вкладаються по повній —
                але відкладають момент проявитися.
              </p>
            </FadeIn>
            <FadeIn delay={0.65}>
              <Button size="lg" asChild>
                <a href="#register">Зареєструватися і отримати бонус</a>
              </Button>
            </FadeIn>
          </div>

          {/* Картинка справа */}
          <FadeIn delay={0.4} className="hidden md:block">
            <div
              className="relative"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`,
              }}
            >
              <img
                src={heroImage}
                alt="Синдром самозванця"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </FadeIn>

        </div>
      </Container>
    </section>
  );
}
