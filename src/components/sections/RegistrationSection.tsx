import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";

export function RegistrationSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    setSubmitted(true);
  };

  return (
    <section id="register" className="py-24 md:py-32 border-t border-border">
      <Container>
        <div className="max-w-xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6">
              Реєстрація
            </p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-normal mb-4 leading-tight">
              Пройти тест і зареєструватися
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Після реєстрації ви отримаєте посилання на тест і деталі вебінару.
            </p>
          </FadeIn>

          {submitted ? (
            <FadeIn>
              <div className="border border-border p-8 text-center">
                <p className="text-lg mb-2">Дякуємо!</p>
                <p className="text-muted-foreground text-sm">
                  Ми надішлемо деталі на вашу пошту.
                </p>
              </div>
            </FadeIn>
          ) : (
            <FadeIn delay={0.1}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs tracking-widest text-muted-foreground uppercase block mb-2">
                    Імʼя
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Як до вас звертатися"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-muted-foreground transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs tracking-widest text-muted-foreground uppercase block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-muted-foreground transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs tracking-widest text-muted-foreground uppercase block mb-2">
                    Телефон <span className="normal-case text-muted-foreground/50">(необовʼязково)</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+380"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-transparent border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-muted-foreground transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" size="lg" className="w-full">
                    Зареєструватися
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground/50 text-center pt-2">
                  Надсилаючи форму, ви погоджуєтесь з політикою конфіденційності
                </p>
              </form>
            </FadeIn>
          )}
        </div>
      </Container>
    </section>
  );
}