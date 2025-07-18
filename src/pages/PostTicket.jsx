// src/pages/PostTicket.jsx
import React, { useState } from "react";

function PostTicket() {
  const [form, setForm] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    price: "",
    mode: "",
    ticketFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;

    if (name === "ticketFile") {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setForm((prev) => ({
          ...prev,
          ticketFile: reader.result,
        }));
      };
      if (file) reader.readAsDataURL(file);
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: type === "number" ? (value === "" ? "" : parseFloat(value)) : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    storedTickets.push(form);
    localStorage.setItem("tickets", JSON.stringify(storedTickets));

    alert("Ticket posted successfully!");

    setForm({
      from: "",
      to: "",
      date: "",
      time: "",
      price: "",
      mode: "",
      ticketFile: null,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-900 to-cyan-800">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Post a Ticket
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            name="from"
            value={form.from}
            onChange={handleChange}
            placeholder="From"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="text"
            name="to"
            value={form.to}
            onChange={handleChange}
            placeholder="To"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price (₹)"
            required
            min="1"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Mode of Travel
            </label>
            <select
              name="mode"
              value={form.mode}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="" disabled>
                Train / Bus
              </option>
              <option value="Train">Train</option>
              <option value="Bus">Bus</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Upload Ticket (Image/PDF)
            </label>
            <input
              type="file"
              name="ticketFile"
              accept="image/*,application/pdf"
              onChange={handleChange}
              className="w-full px-2 py-2 border border-gray-300 rounded-lg bg-gray-100"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg font-semibold"
        >
          Post Ticket
        </button>
      </form>
    </div>
  );
}

export default PostTicket;
