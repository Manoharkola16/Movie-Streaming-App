import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search as SearchIcon } from "lucide-react";
import MovieCard from "../components/MovieCard";
import useDebounce from "../hooks/Debounce";

const API_KEY = "270d2ace";

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const debouncedQuery = useDebounce(query, 500);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const navigate = useNavigate();

  const searchMovies = async () => {
    console.log("API Called :", debouncedQuery);
    
        if (!debouncedQuery.trim()) {
          setMovies([]);
          setNoResults(false);
          return;
        }
        setLoading(true);
        try {
          const response = await axios.get(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${debouncedQuery}&page=${page}`
          );
          const results = response.data.Search || [];
          setMovies(results);
          setTotalResults(parseInt(response.data.totalResults) || 0);
          setNoResults(results.length === 0);
        } catch (error) {
          console.log(error);
          setMovies([]);
          setNoResults(true);
        } finally {
          setLoading(false);
        }
      };

  useEffect(() => {
    searchMovies(1);
  }, [debouncedQuery, page ]);

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="bg-black min-h-screen text-white p-5 md:p-10">

      {/* Search Input */}
      <div className="relative mb-6">
        <SearchIcon
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-gray-500
          "
          size={22}
        />

        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
            w-full
            bg-gray-800
            border
            border-gray-700
            p-4
            pl-12
            rounded-xl
            outline-none
            text-xl
            focus:border-pink-500
            transition
          "
        />
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center text-lg text-gray-400 mb-6">
          Searching movies...
        </p>
      )}

      {/* Results Count */}
      {!loading && movies.length > 0 && (
        <p className="mb-6 text-gray-400">
          Found {movies.length} movie{movies.length > 1 ? "s" : ""}
        </p>
      )}

      {/* No Results */}
      {!loading && noResults && (
        <p className="text-center text-red-400 text-xl mb-6">
          No movies found 😢
        </p>
      )}

      {/* Movies Grid */}
      <div
            className="
              grid
              grid-cols-2
              md:grid-cols-5
              gap-6
            "
          >
            {movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
              />
            ))}
          </div>

          {movies.length > 0 && (
      <div className="flex justify-center items-center gap-4 mt-10">
        
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="
            px-4 py-2
            bg-gray-800
            rounded-lg
            disabled:opacity-50
          "
        >
          Previous
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="
            px-4 py-2
            bg-gray-800
            rounded-lg
            disabled:opacity-50
          "
        >
          Next
        </button>

      </div>
    )}

      {/* Back Button */}
      <div className="mt-10">
        <button
          onClick={() => navigate("/home")}
          className="
            flex
            items-center
            gap-2
            bg-gray-800
            px-4
            py-3
            rounded-lg
            text-white
            hover:text-pink-500
            hover:bg-gray-700
            transition
          "
        >
          <ArrowLeft size={24} />
          <span className="text-lg">Back</span>
        </button>
      </div>

    </div>
  );
};

export default Search;