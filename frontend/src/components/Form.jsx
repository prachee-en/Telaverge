import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const BookingForm = ({ flight }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });
  const [error, setError] = useState("");
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name === "" || formData.email === "" || formData.age === "") {
      setError("Please fill in all fields.");
      return;
    }

    // Post request to book the flight
    axios
      .post("http://localhost:8000/api/book-flight", {
        flightId: flight.id, // The selected flight ID
        ...formData,
      })
      .then((response) => {
        alert(response.data.message);
        // Redirect to confirmation page after successful booking
        history.push("/tickets");
      })
      .catch((error) => {
        console.error("Error booking flight", error);
        setError("An error occurred while booking the flight.");
      });
  };

  return (
    <div className="booking-form-container">
      <h2>Book Flight: {flight.airline}</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleFormSubmit}>
        {/* Name Input */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        {/* Age Input */}
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
