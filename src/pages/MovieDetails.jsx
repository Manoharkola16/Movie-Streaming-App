import { useEffect, useState, useContext,} from "react";
import {useNavigate,useParams,} from "react-router-dom";
import { ArrowLeft,} from "lucide-react";
import axios from "axios";
import {MovieContext,} from "../context/MovieContext";

const API_KEY = "270d2ace";

const MovieDetails = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [movie, setMovie] =
    useState(null);

  const {
    watchlist,
    dispatch,
  } = useContext(MovieContext);

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails =
    async () => {

      const response =
        await axios.get(
          `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
        );

      setMovie(response.data);
    };

  if (!movie) {
    return (
      <div
        className="
          text-white
          text-5xl
          flex
          flex-row
          justify-center
          items-center
          h-screen
          bg-black
        "
      >
        Loading...
      </div>
    );
  }

  const isAdded =
    watchlist.some(
      (item) =>
        item.imdbID === movie.imdbID
    );

  return (
    <div
      className="
        bg-black
        min-h-screen
        text-white
        p-5 md:p-10
        flex-row
      "
    >

      {/* CONTENT */}
      <div
        className="
          flex
          flex-col
          md:flex-row
          gap-10
        "
      >

        {/* POSTER */}
        <img

          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450"
          }

          alt={movie.Title}

          className="
            w-full
            md:w-[320px]
            rounded-2xl
            shadow-2xl
            
          "
        />

            

        {/* DETAILS */}
        <div className="flex-1">

          <h1
            className="
              text-4xl
              md:text-6xl
              font-bold
              mb-6
            "
          >
            {movie.Title}
          </h1>

          <div
            className="
              flex
              flex-wrap
              gap-4
              text-gray-400
              mb-6
            "
          >
            <span>
              📅 {movie.Year}
            </span>

            <span>
              ⭐ {movie.imdbRating}
            </span>

            <span>
              ⏱️ {movie.Runtime}
            </span>
          </div>

          <p
            className="
              text-lg
              leading-relaxed
              text-gray-300
              mb-8
            "
          >
            {movie.Plot}
          </p>

          <div className="space-y-3 mb-10">

            <p>
              🎭 Genre:
              {" "}
              {movie.Genre}
            </p>

            <p>
              🎬 Director:
              {" "}
              {movie.Director}
            </p>

            <p>
              👨‍🎤 Actors:
              {" "}
              {movie.Actors}
            </p>

            <p>
              🌍 Language:
              {" "}
              {movie.Language}
            </p>

          </div>

          {/* WATCHLIST BUTTON */}
          <button

            onClick={() => {

              if (isAdded) {

                dispatch({
                  type:
                    "REMOVE_FROM_WATCHLIST",

                  payload:
                    movie.imdbID,
                });

              } else {

                dispatch({
                  type:
                    "ADD_TO_WATCHLIST",

                  payload: movie,
                });
              }
            }}

            className={`
              px-8
              py-4
              rounded-xl
              text-lg
              font-bold
              transition
              ${
                isAdded
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-pink-500 hover:bg-pink-600"
              }
            `}
          >
            {isAdded
              ? "Remove from Watchlist"
              : "+ Add to Watchlist"}
          </button>
           <br />
            <br />
          
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
      </div>
    </div>
  );
};

export default MovieDetails;