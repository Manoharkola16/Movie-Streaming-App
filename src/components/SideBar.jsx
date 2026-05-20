import {
  Home,
  Search,
  Film,
  Tv,
  Trophy,
  Flame,
  ListVideo,
  Sparkles,
} from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const desktopMenu = [
  { icon: Home, label: "Home" },
  { icon: Flame, label: "Trending" },
  { icon: Film, label: "Movies" },
  { icon: Tv, label: "Shows" },
  { icon: Trophy, label: "Sports" },
  { icon: ListVideo, label: "Categories" },
  { icon: Search, label: "Search" },
];

const Sidebar = () => {
  const [hovered, setHovered] = useState(false);
   const [openSheet, setOpenSheet] = useState(false);
  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{
          width: hovered ? 240 : 80,
        }}
        transition={{
          duration: 0.3,
        }}
       className="
          hidden md:flex
          fixed left-0 top-0
          h-screen
          backdrop-blur-5xl
          z-[999]
          flex-col
          py-6 px-4
          overflow-hidden
          text-white
          "
      >
        <div className="flex flex-col gap-8 mt-10">
          {desktopMenu.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  flex items-center gap-4
                  cursor-pointer
                  hover:text-pink-500
                  transition-all duration-300
                "
              >
                <Icon size={28} />

                {hovered && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-lg font-medium whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* MOBILE OTT NAVBAR */}
      <div
        className="
          flex md:hidden
          fixed bottom-4 left-1/2
          -translate-x-1/2
          w-[92%]
          z-50
        "
      >
        <div className="
          bg-black/95
          backdrop-blur-2xl
          rounded-3xl
          py-4 px-8
          flex justify-between items-center
          w-full
          border border-gray-800
        ">
          {/* Search */}
          <div className="text-white">
            <Search size={26} />
          </div>

          {/* Home */}
          <div className="flex flex-col items-center text-white">
            <Home size={28} />
            <span className="text-sm">
              Home
            </span>
          </div>

          {/* AI */}
          <div className="
            w-10 h-10
            rounded-full
            bg-gradient-to-r
            from-blue-500
            to-pink-500
            flex items-center justify-center
            text-white
          ">
            <Sparkles size={20} />
          </div>
        </div>
      </div>
      
        {/* BOTTOM SHEET */}
      <AnimatePresence>
        {openSheet && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4 }}
            className="
              md:hidden
              fixed bottom-0 left-0
              w-full h-[75vh]
              bg-[#0b1020]
              rounded-t-[40px]
              z-40
              p-6
              overflow-y-scroll
            "
          >
            {/* DRAG LINE */}
            <div className="w-20 h-1 bg-gray-500 rounded-full mx-auto mb-8" />

            {/* Browse */}
            <h2 className="text-white text-3xl font-bold mb-6">
              Browse
            </h2>

            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-cyan-900/40 p-6 rounded-2xl text-white">
                Sparks
              </div>

              <div className="bg-pink-900/40 p-6 rounded-2xl text-white">
                News
              </div>

              <div className="bg-blue-900/40 p-6 rounded-2xl text-white">
                New & Hot
              </div>
            </div>

            {/* Studios */}
            <h2 className="text-white text-3xl font-bold mb-6">
              Studios
            </h2>

            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-gray-800 p-6 rounded-2xl text-white">
                Disney+
              </div>

              <div className="bg-gray-800 p-6 rounded-2xl text-white">
                HBO
              </div>

              <div className="bg-gray-800 p-6 rounded-2xl text-white">
                Pixar
              </div>
            </div>

            {/* Languages */}
            <h2 className="text-white text-3xl font-bold mb-6">
              Languages
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 p-8 rounded-2xl text-white">
                Hindi
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-8 rounded-2xl text-white">
                English
              </div>

              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 rounded-2xl text-white">
                Telugu
              </div>

              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 rounded-2xl text-white">
                Tamil
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};

export default Sidebar;