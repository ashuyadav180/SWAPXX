import { useEffect, useState } from "react";

function AvailableTicket() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];

    const filteredTickets = storedTickets.filter((ticket) => {
      const from = ticket?.from?.toLowerCase?.();
      const to = ticket?.to?.toLowerCase?.();
      return (
        (from === "pune" && to === "mumbai") ||
        (from === "mumbai" && to === "pune")
      );
    });

    setTickets(filteredTickets);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 to-cyan-800 p-6 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Available Tickets</h2>
      {tickets.length === 0 ? (
        <p className="text-center text-gray-200">No tickets found between Pune and Mumbai.</p>
      ) : (
        <ul className="space-y-4 max-w-2xl mx-auto">
          {tickets.map((ticket, index) => (
            <li
              key={index}
              className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg text-white border border-white/20"
            >
              <p><strong>From:</strong> <span className="text-white">{ticket.from}</span></p>
              <p><strong>To:</strong> <span className="text-white">{ticket.to}</span></p>
              <p><strong>Date:</strong> <span className="text-white">{ticket.date || "N/A"}</span></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AvailableTicket;
