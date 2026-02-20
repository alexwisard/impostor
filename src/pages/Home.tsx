import { Section } from "@/components/layout";
import { Container } from "@/components/layout";

export function Home() {
  return (
    <>
      <Section id="hero" className="min-h-screen flex items-center">
        <Container>
          <h1 className="text-5xl font-normal">Заголовок</h1>
          <p className="text-muted-foreground mt-4">Підзаголовок</p>
        </Container>
      </Section>
    </>
  );
}