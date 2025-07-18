// src/pages/FindTickets.jsx


console.log("FindTickets component loaded");

import { useState, useEffect } from "react";

function FindTickets() {
  const [form, setForm] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    mode: "Train",
  });

  const [filteredTickets, setFilteredTickets] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];

    const matches = tickets.filter((ticket) => {
      return (
        ticket.from.toLowerCase().includes(form.from.toLowerCase()) &&
        ticket.destination.toLowerCase().includes(form.to.toLowerCase()) &&
        ticket.date === form.date &&
        ticket.time === form.time &&
        ticket.type.toLowerCase() === form.mode.toLowerCase()
      );
    });

    setFilteredTickets(matches);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 to-cyan-800 flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Find Ticket</h2>

        <form className="space-y-4">
          <input
            type="text"
            name="from"
            placeholder="From"
            value={form.from}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg text-gray-800"
          />

          <input
            type="text"
            name="to"
            placeholder="To"
            value={form.to}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg text-gray-800"
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg text-gray-800"
          />

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg text-gray-800"
          />

          <select
            name="mode"
            value={form.mode}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg text-gray-800"
          >
            <option value="Train">Train</option>
            <option value="Bus">Bus</option>
          </select>

          <button
            type="button"
            onClick={handleSearch}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Search
          </button>
        </form>

        {/* Results */}
        <div className="mt-6">
          {filteredTickets.length > 0 ? (
            <ul className="space-y-4">
              {filteredTickets.map((ticket, index) => (
                <li
                  key={index}
                  className="border p-4 rounded-lg shadow-sm bg-gray-100"
                >
                  <p>
                    <strong>From:</strong> {ticket.from}
                  </p>
                  <p>
                    <strong>To:</strong> {ticket.destination}
                  </p>
                  <p>
                    <strong>Date:</strong> {ticket.date}
                  </p>
                  <p>
                    <strong>Time:</strong> {ticket.time}
                  </p>
                  <p>
                    <strong>Type:</strong> {ticket.type}
                  </p>
                  {ticket.image && (
                    <img
                      src={ticket.image}
                      alt="Ticket"
                      className="w-32 mt-2 rounded-md"
                    />
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 mt-4 text-center">
              No tickets found. Try adjusting your search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FindTickets;
