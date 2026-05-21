import {
  Home,
  Search,
  Film,
  Tv,
  Trophy,
  Flame,
  ListVideo,
  Sparkles,
  Heart,
} from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const desktopMenu = [
  { icon: Home, label: "Home" },
  { icon: Flame, label: "Trending" },
  { icon: Film, label: "Movies" },
  { icon: Tv, label: "Shows" },
  { icon: Trophy, label: "Sports" },
  { icon: ListVideo, label: "Categories" },
  { icon: Search, label: "Search" },
  { icon: Heart, label: "Watchlist" },
];

const Sidebar = () => {
  const [hovered, setHovered] = useState(false);
   const [openSheet, setOpenSheet] = useState(false);
   const navigate = useNavigate();
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
                    onClick={() => {
                      if (item.label === "Search") {
                        navigate("/search");
                      }

                      if (item.label === "Home") {
                        navigate("/home");
                      }

                      if (item.label === "Watchlist") {
                        navigate("/watchlist");
                      }
                    }}
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
          <div onClick={() => navigate("/search")}
               className="flex flex-col items-center text-white cursor-pointer">
            <Search size={26} />
          </div>

          {/* Home */}
          <div onClick={() => navigate("/")} className="flex flex-col items-center text-white cursor-pointer">
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
    </>
  );
};

export default Sidebar;