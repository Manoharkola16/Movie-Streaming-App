import { motion } from "framer-motion";

import { ArrowLeft } from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import axios from "axios";

import MovieCard from "../components/MovieCard";

const API_KEY = "270d2ace";

const categories = [
  "Action",
  "Comedy",
  "Anime",
  "Sports",
  "Sci-Fi",
  "Thriller",
  "Marvel",
  "DC",
];

const CategoriesPage = () => {

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
 const totalPages = Math.ceil(totalResults / 10);
  const [selectedCategory,
    setSelectedCategory] =
    useState("Action");

  const [movies, setMovies] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // FETCH CATEGORY MOVIES
  useEffect(() => {

    fetchMovies(selectedCategory);

  }, [selectedCategory]);

  useEffect(() => {
  fetchMovies(selectedCategory, currentPage);
  }, [selectedCategory, currentPage]);

 const fetchMovies = async (category, page) => {
  try {
    setLoading(true);

    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${category}&page=${page}`
    );

    setMovies(response.data.Search || []);
    setTotalResults(Number(response.data.totalResults) || 0);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

  return (
    <div
      className="
        min-h-screen
        bg-black
        text-white
        p-6 md:p-10
      "
    >
      {/* HEADING */}
      <h1
        className="
          text-4xl
          md:text-5xl
          font-bold
          mb-10
        "
      >
        Categories
      </h1>

      {/* CATEGORY BUTTONS */}
      <div
        className="
          flex flex-wrap
          gap-4
          mb-10
        "
      >
        {categories.map((category,
          index) => (

          <motion.button
            key={index}

            whileHover={{
              scale: 1.05,
            }}

            whileTap={{
              scale: 0.95,
            }}

           onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}

            className={`
              px-6 py-3
              rounded-2xl
              font-semibold
              transition-all
              duration-300

              ${
                selectedCategory === category
                  ? "bg-pink-500 text-white"
                  : "bg-zinc-900 hover:bg-pink-500"
              }
            `}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* CATEGORY TITLE */}
      <h2
        className="
          text-3xl
          font-bold
          mb-8
        "
      >
        {selectedCategory} Movies
      </h2>

      {/* LOADING */}
      {loading ? (

        <div className="text-2xl">
          Loading...
        </div>

      ) : (

        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
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
      )}

          {!loading && movies.length > 0 && (
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className="
              px-4 py-2
              bg-pink-500
              rounded-lg
              disabled:opacity-50
            "
          >
            Previous
          </button>

          <span className="text-lg">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
            className="
              px-4 py-2
              bg-pink-500
              rounded-lg
              disabled:opacity-50
            "
          >
            Next
          </button>
        </div>
      )}

      {/* BACK BUTTON */}
      <button
        onClick={() =>
          navigate("/home")
        }

        className="
          flex items-center
          gap-2
          mt-10
          bg-gray-700
          px-4 py-2
          rounded-lg
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

export default CategoriesPage;