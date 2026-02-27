// Добавляем объявление Cal для window
declare global {
  interface Window {
    Cal?: any;
  }
}
import { useEffect } from "react";
const CAL_SRC = "https://app.cal.com/embed/embed.js";

function loadCalScript() {
  return new Promise<void>((resolve, reject) => {
    if (document.querySelector(`script[src=\"${CAL_SRC}\"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = CAL_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

const BookACall: React.FC = () => {
  useEffect(() => {
    let mounted = true;
    loadCalScript().then(() => {
      if (mounted && window.Cal) {
        window.Cal("init");
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div>
      <h1>Book a Call</h1>
      <div
        className="cal-inline"
        data-cal-link="oleksandr-petrusha-go8xyz/strategic-session"
        style={{ width: "100%", minHeight: "700px" }}
      />
    </div>
  );
};

export default BookACall;
