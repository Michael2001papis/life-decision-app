/*
  זכויות יוצרים שמורות למיכאל פפיסמדוב MP
*/

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import { AppProvider } from "./context/AppContext";
import "./styles/app.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
