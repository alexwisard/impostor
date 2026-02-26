import { useState } from "react";
import { Button } from "@/components/ui/button";

interface DownloadBonusButtonProps {
  email: string;
}

export function DownloadBonusButton({ email }: DownloadBonusButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    setLoading(true);
    setError(null);
    try {
      // 1. Сразу отправляем email в вебхук Make
      const hookRes = await fetch('https://hook.eu1.make.com/e6j6y2vvt06lbj6wqmlsklshlmlgcilr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (!hookRes.ok) {
        setError('Не вдалося відправити email. Спробуйте ще раз.');
        setLoading(false);
        return;
      }
      // 2. После успешного вебхука — скачиваем файл
      const res = await fetch('/download-bonus');
      if (res.ok) {
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "bonus.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      } else {
        setError("Не вдалося отримати бонус. Спробуйте ще раз.");
      }
    } catch (e) {
      setError("Сталася помилка. Спробуйте ще раз.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button variant="outline" size="lg" onClick={handleDownload} disabled={loading || !email}>
        {loading ? "Завантаження..." : "Завантажити PDF"}
      </Button>
      {error && <div className="text-red-500 text-xs mt-2">{error}</div>}
    </div>
  );
}
