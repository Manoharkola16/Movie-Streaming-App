import { useState } from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import {
  motion,
} from "framer-motion";

import movie from "../assets/movie.jpg";

const Login = () => {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const navigate = useNavigate();

  // LOGIN FUNCTION
  const handleLogin = () => {

    // GET USER FROM LOCALSTORAGE
    const user = JSON.parse(
      localStorage.getItem("user")
    );

    // EMPTY FIELD VALIDATION
    if (!email || !password) {

      setError("Please fill all fields");

      return;
    }

    // LOGIN VALIDATION
    if (
      user?.email === email &&
      user?.password === password
    ) {

      // SAVE LOGIN STATUS
      localStorage.setItem(
        "isLoggedIn",
        true
      );

      // SAVE CURRENT USER
      localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
      );

      // NAVIGATE
      navigate("/home");

    } else {

      setError("Invalid credentials");
    }
  };

  return (
    <div
      className="
        relative
        h-screen
        w-full
        flex
        items-center
        justify-center
        bg-cover
        bg-center
        overflow-hidden
      "

      style={{
        backgroundImage:
          `url(${movie})`,
      }}
    >
      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-black/70
          backdrop-blur-sm
        "
      />

      {/* LOGIN CARD */}
      <motion.div

        initial={{
          opacity: 0,
          y: 50,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.5,
        }}

        className="
          relative
          w-[90%]
          max-w-md
          bg-black/60
          border
          border-gray-700
          rounded-3xl
          p-8
          text-white
          shadow-2xl
          backdrop-blur-xl
        "
      >
        {/* TITLE */}
        <h1
          className="
            text-4xl
            font-bold
            text-center
            mb-2
          "
        >
          Welcome Back
        </h1>

        <p
          className="
            text-gray-400
            text-center
            mb-8
          "
        >
          Login to continue streaming
        </p>

        {/* ERROR */}
        {error && (
          <div
            className="
              bg-red-500/20
              border
              border-red-500
              text-red-400
              p-3
              rounded-xl
              mb-5
              text-sm
            "
          >
            {error}
          </div>
        )}

        {/* EMAIL */}
        <input
          type="email"

          placeholder="Enter your email"

          value={email}

          onChange={(e) =>
            setEmail(e.target.value)
          }

          className="
            w-full
            mb-4
            p-4
            rounded-xl
            bg-zinc-900
            border
            border-gray-700
            outline-none
            focus:border-pink-500
          "
        />

        {/* PASSWORD */}
        <input
          type="password"

          placeholder="Enter your password"

          value={password}

          onChange={(e) =>
            setPassword(e.target.value)
          }

          className="
            w-full
            mb-6
            p-4
            rounded-xl
            bg-zinc-900
            border
            border-gray-700
            outline-none
            focus:border-pink-500
          "
        />

        {/* LOGIN BUTTON */}
        <button
          onClick={handleLogin}

          className="
            w-full
            bg-pink-500
            hover:bg-pink-600
            transition-all
            duration-300
            p-4
            rounded-xl
            font-semibold
            text-lg
          "
        >
          Login
        </button>

        {/* REGISTER LINK */}
        <p
          className="
            text-center
            text-gray-400
            mt-6
          "
        >
          Don't have an account?{" "}

          <Link
            to="/register"

            className="
              text-pink-500
              hover:underline
            "
          >
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;