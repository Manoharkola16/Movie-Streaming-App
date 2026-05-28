import { motion } from "framer-motion";
import avengers from "../assets/avengers.jpg";
import logo from "../assets/logo.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../pages/Search";
import axios from "axios";

const HeroBanner = () => {

  const [search,setSearch] = useState("");
  const navigate = useNavigate();

  const API_KEY = "270d2ace";

const handleSearch = async (e) => {

  if (e.key !== "Enter") return;

  if (!search.trim()) return;

  try {

    const response =
      await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
      );

    const movies =
      response.data.Search;

    // MOVIE FOUND
    if (
      movies &&
      movies.length > 0
    ) {

      navigate(
        `/movie/${movies[0].imdbID}`
      );

    } else {

      alert("No movie found 😢");
    }

  } catch (error) {

    console.log(error);

    alert("Something went wrong");
  }
};
  return (
    <section className="relative h-[95vh] w-full overflow-hidden text-white">

      {/* Background Image */}
      <img
        src={avengers}
        alt="Avengers Endgame"
        className="absolute inset-0 w-full h-full object-cover scale-110"
      />
   {/* MOBILE TOP BAR */}
<div
  className="
    absolute
    top-10
    gap-4
    left-0
    w-full
    z-50
    flex
    items-center
    justify-between
    px-4
    py-4
    md:hidden
  "
>

  {/* LOGO */}
  <img
    src={logo}
    alt="logo"

    className="
      w-24
      object-contain
    "
  />

  {/* SEARCH */}
  <div
    className="
      flex
      items-center
      bg-white/10
      backdrop-blur-md
      px-4
      py-2
      rounded-full
      w-[300px]
     "
  > 
     

    <input
          type="text"

          value={search}

          onChange={(e) =>
            setSearch(e.target.value)
          }

          onKeyDown={handleSearch}

          placeholder="Search"

          className="
            bg-transparent
            outline-none
            text-sm
            w-full
            placeholder:text-gray-300
          "
        />
  </div>
</div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />

      {/* Extra Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-[20%] left-6 md:left-24 max-w-2xl z-10"
      >
        {/* Small Tag */}
        <p className="text-blue-400 text-lg mb-3 font-semibold">
          Newly Added
        </p>

        {/* Title */}
        <h1 className="text-5xl md:text-5xl font-bold leading-tight mb-6">
          Avengers  Endgame
        </h1>

        {/* Movie Info */}
        <div className="flex gap-4 text-gray-300 text-sm md:text-lg mb-6">
          <span>2019</span>
          <span>U/A 13+</span>
          <span>3h 1m</span>
          <span>5 Languages</span>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-base md:text-xl leading-relaxed max-w-xl mb-8">
          The Avengers assemble once more to reverse Thanos'
          actions and restore balance to the universe.
        </p>

        {/* Genres */}
        <div className="flex flex-wrap gap-3 text-sm md:text-lg text-gray-200 mb-10">
          <span>Action</span>
          <span>|</span>
          <span>Sci-Fi</span>
          <span>|</span>
          <span>Adventure</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-gradient-to-r from-blue-500 to-pink-500 px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition duration-300 shadow-lg">
            ▶ Watch Now
          </button>

          <button className="bg-white/10 border border-white/20 backdrop-blur-md px-5 py-4 rounded-xl text-2xl hover:bg-white/20 transition">
            +
          </button>
        </div>
      </motion.div>

      {/* Small Slider Thumbnails */}
      <div className="absolute bottom-12 right-8 hidden md:flex gap-3 z-20">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="w-36 h-20 rounded-lg overflow-hidden border border-white/10 hover:scale-105 transition cursor-pointer"
          >
            <img
              src={avengers}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;