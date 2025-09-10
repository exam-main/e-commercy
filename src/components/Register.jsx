import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    login: "",
    firstName: "",
    lastName: "",
    email: "",
    userRole: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-md p-8 w-full max-w-md"
      >
        <h2 className="text-xl font-semibold mb-6">Registration</h2>

        <input
          type="text"
          name="login"
          value={formData.login}
          onChange={handleChange}
          placeholder="Login"
          className="w-full border-b border-gray-300 mb-4 py-2 px-1 focus:outline-none focus:border-blue-500"
          required
        />

        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First name"
          className="w-full border-b border-gray-300 mb-4 py-2 px-1 focus:outline-none focus:border-blue-500"
          required
        />

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last name"
          className="w-full border-b border-gray-300 mb-4 py-2 px-1 focus:outline-none focus:border-blue-500"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border-b border-gray-300 mb-4 py-2 px-1 focus:outline-none focus:border-blue-500"
          required
        />

        <select
          name="userRole"
          value={formData.userRole}
          onChange={handleChange}
          className="w-full border-b border-gray-300 mb-4 py-2 px-1 focus:outline-none focus:border-blue-500"
          required
        >
          <option value="" disabled>
            User role
          </option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="manager">Manager</option>
        </select>

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full border-b border-gray-300 mb-4 py-2 px-1 focus:outline-none focus:border-blue-500"
          required
        />

        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Re-enter password"
          className="w-full border-b border-gray-300 mb-6 py-2 px-1 focus:outline-none focus:border-blue-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Register
        </button>

        
        <p className="mt-4 text-center text-sm text-gray-600">
          Allaqachon hisobingiz bormi?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
