import { motion } from "framer-motion";
import avengers from "../assets/avengers.jpg";

const HeroBanner = () => {
  return (
    <div className="relative z-0 h-[70vh] md:h-[90vh] w-full overflow-hidden">

      {/* Background Image */}
      <img
        src={avengers}
        alt=""
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-[25%] left-5 md:left-30 z-80 max-w-xl"
      >
        <h1 className="text-4xl md:text-7xl font-bold mb-6">
          Avengers Endgame
        </h1>

        <p className="text-sm md:text-lg text-gray-300 mb-8">
          The Avengers assemble once more to reverse
          Thanos' actions and restore balance to the universe.
        </p>

        <div className="flex gap-4">
          <button className="bg-gradient-to-r from-blue-500 to-pink-500 px-6 md:px-8 py-3 md:py-4 rounded-xl text-lg md:text-xl font-semibold hover:scale-105 transition">
            ▶ Watch Now
          </button>

          <button className="bg-white/20 backdrop-blur-md px-5 py-4 rounded-xl text-2xl">
            +
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroBanner;