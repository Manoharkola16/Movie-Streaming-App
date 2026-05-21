import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieDetails from "../pages/MovieDetails";
import Watchlist from "../pages/Watchlist";
import Search from "../pages/Search";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Login />} />
         <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        <Route
          path="/movie/:id"
          element={<MovieDetails />}
        />

        <Route
          path="/watchlist"
          element={<Watchlist />}
        />

        <Route
          path="/search"
          element={<Search />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;