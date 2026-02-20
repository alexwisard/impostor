import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-normal text-muted-foreground">404</h1>
      <p className="text-muted-foreground">Сторінку не знайдено</p>
      <Button variant="outline" asChild>
        <Link to="/">На головну</Link>
      </Button>
    </div>
  );
}