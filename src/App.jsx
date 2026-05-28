import React from "react";

import AppRoutes from "./routes/AppRoutes";

import { MovieProvider } from "./context/MovieContext";

const App = () => {
  return (
    <MovieProvider>
      <AppRoutes />
    </MovieProvider>
  );
};

export default App;