import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {

  const [hovered, setHovered] =
    useState(false);

  const { dispatch } =
    useContext(MovieContext);

  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}

      onClick={() =>
        navigate(`/movie/${movie.imdbID}`)
      }

      onMouseEnter={() => setHovered(true)}

      onMouseLeave={() => setHovered(false)}

      className="
        relative
        min-w-[150px]
        h-[320px]
        rounded-xl
        overflow-hidden
        cursor-pointer
      "
    >
      {/* Poster */}
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="
          w-full
          h-full
          object-cover
        "
      />

      {/* WATCHLIST BUTTON */}
      <button
        onClick={(e) => {

          e.stopPropagation();

          dispatch({
            type: "ADD_TO_WATCHLIST",
            payload: movie,
          });
        }}

        className="
          absolute bottom-2 right-2
          bg-pink-500
          text-white
          px-3 py-1
          rounded-lg
          z-50
        "
      >
        ❤️
      </button>

      {/* HOVER OVERLAY */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          className="
            absolute inset-0
            bg-black/70
            flex flex-col
            justify-end
            p-4
          "
        >
          <h2 className="text-lg font-bold">
            {movie.Title}
          </h2>

          <p className="text-sm text-gray-300">
            Action • Adventure
          </p>

          {/* VIDEO PREVIEW */}
          <video
            autoPlay
            muted
            loop
            className="
              absolute inset-0
              w-full h-full
              object-cover
              -z-10
            "
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>
      )}
    </motion.div>
  );
};

export default MovieCard;