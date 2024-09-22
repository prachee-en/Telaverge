import Info from "./Info";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  return (
    <div
      className="top w-full h-[70vh]  bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1341288649/photo/75mpix-panorama-of-beautiful-mount-ama-dablam-in-himalayas-nepal.jpg?s=1024x1024&w=is&k=20&c=pxNX4Ns19juNzCiJInjnjnWjzugXnZBLblSge_rNKLs=')",
      }}
    >
      <Info />
    </div>
  );
};

export default Home;
