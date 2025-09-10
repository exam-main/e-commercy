import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    if (username.trim() && password.trim()) {
      login({ name: username });
      navigate("/");
    } else {
      alert("Iltimos, foydalanuvchi nomi va parolni kiriting!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-md rounded-md px-10 py-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">Sign in</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Login
          </label>
          <input
            type="text"
            placeholder="Ali Tufa..."
            className="w-full border-b-2 border-blue-500 focus:outline-none py-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300"
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Royxatdan otmaganmisiz?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Royxatdan otish
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
