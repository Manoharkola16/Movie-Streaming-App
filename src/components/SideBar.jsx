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

import { motion } from "framer-motion";
import { useState } from "react";
import {
  useNavigate,
  useLocation,
} from "react-router-dom";

const desktopMenu = [
  {
    icon: Home,
    label: "Home",
    path: "/home",
  },
  {
    icon: Flame,
    label: "Trending",
    path: "/trending",
  },
  {
    icon: Film,
    label: "Movies",
    path: "/movies",
  },
  {
    icon: Tv,
    label: "Shows",
    path: "/shows",
  },
  {
    icon: Trophy,
    label: "Sports",
    path: "/sports",
  },
  {
    icon: ListVideo,
    label: "Categories",
    path: "/categories",
  },
  {
    icon: Search,
    label: "Search",
    path: "/search",
  },
  {
    icon: Heart,
    label: "Watchlist",
    path: "/watchlist",
  },
];

const Sidebar = () => {
  const [hovered, setHovered] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

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
          z-[999]
          flex-col
          py-6 px-4
          overflow-hidden
          text-white
          bg-black/80
          gradient-to-b from-black
        "
      >
        <div className="flex flex-col gap-8 mt-10">
          {desktopMenu.map((item, index) => {
            const Icon = item.icon;

            const isActive =
              location.pathname === item.path;

            return (
              <div
                key={index}
                onClick={() => navigate(item.path)}
                className={`
                  flex items-center gap-4
                  cursor-pointer
                  transition-all duration-300
                  p-2 rounded-xl
                  
                  ${
                    isActive
                      ? "bg-pink-500 text-white"
                      : "hover:text-pink-500"
                  }
                `}
              >
                <Icon size={28} />

                {hovered && (
                  <motion.span
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
                      text-lg
                      font-medium
                      whitespace-nowrap
                    "
                  >
                    {item.label}
                  </motion.span>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* MOBILE NAVBAR */}
      <div
        className="
          flex md:hidden
          fixed bottom-4 left-1/2
          -translate-x-1/2
          w-[92%]
          z-50
        "
      >
        <div
          className="
           
            backdrop-blur-2xl
            rounded-3xl
            py-4 px-8
            flex justify-between items-center
            w-full
            border border-gray-800
          "
        >
          {desktopMenu.slice(0, 5).map((item, index) => {
            const Icon = item.icon;

            const isActive =
              location.pathname === item.path;

            return (
              <div
                key={index}
                onClick={() => navigate(item.path)}
                className={`
                  flex flex-col items-center
                  cursor-pointer
                  transition-all duration-300

                  ${
                    isActive
                      ? "text-pink-500"
                      : "text-white"
                  }
                `}
              >
                <Icon size={24} />

                <span className="text-xs mt-1">
                  {item.label}
                </span>
              </div>
            );
          })}

              {/* WATCHLIST BUTTON */}
        <div
          onClick={() => navigate("/watchlist")}
          className={`
            flex flex-col items-center
            cursor-pointer
            transition-all duration-300

            ${
              location.pathname === "/watchlist"
                ? "text-pink-500"
                : "text-white"
            }
          `}
        >
          <Heart size={24} />

          <span className="text-xs mt-1">
            Watchlist
          </span>
        </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;