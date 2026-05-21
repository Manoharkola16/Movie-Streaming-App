import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Trash2 } from "lucide-react";

import {
  MovieContext,
} from "../context/MovieContext";

const Watchlist = () => {
  const { watchlist, dispatch } =
    useContext(MovieContext);

  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen text-white p-5 md:p-10">

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold mb-10">
        My Watchlist ❤️
      </h1>

      {/* Empty State */}
      {watchlist.length === 0 && (
        <div className="text-gray-400 text-xl">
          No movies added yet...
        </div>
      )}

      {/* Movies */}
      <div className="
        grid
        grid-cols-2
        md:grid-cols-5
        gap-6
      ">
        {watchlist.map((movie) => (
          <div
            key={movie.imdbID}
            className="relative"
          >
            {/* Poster */}
            <img
              onClick={() =>
                navigate(`/movie/${movie.imdbID}`)
              }
              src={movie.Poster}
              alt=""
              className="
                rounded-xl
                cursor-pointer
                hover:scale-105
                transition
              "
            />

            {/* Remove Button */}
            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_WATCHLIST",
                  payload: movie.imdbID,
                })
              }
              className="
                absolute top-2 right-2
                bg-red-500
                p-2
                rounded-full
              "
            >
              <Trash2 size={18} />
            </button>

            {/* Title */}
            <h2 className="mt-3 text-sm md:text-lg">
              {movie.Title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;