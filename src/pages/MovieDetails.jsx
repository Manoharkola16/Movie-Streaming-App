import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import axios from "axios";

const API_KEY = "270d2ace";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
    );

    setMovie(response.data);
  };

  if (!movie) {
    return (
      <div className="text-white text-5xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white p-10 ">

      <div className="flex flex-col md:flex-row gap-10">

        {/* Poster */}
        <img
          src={movie.Poster}
          alt=""
          className="w-[300px] rounded-xl"
        />

        {/* Details */}
        <div>
          <h1 className="text-5xl font-bold mb-6">
            {movie.Title}
          </h1>

          <p className="text-gray-400 mb-4">
            {movie.Year}
          </p>

          <p className="text-lg mb-6">
            {movie.Plot}
          </p>

          <p className="mb-2">
            ⭐ IMDb Rating: {movie.imdbRating}
          </p>

          <p className="mb-2">
            🎭 Genre: {movie.Genre}
          </p>

          <p className="mb-2">
            🎬 Director: {movie.Director}
          </p>

          <p className="mb-2">
            👨‍🎤 Actors: {movie.Actors}
          </p>
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

export default MovieDetails;