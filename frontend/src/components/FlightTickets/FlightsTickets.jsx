import React from "react";

const ticketsData = [
  {
    id: 1,
    name: "Flight A",
    from: "New York",
    to: "Los Angeles",
    duration: "6h 30m",
    price: "$250",
  },
  {
    id: 2,
    name: "Flight B",
    from: "Chicago",
    to: "Miami",
    duration: "3h 45m",
    price: "$150",
  },
  {
    id: 3,
    name: "Flight C",
    from: "San Francisco",
    to: "Las Vegas",
    duration: "1h 30m",
    price: "$100",
  },
  // Add more tickets as needed
];

const FlightsTickets = () => {
  return (
    <div className="h-[92vh] w-full bg-gray-100 flex flex-col items-center overflow-auto py-8">
      <h1 className="text-3xl text-black font-bold mb-6">
        Available Flight Tickets
      </h1>
      <div className="flex flex-col items-center gap-6 w-5/6">
        {ticketsData.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white shadow-md rounded-lg p-4 w-3/4  flex  justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold">{ticket.name}</h2>
              <p className="text-gray-700">From: {ticket.from}</p>
              <p className="text-gray-700">To: {ticket.to}</p>
              <p className="text-gray-700">Duration: {ticket.duration}</p>
              <p className="text-lg font-bold text-blue-600">{ticket.price}</p>
            </div>
            <button className="mt-4 bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-600">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightsTickets;
