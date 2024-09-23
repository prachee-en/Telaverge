import React, { useEffect, useState } from "react";
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
    fetch(`http://localhost:8000/api/v1/buses`, {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from_city: from,
        to_city: to,
        date: departureDate,
      }),
    })
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
                  {ticket.bus_name}
                </h2>
                <h2 className="text-md font-semibold text-black">
                  Bus Number: {ticket.id}
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
              <button
                className="mt-4 bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-600"
                onClick={() => {
                  const name = prompt("Enter your name:");
                  const email = prompt("Enter your email:");
                  const age = prompt("Enter your age:");
                  fetch(`http://localhost:8000/api/v1/bookings`, {
                    mode: "cors",
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      transport_type: "bus",
                      customer_name: name,
                      customer_age: age,
                      customer_email: email,
                      status: "Booked",
                      bus: ticket.id,
                    }),
                  })
                    .then((res) => {
                      if (!res.ok) {
                        alert("Couldn't make the booking. Please try again.");
                        window.location.reload();
                      } else {
                        alert(
                          "Thank you, " +
                            name +
                            "! Your bus booking is confirmed."
                        );
                        window.location.reload();
                      }
                      return res.json();
                    })
                    .then((data) => {
                      console.log(data);
                    });
                }}
              >
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
