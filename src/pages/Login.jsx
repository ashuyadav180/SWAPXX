import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here (e.g. check localStorage)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-cyan-800">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login to SwapX
        </h2>

        {/* Email Field */}
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password Field */}
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Forgot Password Link */}
        <div className="text-right mb-4">
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline"
            onClick={() => alert("Reset password flow to be implemented.")}
          >
            Forgot Password?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
