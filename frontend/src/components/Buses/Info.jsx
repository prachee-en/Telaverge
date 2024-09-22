import React from "react";
import Services from "../Home/Services";
import BusSearch from "./BusSearch";

const Info = () => {
  return (
    <>
      <Services />
      <div className="w-5/6 mx-auto bg-gray-200   justify-between items-center rounded-md p-8">
        <div className="w-5/6 mx-auto mt-6">
          <BusSearch />
        </div>
      </div>
    </>
  );
};

export default Info;
