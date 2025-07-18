// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-sky-900 to-cyan-800 px-6 py-4 shadow-md flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-3xl font-bold text-white">SwapX</h1>

      {/* Center navigation links */}
      <div className="flex-1 flex justify-center">
        <div className="flex space-x-12">
          <Link to="/" className="text-white text-xl font-semibold hover:text-yellow-300 transition">
            Home
          </Link>
          <Link to="/post" className="text-white text-xl font-semibold hover:text-yellow-300 transition">
            Post Ticket
          </Link>
          <Link to="/available" className="text-white text-xl font-semibold hover:text-yellow-300 transition">
            Available Ticket
          </Link>
          <Link to="/find" className="text-white text-xl font-semibold hover:text-yellow-300 transition">
            Find Ticket
          </Link>
        </div>
      </div>

      {/* Right corner: Login/Register */}
      <div className="space-x-4">
        <Link
          to="/login"
          className="border border-white bg-white/10 text-white font-medium px-4 py-1.5 rounded hover:bg-white hover:text-sky-900 transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="border border-white bg-white/10 text-white font-medium px-4 py-1.5 rounded hover:bg-white hover:text-sky-900 transition"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
