// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Page components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostTicket from "./pages/PostTicket"; // Route: /post
import AvailableTicket from "./pages/AvailableTicket"; // Route: /available
import FindTickets from "./pages/FindTickets"; // Route: /find

import "./styles/main.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post" element={<PostTicket />} />
        <Route path="/available" element={<AvailableTicket />} />
        <Route path="/find" element={<FindTickets />} />
      </Routes>
    </Router>
  );
}

export default App;
