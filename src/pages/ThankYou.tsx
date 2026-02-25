import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/FadeIn";

export function ThankYou() {
  const [visible, setVisible] = useState(false);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const prefillFirstName = params.get("first_name") ?? "";
  const prefillLastName = params.get("last_name") ?? "";
  const prefillEmail = params.get("email") ?? "";
  // Tally form info
  const tallyFormId = "obyxGO";
  // Build Tally embed URL with prefill and recommended params
  const prefillPhone = params.get("phone") ?? "";
  const tallySrc = `https://tally.so/embed/${tallyFormId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&first_name_h=${encodeURIComponent(
    prefillFirstName
  )}&last_name_h=${encodeURIComponent(prefillLastName)}&email_h=${encodeURIComponent(prefillEmail)}&phone_h=${encodeURIComponent(prefillPhone)}`;

  console.log('Tally src:', tallySrc);

  useEffect(() => {
    setVisible(true);
    // Dynamically load Tally embed script if not present
    if (!document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      document.head.appendChild(script);
      script.onload = () => {
        if (window.Tally && typeof window.Tally.loadEmbeds === 'function') {
          window.Tally.loadEmbeds();
        }
      };
    } else if (window.Tally && typeof window.Tally.loadEmbeds === 'function') {
      window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center">
      <Container>
        <div className="max-w-xl mx-auto text-center">

          <div style={{ opacity: visible ? 1 : 0, transition: "opacity 1s ease" }}>
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6">
              Реєстрація завершена
            </p>
            <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-normal mb-6 leading-tight">
              Дякуємо!<br />
              <span className="text-muted-foreground">Ви зареєстровані.</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Деталі вебінару надійдуть на вашу пошту.<br />
            
            </p>
          </div>

          <FadeIn delay={0.4}>
            <div className="border border-border p-8 mb-10">
              <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">
                Отримайте ваш бонус!
              </p>
              <h2 className="text-xl font-normal mb-4">
                Синдром самозванця: як перетворити внутрішнього критика на союзника
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                PDF з практичними порадами для подолання синдрому самозванця та розвитку впевненості у своїх силах.
              </p>
              <Button variant="outline" size="lg" asChild>
                <a href="/bonus.pdf" download>
                  Завантажити PDF
                </a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="border border-border p-8 mb-10">
              <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">
                Заповніть анкету для бажаючих прийняти участь у вебінарі
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Короткі питання — займе ~1 хвилину.
              </p>

              <div role="region" aria-label="Анкета для кваліфікації" className="w-full">
                <iframe
                  title="Синдром Самозванця"
                  data-tally-src={tallySrc}
                  loading="lazy"
                  width="100%"
                  height={942}
                  frameBorder={0}
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded"
                ></iframe>
              </div>

              <p className="text-xs text-muted-foreground/50 mt-3">
                Альтернатива: <a href={`https://tally.so/r/${tallyFormId}?first_name_h=${encodeURIComponent(prefillFirstName)}&last_name_h=${encodeURIComponent(prefillLastName)}&email_h=${encodeURIComponent(prefillEmail)}&phone_h=${encodeURIComponent(prefillPhone)}`} target="_blank" rel="noopener noreferrer">Відкрити в новому вікні</a>
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-muted-foreground text-sm mb-6">
              Хочете повернутися на головну?
            </p>
            <Button variant="ghost" asChild>
              <Link to="/">← На головну</Link>
            </Button>
          </FadeIn>

        </div>
      </Container>
    </div>
  );
}