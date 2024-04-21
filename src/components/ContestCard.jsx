import React from "react";

const ContestCard = ({ area, title, rank }) => {
    return (
        <div className="flex items-center bg-[#221f1f] p-4 rounded-lg">
            <p className="text-xl text-white mr-8">{area}</p>
            <p className="text-xl text-white mr-8">{title}</p>
            <p className="text-xl text-white mr-8">{rank}</p>
            <div className="ml-auto text-white">
                <button className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded mr-4">比賽經歷</button>
                <button className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">官方連結</button>
            </div>
        </div>
    );
};

export default ContestCard;