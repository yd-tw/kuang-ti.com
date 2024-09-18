import React from "react";

export default function ContestCard({ title, rank }) {
  return (
    <div className="items-center rounded-lg bg-[#221f1f] p-4 hover:bg-[#1f2937] lg:flex">
      <div className="flex">
        <p className="mr-8 text-white md:text-2xl">{title}</p>
      </div>
      <div className="flex flex-grow">
        <p className="mr-8 text-white md:text-2xl">{rank}</p>
        <div className="ml-auto hidden font-bold text-white sm:block">
          <button className="mr-4 rounded bg-orange-900 px-4 py-1 hover:bg-orange-600">
            比賽經歷
          </button>
          <button className="mr-4 rounded bg-orange-900 px-4 py-1 hover:bg-orange-600">
            官方連結
          </button>
        </div>
      </div>
    </div>
  );
}
