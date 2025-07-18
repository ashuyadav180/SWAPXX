import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Add your registration logic here (e.g. localStorage or backend call)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-cyan-800">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Register on SwapX
        </h2>

        {/* Full Name */}
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Email */}
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

        {/* Phone Number */}
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password */}
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Confirm Password */}
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-all"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;

