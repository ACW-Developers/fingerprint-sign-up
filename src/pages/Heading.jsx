/* eslint-disable react/prop-types */
//import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="inline-block text-xl sm:text-2xl text-center font-bold mb-2 border-b-2 border-primary pb-1">
        {title}
      </h1>
      <p className="text-xs sm:text-sm text-slate-500 text-center md:w-[80%] mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;