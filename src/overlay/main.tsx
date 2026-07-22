import React from "react";
import ReactDOM from "react-dom/client";
import RecordingOverlay from "./RecordingOverlay";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@/i18n";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecordingOverlay />
  </React.StrictMode>,
);
