import React from "react";
import Services from "../Home/Services";

const Info = () => {
  return (
    <>
      <Services />
      <div className="w-5/6 h-3/5 bg-gray-200 mx-auto flex justify-between rounded-md">
        <div className="text-black p-12 font-thin">
          <h3>Book Buses</h3>
        </div>
      </div>
    </>
  );
};

export default Info;
