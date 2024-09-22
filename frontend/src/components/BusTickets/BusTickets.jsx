import React from "react";

const busTicketsData = [
  {
    id: 1,
    name: "Bus A",
    from: "San Francisco",
    to: "Los Angeles",
    duration: "7h 30m",
    price: "$50",
  },
  {
    id: 2,
    name: "Bus B",
    from: "New York",
    to: "Washington D.C.",
    duration: "4h 15m",
    price: "$30",
  },
  {
    id: 3,
    name: "Bus C",
    from: "Chicago",
    to: "Detroit",
    duration: "5h 00m",
    price: "$40",
  },
  // Add more tickets as needed
];

const BusTickets = () => {
  return (
    <div className="h-[92vh] w-full bg-gray-100 flex flex-col items-center overflow-auto py-8">
      <h1 className="text-3xl text-black font-bold mb-6">
        Available Bus Tickets
      </h1>
      <div className="flex flex-col items-center gap-6 w-5/6">
        {busTicketsData.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white shadow-md rounded-lg p-4 w-3/4 flex justify-between"
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

export default BusTickets;
