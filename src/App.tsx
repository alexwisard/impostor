import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Home, NotFound, ThankYou, BookACall } from "@/pages";

// додай новий роут
<Route path="/thank-you" element={<Layout><ThankYou /></Layout>} />

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/thank-you" element={<Layout><ThankYou /></Layout>} />
        <Route path="/book-a-call" element={<Layout><BookACall /></Layout>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
