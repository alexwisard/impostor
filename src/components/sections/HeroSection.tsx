import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout";
import { useScrollY } from "@/hooks";
import heroImage from "@/assets/hero.webp";

export function HeroSection() {
  const scrollY = useScrollY();

  return (
    <section id="hero" className="relative min-h-[calc(100vh-64px)] flex items-center py-12">
      <Container className="w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Текст слева */}
          <div>
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-8"
              style={{ animation: "fadeUp 0.8s ease 0.1s both" }}>
              Практичний вебінар
            </p>
            <h1 className="text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.1] font-normal mb-4"
              style={{ animation: "fadeUp 0.8s ease 0.25s both" }}>
              Синдром самозванця —
            </h1>
            <h1 className="text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.1] font-normal mb-8 text-muted-foreground"
              style={{ animation: "fadeUp 0.8s ease 0.35s both" }}>
              це не про брак знань.
            </h1>
            <h2 className="text-[clamp(1.1rem,2vw,1.6rem)] font-normal text-muted-foreground mb-8"
              style={{ animation: "fadeUp 0.8s ease 0.45s both" }}>
              Це про страх перевірити свій рівень.
            </h2>
            <p className="text-base text-muted-foreground max-w-md mb-10 leading-relaxed"
              style={{ animation: "fadeUp 0.8s ease 0.55s both" }}>
              Практичний вебінар для професіоналів, які вкладаються по повній —
              але відкладають момент проявитися.
            </p>
            <div style={{ animation: "fadeUp 0.8s ease 0.65s both" }}>
              <Button size="lg" asChild>
                <a href="#register">Пройти тест і зареєструватися</a>
              </Button>
            </div>
          </div>

          {/* Картинка справа */}
          <div
            className="relative hidden md:block"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
              animation: "fadeUp 1s ease 0.4s both",
            }}
          >
            <img
              src={heroImage}
              alt="Синдром самозванця"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

        </div>
      </Container>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}