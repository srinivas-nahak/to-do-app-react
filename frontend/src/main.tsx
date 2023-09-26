import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./store/api/apiSlices.ts";
import "./index.css";
import store from "./store/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
