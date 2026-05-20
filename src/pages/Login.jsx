import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import movie from '../assets/movie.jpg'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user?.email === email && user?.password === password) {
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
    
    <div
        className="relative h-screen w-full flex items-center justify-center bg-cover bg-center overflow-hidden "
          
      style={{
          backgroundImage: `url(${movie})`,
        }}

    >
      <div className="absolute inset-0  bg-black/40"></div>
      <div className="relative  p-8 rounded-xl  md:shadow-2xl  w-80  text-amber-100">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>

        <p className="text-sm mt-3 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-400">
            Register
          </Link>
        </p>
      </div>
    </div>
    
    </>
  );
};

export default Login;