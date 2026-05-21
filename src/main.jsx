import React from "react";
import ReactDOM from "react-dom/client";

import AppRoutes from "./routes/AppRoutes";

import "./App.css";
import MovieProvider from "./context/MovieContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MovieProvider>
    <AppRoutes />
  </MovieProvider>
);