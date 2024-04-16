import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import ScrollToTopOfPage from "./components/ScrollToTopOfPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTopOfPage />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
