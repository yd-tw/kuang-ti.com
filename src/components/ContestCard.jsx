import React from "react";

const ContestCard = ({ area, title, rank }) => {
    return (
        <div className="flex items-center bg-[#221f1f] hover:bg-[#1f2937] p-2 rounded-lg">
            <p className="text-2xl text-white mr-8">{area}</p>
            <p className="text-2xl text-white mr-8">{title}</p>
            <p className="text-2xl text-white mr-8">{rank}</p>
            <div className="ml-auto text-white font-bold">
                <button className="bg-orange-900 hover:bg-orange-600 py-1 px-4 rounded mr-4">比賽經歷</button>
                <button className="bg-orange-900 hover:bg-orange-600 py-1 px-4 rounded mr-4">官方連結</button>
            </div>
        </div>
    );
};

export default ContestCard;