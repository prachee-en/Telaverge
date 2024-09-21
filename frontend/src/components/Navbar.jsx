import React from "react";

const Navbar = () => {
  return (
    <div className="px-28 py-4 sticky top-0">
      <div className="flex justify-between">
        <img
          src="//promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png"
          alt="Make My Trip"
          className="h-13 w-36"
        ></img>
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
