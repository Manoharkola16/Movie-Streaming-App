import { useState } from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import {
  motion,
} from "framer-motion";

import movie from "../assets/movie.jpg";

const Register = () => {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [userName, setUserName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [error, setError] =
    useState("");

  const navigate = useNavigate();

  // PASSWORD VALIDATION
  const validatePassword = (value) => {

    const regex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!regex.test(value)) {

      return `
Password must contain:
• 8+ characters
• One uppercase letter
• One number
• One special character
      `;
    }

    return "";
  };

  // PASSWORD CHANGE
  const handlePasswordChange = (e) => {

    const value = e.target.value;

    setPassword(value);

    const validationError =
      validatePassword(value);

    setError(validationError);
  };

  // REGISTER FUNCTION
  const handleSubmit = (e) => {

    e.preventDefault();

    // EMPTY VALIDATION
    if (
      !email ||
      !password ||
      !userName ||
      !phone
    ) {

      setError(
        "All fields are mandatory"
      );

      return;
    }

    // PASSWORD VALIDATION
    const validationError =
      validatePassword(password);

    if (validationError) {

      setError(validationError);

      return;
    }

    setError("");

    // STORE USER
    const user = {
      email,
      password,
      userName,
      phone,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    // REDIRECT TO LOGIN
    navigate("/");
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
      {/* OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-black/70
          backdrop-blur-sm
        "
      />

      {/* REGISTER CARD */}
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
          Create Account
        </h1>

        <p
          className="
            text-gray-400
            text-center
            mb-8
          "
        >
          Join and start streaming movies
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
              whitespace-pre-line
            "
          >
            {error}
          </div>
        )}

        {/* USERNAME */}
        <input
          type="text"

          placeholder="Enter username"

          value={userName}

          onChange={(e) =>
            setUserName(e.target.value)
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

        {/* EMAIL */}
        <input
          type="email"

          placeholder="Enter email"

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

          placeholder="Enter password"

          value={password}

          onChange={handlePasswordChange}

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

        {/* PHONE */}
        <input
          type="tel"

          placeholder="Enter phone number"

          value={phone}

          onChange={(e) =>
            setPhone(e.target.value)
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

        {/* REGISTER BUTTON */}
        <button
          onClick={handleSubmit}

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
          Register
        </button>

        {/* LOGIN LINK */}
        <p
          className="
            text-center
            text-gray-400
            mt-6
          "
        >
          Already have an account?{" "}

          <Link
            to="/"

            className="
              text-pink-500
              hover:underline
            "
          >
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;