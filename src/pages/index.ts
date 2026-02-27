declare global {
  interface Window {
    Tally?: {
      loadEmbeds?: () => void;
    };
  }
}
export {};

export { Home } from "./Home";
export { NotFound } from "./NotFound";
export { ThankYou } from "./ThankYou";
export { default as BookACall } from "./BookACall";