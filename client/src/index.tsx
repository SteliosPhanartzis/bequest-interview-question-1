import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>
);