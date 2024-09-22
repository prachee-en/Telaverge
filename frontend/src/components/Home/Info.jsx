import React from "react";
import Services from "./Services";
import FlightSearch from "./FlightSearch";

const Info = ({ flights }) => {
  return (
    <>
      <Services />
      <div className="w-5/6 h-3/5 bg-gray-200 mx-auto flex justify-between rounded-md">
        <div className="flex">
          <div className="flex">
            <div className="p-12 text-black flex gap-3">
              <div className=" flex gap-1">
                <input type="radio" name="tripType" />
                <span>One Way</span>
              </div>
              <div className=" flex gap-1">
                <input type="radio" name="tripType" />
                <span>Round Trip</span>
              </div>
            </div>
          </div>
          <div className="text-black p-12 font-thin">
            <h3>Book International and Domestic Flights</h3>
          </div>
        </div>
        <FlightSearch />
      </div>
    </>
  );
};

export default Info;
