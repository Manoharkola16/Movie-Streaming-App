import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import {
  fetchSportsMovies,
  fetchAdventureMovies,
} from "../api/MovieApi";
import { ArrowLeft } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";

const Sports = () => {


    const navigate = useNavigate();
  const [sportsMovies, setSportsMovies] =
    useState([]);

  const [adventureMovies, setAdventureMovies] =
    useState([]);

    const [sportsPage, setSportsPage] = useState(1);
const [adventurePage, setAdventurePage] = useState(1);

const [sportsTotalPages, setSportsTotalPages] = useState(1);
const [adventureTotalPages, setAdventureTotalPages] = useState(1);

useEffect(() => {
  const getSportsMovies = async () => {
    const sports =
      await fetchSportsMovies(sportsPage);

    const adventure =
      await fetchAdventureMovies(adventurePage);

    setSportsMovies(sports.movies);
    setAdventureMovies(adventure.movies);

    setSportsTotalPages(
      Math.ceil(sports.totalResults / 10)
    );

    setAdventureTotalPages(
      Math.ceil(adventure.totalResults / 10)
    );
  };

  getSportsMovies();
}, [sportsPage, adventurePage]);

  return (
    <div className="p-10 text-white bg-black">

      <h1 className="text-5xl font-bold mb-10">
        Sports & Adventure
      </h1>

      {/* SPORTS */}
      <div className="mb-14">

        <h2 className="text-3xl font-bold mb-6">
          Sports Movies
        </h2>

        <div className="
          grid
          grid-cols-2
          md:grid-cols-5
          gap-6
        ">
          {sportsMovies.map((movie) => (

             <MovieCard
                key={movie.imdbID}
                movie={movie}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-6">
  <button
    onClick={() =>
      setSportsPage((prev) => prev - 1)
    }
    disabled={sportsPage === 1}
    className="px-4 py-2 bg-zinc-800 rounded"
  >
    Prev
  </button>

  <span>
    {sportsPage} / {sportsTotalPages}
  </span>

  <button
    onClick={() =>
      setSportsPage((prev) => prev + 1)
    }
    disabled={sportsPage === sportsTotalPages}
    className="px-4 py-2 bg-pink-500 rounded"
  >
    Next
  </button>
</div>

      {/* ADVENTURE */}
      <div>

        <h2 className="text-3xl font-bold mb-6">
          Adventure Movies
        </h2>

        <div className="
          grid
          grid-cols-2
          md:grid-cols-5
          gap-6
        ">
          {adventureMovies.map((movie) => (

             <MovieCard
                key={movie.imdbID}
                movie={movie}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-6">
  <button
    onClick={() =>
      setAdventurePage((prev) => prev - 1)
    }
    disabled={adventurePage === 1}
    className="px-4 py-2 bg-zinc-800 rounded"
  >
    Prev
  </button>

  <span>
    {adventurePage} / {adventureTotalPages}
  </span>

  <button
    onClick={() =>
      setAdventurePage((prev) => prev + 1)
    }
    disabled={adventurePage === adventureTotalPages}
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

export default Sports;