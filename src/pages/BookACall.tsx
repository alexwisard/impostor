// Добавляем объявление Cal для window
declare global {
  interface Window {
    Cal?: any;
  }
}
import React from "react";

import { useEffect } from "react";

const BookACall: React.FC = () => {
  useEffect(() => {
    // Проверяем, был ли уже добавлен скрипт
    if (!document.getElementById("cal-embed-script")) {
      const script = document.createElement("script");
      script.id = "cal-embed-script";
      script.src = "https://app.cal.com/embed/embed.js";
      script.async = true;
      document.head.appendChild(script);
      script.onload = () => {
        if (window.Cal) {
          window.Cal("init", "strategic-session", { origin: "https://app.cal.com" });
          window.Cal.ns["strategic-session"]("inline", {
            elementOrSelector: "#my-cal-inline-strategic-session",
            config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
            calLink: "oleksandr-petrusha-go8xyz/strategic-session",
          });
          window.Cal.ns["strategic-session"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
        }
      };
    } else if (window.Cal) {
      window.Cal("init", "strategic-session", { origin: "https://app.cal.com" });
      window.Cal.ns["strategic-session"]("inline", {
        elementOrSelector: "#my-cal-inline-strategic-session",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink: "oleksandr-petrusha-go8xyz/strategic-session",
      });
      window.Cal.ns["strategic-session"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", overflow: "scroll" }} id="my-cal-inline-strategic-session">
      {/* Cal inline embed будет загружен сюда */}
    </div>
  );
};

export default BookACall;
