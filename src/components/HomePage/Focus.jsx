import React from "react";
import { GiCycle } from "react-icons/gi";
import { SlBadge } from "react-icons/sl";
import { TbTruckDelivery } from "react-icons/tb";

const Focus = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 gap-y-5 items-center justify-evenly px-4 lg:px-8">
      <div className="border rounded border-gray-300 shadow-lg flex flex-col items-center px-10 py-4">
        <SlBadge className="text-orange-500 text-4xl"/>
        <p className="font-semibold text-slate-500 mt-2">Authenticity</p>
      </div>
      <div className="border rounded border-gray-300 shadow-lg flex flex-col items-center px-10 py-4">
        <TbTruckDelivery className="text-red-500 text-4xl"/>
        <p className="font-semibold text-slate-500 mt-2">Fast Delivery</p>
      </div>
      <div className="border rounded border-gray-300 shadow-lg flex flex-col items-center px-10 py-4">
        <GiCycle className="text-green-500 text-4xl"/>
        <p className="font-semibold text-slate-500 mt-2">Easy Return</p>
      </div>
    </div>
  );
};

export default Focus;
