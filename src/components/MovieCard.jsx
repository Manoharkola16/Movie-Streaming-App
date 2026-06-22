import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {

  const [hovered, setHovered] =
    useState(false);

  const { dispatch, watchlist } =
    useContext(MovieContext);

  const navigate = useNavigate();

  const isAdded = watchlist.some(
    (item) =>
      item.imdbID === movie.imdbID
  );

  return (
    <motion.div

      whileHover={{
        scale: 1.15,
        zIndex: 999,
      }}

      onMouseEnter={() =>
        setHovered(true)
      }

      onMouseLeave={() =>
        setHovered(false)
      }

      className="
        relative
        z-10
        min-w-[180px]
        h-[300px]
        rounded-2xl
        overflow-hidden
        cursor-pointer
        flex-shrink-0
        shadow-xl
      "
    >

      {/* POSTER */}
      <img
        onClick={() =>
          navigate(
            `/movie/${movie.imdbID}`
          )
        }

        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450"
        }

        alt={movie.Title}

        className="
          w-full
          h-full
          object-cover
        "
      />

      {/* DARK OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/90
          via-black/30
          to-transparent
        "
      />

      {/* TITLE */}
      <div
        className="
          absolute
          bottom-3
          left-3
          z-20
        "
      >
        <h2
          className="
            text-white
            font-bold
            text-lg
            line-clamp-1
          "
        >
          {movie.Title}
        </h2>
      </div>

      {/* HOVER OVERLAY */}
      {hovered && (
        <motion.div

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          className="
            absolute
            inset-0
            z-50
            bg-black/80
            backdrop-blur-sm
            flex
            flex-col
            justify-end
            p-4
          "
        >

          {/* VIDEO PREVIEW */}
          <video
            autoPlay
            muted
            loop

            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              -z-10
            "
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
          </video>

          {/* MOVIE INFO */}
          <h2
            className="
              text-xl
              font-bold
              mb-2
            "
          >
            {movie.Title}
          </h2>

          <p
            className="
              text-gray-300
              text-sm
              mb-1
            "
          >
            {movie.Year}
          </p>

          <p
            className="
              text-gray-400
              text-sm
              mb-5
            "
          >
            Action • Adventure
          </p>

          {/* BUTTONS */}
          <div className="flex gap-3">

            {/* WATCH */}
            <button

              onClick={(e) => {
                e.stopPropagation();

                navigate(
                  `/movie/${movie.imdbID}`
                );
              }}

              className="
                flex-1
                bg-white
                text-black
                py-2
                rounded-lg
                font-semibold
                hover:bg-gray-200
                transition
              "
            >
              ▶ Watch
            </button>

            {/* WATCHLIST */}
            <button

              onClick={(e) => {

                e.stopPropagation();

                dispatch({
                  type:
                    "ADD_TO_WATCHLIST",

                  payload: movie,
                });

                console.log(
                  "Added:",
                  movie
                );
              }}

              disabled={isAdded}

              className={`
                px-4
                py-2
                rounded-lg
                font-bold
                transition
                ${
                  isAdded
                    ? "bg-green-500"
                    : "bg-pink-500 hover:bg-pink-600"
                }
              `}
            >
              {isAdded ? "✓" : "+"}
            </button>

          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default MovieCard;