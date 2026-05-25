
import {  BrowserRouter,  Routes,  Route,} from "react-router-dom";
import ProtectedRoute
from "../components/ProtectedRoutes";

import {lazy,Suspense,} from "react";

const Login = lazy(() => import("../pages/Login"));

const Register = lazy(() => import("../pages/Register"));

const Home = lazy(() => import("../pages/Home"));

const TrendingPage = lazy(() => import("../pages/TrendingPage"));

const MoviesPage =lazy(() => import("../pages/MoviesPage"));

const ShowsPage = lazy(() => import("../pages/ShowsPage"));

const Sports = lazy(() => import("../pages/SportsPage"));

const CategoriesPage =  lazy(() => import("../pages/CategoriesPage"));

const Watchlist =  lazy(() => import("../pages/WatchList"));

const Search = lazy(() => import("../pages/Search"));

  const MovieDetails = lazy(() => import("../pages/MovieDetails"));

const AppRoutes = () => {

  return (
    <BrowserRouter>

      <Suspense
        fallback={
          <div className="  h-screen  flex  items-center  justify-center  text-white  bg-black">
            Loading...
          </div>
        }
      >

        <Routes>

          <Route
            path="/"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/home"
            element={<ProtectedRoute>
                            <Home />
                          </ProtectedRoute>}
          />

          <Route
              path="/movie/:id"
              element={
                      <ProtectedRoute>
                        <MovieDetails />
                      </ProtectedRoute>
                    }
           />

          <Route
            path="/trending"
            element={<ProtectedRoute>
                <TrendingPage />
              </ProtectedRoute>}
          />

          <Route
            path="/movies"
            element={<ProtectedRoute>
                <MoviesPage />
              </ProtectedRoute>}
          />

          <Route
            path="/shows"
            element={<ProtectedRoute>
                <ShowsPage />
              </ProtectedRoute>}
          />

          <Route
            path="/sports"
            element={<ProtectedRoute>
                <Sports />
              </ProtectedRoute>}
          />

          <Route
            path="/categories"
            element={<ProtectedRoute>
                <CategoriesPage />
              </ProtectedRoute>}
                    />

          <Route
            path="/watchlist"
            element={
              <ProtectedRoute>
                <Watchlist />
              </ProtectedRoute>
            }
          />

          <Route
            path="/search"
            element={<ProtectedRoute>
                <Search />
              </ProtectedRoute>}
          />

          

        </Routes>

      </Suspense>

    </BrowserRouter>
  );
};

export default AppRoutes;