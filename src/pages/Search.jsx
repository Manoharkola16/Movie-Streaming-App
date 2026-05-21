import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const API_KEY = "270d2ace";

const Search = () => {
  const [query, setQuery] = useState("");

  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  const searchMovies = async (value) => {
    setQuery(value);

    if (!value) return;

    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}`
    );

    setMovies(response.data.Search || []);
  };

  return (
    <div className="bg-black min-h-screen text-white p-5 md:p-10">

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) =>
          searchMovies(e.target.value)
        }
        className="
          w-full
          bg-gray-400
          p-4
          rounded-xl
          outline-none
          text-xl
          mb-10
        "
      />

      {/* Movies */}
      <div className="
        grid
        grid-cols-2
        md:grid-cols-5
        gap-6
      ">
        {movies.map((movie) => (
          <div key={movie.imdbID}>
            <img
              src={movie.Poster}
              alt=""
              className="
                rounded-xl
                hover:scale-110
                transition
              "
            />

            <h2 className="mt-3 text-sm md:text-lg">
              {movie.Title}
            </h2>
          </div>
        ))}
      </div>

    <br /> <br />
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

export default Search;