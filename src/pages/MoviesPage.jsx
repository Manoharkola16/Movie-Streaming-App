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

     const [actionPage, setActionPage] = useState(1);
        const [comedyPage, setComedyPage] = useState(1);

        const [actionTotalPages, setActionTotalPages] = useState(1);
        const [comedyTotalPages, setComedyTotalPages] = useState(1);


 useEffect(() => {
  const getMovies = async () => {
    const action =
      await fetchActionMovies(actionPage);

    const comedy =
      await fetchComedyMovies(comedyPage);

    setActionMovies(action.movies);
    setComedyMovies(comedy.movies);

    setActionTotalPages(
      Math.ceil(action.totalResults / 10)
    );

    setComedyTotalPages(
      Math.ceil(comedy.totalResults / 10)
    );
  };

  getMovies();
}, [actionPage, comedyPage]);

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

      <div className="flex justify-center items-center gap-4 mt-6">
  <button
    onClick={() =>
      setActionPage((prev) => prev - 1)
    }
    disabled={actionPage === 1}
    className="px-4 py-2 bg-zinc-800 rounded"
  >
    Prev
  </button>

  <span>
    {actionPage} / {actionTotalPages}
  </span>

  <button
    onClick={() =>
      setActionPage((prev) => prev + 1)
    }
    disabled={actionPage === actionTotalPages}
    className="px-4 py-2 bg-pink-500 rounded"
  >
    Next
  </button>
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

      <div className="flex justify-center items-center gap-4 mt-6">
  <button
    onClick={() =>
      setComedyPage((prev) => prev - 1)
    }
    disabled={comedyPage === 1}
    className="px-4 py-2 bg-zinc-800 rounded"
  >
    Prev
  </button>

  <span>
    {comedyPage} / {comedyTotalPages}
  </span>

  <button
    onClick={() =>
      setComedyPage((prev) => prev + 1)
    }
    disabled={comedyPage === comedyTotalPages}
    className="px-4 py-2 bg-pink-500 rounded"
  >
    Next
  </button>
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