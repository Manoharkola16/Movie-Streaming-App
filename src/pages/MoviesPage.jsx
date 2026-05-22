import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import {
  fetchActionMovies,
  fetchComedyMovies,
} from "../api/MovieApi";
import { ArrowLeft } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";

const MoviesPage = () => {

    const navigate = useNavigate();
  const [actionMovies, setActionMovies] =
    useState([]);

  const [comedyMovies, setComedyMovies] =
    useState([]);

  useEffect(() => {

    const getMovies = async () => {

      const action =
        await fetchActionMovies();

      const comedy =
        await fetchComedyMovies();

      setActionMovies(action);

      setComedyMovies(comedy);
    };

    getMovies();

  }, []);

  return (
    <div className="p-10 text-white bg-black">

      <h1 className="text-5xl font-bold mb-10">
        Movies
      </h1>

      {/* ACTION */}
      <div className="mb-14">

        <h2 className="text-3xl font-bold mb-6">
          Action Movies
        </h2>

        <div className="
          grid
          grid-cols-2
          md:grid-cols-5
          gap-6
        ">
         {actionMovies.map((movie) => (

            <MovieCard
                key={movie.imdbID}
                movie={movie}
            />

       ))}
        </div>
      </div>

      {/* COMEDY */}
      <div>

        <h2 className="text-3xl font-bold mb-6">
          Comedy Movies
        </h2>

        <div className="
          grid
          grid-cols-2
          md:grid-cols-5
          gap-6
        ">
          {comedyMovies.map((movie) => (

          <MovieCard
                key={movie.imdbID}
                movie={movie}
            />
          ))}
        </div>
      </div>

            <button
                onClick={() => navigate("/home")}
                className="
                    flex items-center gap-2
                    mb-6
                    bg-gray-700
                    px-4 py-2
                    rounded-lg
                    text-white
                    hover:text-pink-500
                    transition
                "
                >
                <ArrowLeft size={28} />
                <span className="text-lg">
                    Back
                </span>
       </button>

    </div>
  );
};

export default MoviesPage;