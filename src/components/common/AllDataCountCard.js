import React from "react";
import CountUp from "react-countup";

const AllDataCountCard = ({ name, total }) => {
  return (
    <div className="w-full p-10 rounded-xl bg-richblack-800 border-richblack-700 shadow-lg shadow-richblack-600 flex flex-col items-center gap-4">
      <p className="text-lg font-bold text-richblack-25">{name}</p>
      <p className="text-2xl font-extrabold text-richblack-50">
        <CountUp end={total} duration={2.75}></CountUp>
      </p>
    </div>
  );
};

export default AllDataCountCard;
