import React from "react";
import Services from "./Services";
import FlightSearch from "./FlightSearch";

const Info = ({ flights }) => {
  return (
    <>
      <Services />
      <div className="w-5/6 mx-auto bg-gray-200   justify-between items-center rounded-md p-8">
        <div className="flex justify-around">
          <div className="text-black flex gap-6 mb-4 md:mb-0">
            <div className="flex items-center gap-1">
              <input type="radio" name="tripType" id="oneWay" />
              <label htmlFor="oneWay">One Way</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="radio" name="tripType" id="roundTrip" />
              <label htmlFor="roundTrip">Round Trip</label>
            </div>
          </div>
          <div className="text-black font-thin mb-4 md:mb-0">
            <h3>Book International and Domestic Flights</h3>
          </div>
        </div>
        <div className="w-5/6 mx-auto mt-6">
          <FlightSearch />
        </div>
      </div>
    </>
  );
};

export default Info;
