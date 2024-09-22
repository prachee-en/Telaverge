import React, { useState } from "react";

const FlightSearch = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log({ from, to, departureDate, returnDate });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">Flight Search</h1>
      <form
        onSubmit={handleSearch}
        className="bg-white p-6 rounded shadow-md w-full max-w-4xl"
      >
        <div className="flex flex-wrap justify-between">
          <div className="mb-4 flex-1 mr-2">
            <label className="block text-gray-700">From</label>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              placeholder="Departure City"
              required
            />
          </div>
          <div className="mb-4 flex-1 mx-2">
            <label className="block text-gray-700">To</label>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              placeholder="Destination City"
              required
            />
          </div>
          <div className="mb-4 flex-1 mx-2">
            <label className="block text-gray-700">Departure Date</label>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div className="mb-4 flex-1 mx-2">
            <label className="block text-gray-700">Return Date</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Search Flights
        </button>
      </form>
    </div>
  );
};

export default FlightSearch;
