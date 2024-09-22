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
          "https://api.aviationstack.com/v1/flights?access_key=bf0e6fbd791c4670eccd6e05634dc9ab"
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
  return (
    <div
      className="top w-full h-[70vh]  bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1341288649/photo/75mpix-panorama-of-beautiful-mount-ama-dablam-in-himalayas-nepal.jpg?s=1024x1024&w=is&k=20&c=pxNX4Ns19juNzCiJInjnjnWjzugXnZBLblSge_rNKLs=')",
      }}
    >
      <Info flights={flights} />
    </div>
  );
};

export default Home;
