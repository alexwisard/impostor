import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container>
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
}