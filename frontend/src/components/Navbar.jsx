import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-28 py-3 sticky top-0 bg-black z-[1000] ">
      <div className="flex justify-between">
        <NavLink to={"/"}>
          <img
            src="//promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png"
            alt="Make My Trip"
            className="h-13 w-36"
          ></img>
        </NavLink>
        <div className="flex justify-between gap-8 font-semibold">
          <button>
            <h4 className="hover:text-blue-500">Login</h4>
          </button>
          <button>
            <h4 className="hover:text-blue-500">Signup</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
