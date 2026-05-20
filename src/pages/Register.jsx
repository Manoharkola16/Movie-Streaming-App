import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import movie   from '../assets/movie.jpg'

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validatePassword = (value) => {
    const regex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!regex.test(value)) {
      return "Password must be 8+ chars, include uppercase, number & special character";
    }
    return "";
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    const validationError = validatePassword(value);
    setError(validationError);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !userName || !phone) {
      setError("All fields are mandatory");
      return;
    }

    const validationError = validatePassword(password);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");

    const user = { email, password, userName, phone };
    localStorage.setItem("user", JSON.stringify(user));

    navigate("/");
  };

  return (
    <div
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center overflow-hidden "
         
      style={{
          backgroundImage: `url(${movie})`,
        }}

    >
      <div className="absolute inset-0  bg-black/40"></div>
      <div className="relative  p-8 rounded-xl  md:shadow-2xl  w-80  text-amber-100">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Register</h2>

        <input
          type="text"
          placeholder="User Name"
          className="w-full mb-3 p-2 border rounded  text-amber-50"
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded text-amber-50"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-2 p-2 border rounded  text-amber-50"
          onChange={handlePasswordChange}
        />
        <div
          className={
            error
              ? "w-full flex justify-center items-center px-3 mb-2  text-amber-50"
              : "hidden"
          }
        >
          <span className="text-red-700 text-sm">* {error}</span>
        </div>

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full mb-3 p-2 border rounded  text-amber-50"
          onChange={(e) => setPhone(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
        >
          Register
        </button>

        <p className="text-sm mt-3 text-center  text-amber-50">
          Already have an account?{" "}
          <Link to="/" className="text-green-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;