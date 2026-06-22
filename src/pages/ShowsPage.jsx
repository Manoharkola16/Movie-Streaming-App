import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";


import {
  fetchAnimeMovies,
  fetchSciFiMovies,
} from "../api/MovieApi";
import { ArrowLeft } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";

const ShowsPage = () => {

    const navigate = useNavigate();
  const [animeShows, setAnimeShows] =
    useState([]);

  const [sciFiShows, setSciFiShows] =
    useState([]);

    const [animePage, setAnimePage] = useState(1);
const [sciFiPage, setSciFiPage] = useState(1);

const [animeTotalPages, setAnimeTotalPages] = useState(1);
const [sciFiTotalPages, setSciFiTotalPages] = useState(1);

 useEffect(() => {
  const getShows = async () => {
    const anime =
      await fetchAnimeMovies(animePage);

    const scifi =
      await fetchSciFiMovies(sciFiPage);

    setAnimeShows(anime.movies);
    setSciFiShows(scifi.movies);

    setAnimeTotalPages(
      Math.ceil(anime.totalResults / 10)
    );

    setSciFiTotalPages(
      Math.ceil(scifi.totalResults / 10)
    );
  };

  getShows();
}, [animePage, sciFiPage]);

  return (
    <div className="p-10 text-white bg-black">

      <h1 className="text-5xl font-bold mb-10">
        TV Shows
      </h1>

      {/* ANIME */}
      <div className="mb-14">

        <h2 className="text-3xl font-bold mb-6">
          Anime Shows
        </h2>

        <div className="
          grid
          grid-cols-2
          md:grid-cols-5
          gap-6
        ">
          {animeShows.map((movie) => (

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
      setAnimePage((prev) => prev - 1)
    }
    disabled={animePage === 1}
    className="px-4 py-2 bg-zinc-800 rounded"
  >
    Prev
  </button>

  <span>
    {animePage} / {animeTotalPages}
  </span>

  <button
    onClick={() =>
      setAnimePage((prev) => prev + 1)
    }
    disabled={animePage === animeTotalPages}
    className="px-4 py-2 bg-pink-500 rounded"
  >
    Next
  </button>
</div>

      {/* SCI-FI */}
      <div>

        <h2 className="text-3xl font-bold mb-6">
          Sci-Fi Shows
        </h2>

        <div className="
          grid
          grid-cols-2
          md:grid-cols-5
          gap-6
        ">
          {sciFiShows.map((show) => (

            <div
              key={show.imdbID}
              className="
                hover:scale-105
                transition-all
                duration-300
                cursor-pointer
              "
            >
              <img
                src={show.Poster}
                alt={show.Title}
                className="
                  rounded-2xl
                  h-[300px]
                  w-full
                  object-cover
                "
              />

              <h2 className="mt-2">
                {show.Title}
              </h2>

            </div>
          ))}
        </div>
      </div>
             
             <div className="flex justify-center gap-4 mt-6">
  <button
    onClick={() =>
      setSciFiPage((prev) => prev - 1)
    }
    disabled={sciFiPage === 1}
    className="px-4 py-2 bg-zinc-800 rounded"
  >
    Prev
  </button>

  <span>
    {sciFiPage} / {sciFiTotalPages}
  </span>

  <button
    onClick={() =>
      setSciFiPage((prev) => prev + 1)
    }
    disabled={sciFiPage === sciFiTotalPages}
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

export default ShowsPage;