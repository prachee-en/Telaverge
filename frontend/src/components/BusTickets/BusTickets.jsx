import React from "react";
import { useLocation } from "react-router-dom";

const BusTickets = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const departureDate = searchParams.get("departure_date");

  const [ticketsData, setTicketsData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch(`http://localhost:8000/api/v1/flights/${from}/${to}/${departureDate}`)
      .then((res) => res.json())
      .then((data) => {
        setTicketsData(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="h-[92vh] w-full bg-gray-100 flex flex-col items-center overflow-auto py-8">
      <h1 className="text-3xl text-black font-bold mb-6">
        Available Bus Tickets
      </h1>
      <div className="flex flex-col items-center gap-6 w-5/6">
        {ticketsData.map((ticket) => {
          if (ticket.no_of_seats == 0) {
            return null;
          }
          return (
            <div
              key={ticket.id}
              className="bg-white shadow-md rounded-lg p-4 w-3/4  flex  justify-between"
            >
              <div>
                <h2 className="text-xl font-bold text-black">
                  {ticket.bus}
                </h2>
                <h2 className="text-md font-semibold text-black">
                  Bus Number: {ticket.flight_number}
                </h2>
                <p className="text-gray-700">From: {ticket.departure_city}</p>
                <p className="text-gray-700">To: {ticket.arrival_city}</p>
                <p className="text-gray-700">
                  Departure: {new Date(ticket.departure_time).toLocaleString()}
                </p>
                <p className="text-gray-700">
                  Arrival: {new Date(ticket.arrival_time).toLocaleString()}
                </p>
                <p className="text-gray-700">
                  Seats Left: {ticket.no_of_seats}
                </p>
                <p className="text-lg font-bold text-blue-600">
                  ₹ {ticket.ticket_price}
                </p>
              </div>
              <button className="mt-4 bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-600">
                Book Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BusTickets;
