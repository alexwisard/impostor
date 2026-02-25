import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function RegistrationSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ first_name: "", last_name: "", email: "", phone: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Отправка данных формы на сервер
    try {
      await fetch("https://hook.eu1.make.com/92k5tm0l67vt39orcsbba2bo38hh95vm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
    } catch (error) {
      // Можно добавить обработку ошибки
      console.error("Ошибка отправки формы:", error);
    }
    navigate(
      `/thank-you?first_name=${encodeURIComponent(form.first_name)}&last_name=${encodeURIComponent(
        form.last_name
      )}&email=${encodeURIComponent(form.email)}&phone=${encodeURIComponent(form.phone)}`
    );
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
              Зареєструйтеся і отримайте бонус: PDF з практичними порадами для подолання синдрому самозванця!
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Після реєстрації ви отримаєте посилання на бонус.
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs tracking-widest text-muted-foreground uppercase block mb-2">
                      Імʼя
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ваше ім'я"
                      value={form.first_name}
                      onChange={e => setForm({ ...form, first_name: e.target.value })}
                      className="w-full bg-transparent border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-muted-foreground transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs tracking-widest text-muted-foreground uppercase block mb-2">
                      Прізвище
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ваше прізвище"
                      value={form.last_name}
                      onChange={e => setForm({ ...form, last_name: e.target.value })}
                      className="w-full bg-transparent border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-muted-foreground transition-colors"
                    />
                  </div>
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