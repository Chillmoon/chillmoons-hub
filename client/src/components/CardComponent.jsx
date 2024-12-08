import React from "react";
import { HiArrowNarrowUp } from "react-icons/hi";

export default function CardComponent({
  title,
  total,
  lastMonth,
  icon,
  bgColor,
}) {
  return (
    <div className="flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md">
      <div className="flex justify-between">
        <div>
          <h3 className="text-gray-500 text-md uppercase">{title}</h3>
          <p className="text-2xl">{total}</p>
        </div>
        <div
          className={`${bgColor} text-white rounded-full text-3xl p-3 shadow-lg`}
        >
          {icon}
        </div>
      </div>
      <div className="flex gap-2 text-sm">
        <span className="text-green-500 flex items-center">
          <HiArrowNarrowUp />
          {lastMonth}
        </span>
        <div className="text-gray-500">Last month</div>
      </div>
    </div>
  );
}
