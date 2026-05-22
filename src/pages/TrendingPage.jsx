import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { fetchTrendingMovies }
from "../api/MovieApi";
import { ArrowLeft } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";

const TrendingPage = () => {

  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const getMovies = async () => {

      const data =
        await fetchTrendingMovies();

      setMovies(data);
    };

    getMovies();

  }, []);

  return (
    <div className="p-10 text-white bg-black">

      <h1 className="text-5xl font-bold mb-10">
        Trending Movies
      </h1>

      <div className="
        grid
        grid-cols-2
        md:grid-cols-5
        gap-6
      ">
        {movies.map((movie) => (

           <MovieCard
                key={movie.imdbID}
                movie={movie}
            />
        ))}
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

export default TrendingPage;