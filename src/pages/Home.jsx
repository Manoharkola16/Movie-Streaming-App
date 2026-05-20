import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import HeroBanner from "../components/HeroBanner";
import MovieRow from "../components/MovieRow";

import {
  fetchTrendingMovies,
  fetchActionMovies,
  fetchComedyMovies,
  fetchAnimeMovies,
  fetchSportsMovies,
  fetchTopRatedMovies,
  fetchSciFiMovies,
  fetchAdventureMovies,
  fetchMarvelMovies,
  fetchDCMovies,
  fetchThrillerMovies,
} from "../api/MovieApi";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [animeMovies, setAnimeMovies] = useState([]);
  const [sportsMovies, setSportsMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [sciFiMovies, setSciFiMovies] = useState([]);
  const [adventureMovies, setAdventureMovies] = useState([]);
  const [marvelMovies, setMarvelMovies] = useState([]);
  const [dcMovies, setDCMovies] = useState([]);
  const [thrillerMovies, setThrillerMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const trending = await fetchTrendingMovies();
    const action = await fetchActionMovies();
    const comedy = await fetchComedyMovies();
    const anime = await fetchAnimeMovies();
    const sports = await fetchSportsMovies();
    const topRated = await fetchTopRatedMovies();
    const sciFi = await fetchSciFiMovies();
    const adventure = await fetchAdventureMovies();
    const marvel = await fetchMarvelMovies();
    const dc = await fetchDCMovies();
    const thriller = await fetchThrillerMovies();


    setTrendingMovies(trending);
    setActionMovies(action);
    setComedyMovies(comedy);
    setAnimeMovies(anime);
    setSportsMovies(sports);
    setTopRated(topRated);
    setSciFiMovies(sciFi);
    setAdventureMovies(adventure);
    setMarvelMovies(marvel);
    setDCMovies(dc);
    setThrillerMovies(thriller);
  };

  return (
    <div className="bg-black min-h-screen text-white pb-20 md:pb-0">
      <Sidebar />

      <HeroBanner />

      <div className="pl-5 md:pl-28 mt-[-100px] relative z-20">
        <MovieRow
          title="Trending Movies"
          movies={trendingMovies}
        />

        <MovieRow
          title="Action Movies"
          movies={actionMovies}
        />

        <MovieRow
          title="Comedy Movies"
          movies={comedyMovies}
        />

        <MovieRow
          title="Anime"
          movies={animeMovies}
        />

        <MovieRow
          title="Sports Highlights"
          movies={sportsMovies}
        />

        <MovieRow title="Top Rated" movies={topRated} />
        <MovieRow title="Sci-Fi" movies={sciFiMovies} />
        <MovieRow title="Adventure" movies={adventureMovies} />
        <MovieRow title="Marvel" movies={marvelMovies} />
        <MovieRow title="DC" movies={dcMovies} />
        <MovieRow title="Thriller" movies={thrillerMovies} />
      </div>
    </div>
  );
};

export default Home;