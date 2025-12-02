import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaUserCircle,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    // Fake auth token, replace with real API
    const fakeToken = "1234567890abcdef";
    localStorage.setItem("token", fakeToken);

    // Notify App that auth changed
    window.dispatchEvent(new Event("authStateChanged"));

    toast.success("Login Success!");

    // Redirect after 1 second to allow toast to show
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-24 bg-black relative">
     

      {/* Back to home link */}
      <Link
        to="/"
        className="text-white text-sm mb-6 flex items-center self-start ml-6"
      >
        <FaArrowLeft className="mr-2" /> Back to Home
      </Link>

      {/* Login card */}
      <div className="bg-[#0f1b2a] w-[380px] p-8 rounded-2xl shadow-lg border border-gray-800 text-white">
        <div className="flex justify-center mb-4">
          <FaUserCircle className="text-6xl text-green-500" />
        </div>

        <h2 className="text-center text-xl font-semibold mb-6">Welcome Back</h2>

        {/* Email input */}
        <div className="mb-4">
          <div className="flex items-center bg-[#162230] p-3 rounded-lg border border-gray-700">
            <FaEnvelope className="mr-3 text-gray-300" />
            <input
              type="email"
              className="bg-transparent w-full outline-none text-white"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Password input */}
        <div className="mb-2 relative">
          <div className="flex items-center bg-[#162230] p-3 rounded-lg border border-gray-700">
            <FaLock className="mr-3 text-gray-300" />
            <input
              type={showPassword ? "text" : "password"}
              className="bg-transparent w-full outline-none text-white"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="ml-2 cursor-pointer text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* Remember me & forgot password */}
        <div className="flex justify-between text-sm mb-5">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <Link to="#" className="text-green-400">
            Forgot?
          </Link>
        </div>

        {/* Login button */}
        <button
          onClick={handleLogin}
          className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg font-semibold"
        >
          Sign In
        </button>

        {/* Signup link */}
        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-400">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
