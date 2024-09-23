import Info from "./Info";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {

  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/flights"
        );

        setFlights(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);
  console.log(flights);


