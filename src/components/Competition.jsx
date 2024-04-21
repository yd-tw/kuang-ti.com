import React from "react";
import ContestCard from "./ContestCard";

const contestData = [
    { name: "w96j0" },
    { name: "123" },
    { name: "123" }
];

const Competition = () => {
    return (
        <div>
            {contestData.map((contestData, index) => (
                <li key={index}>
                    <ContestCard title={contestData.name} />
                </li>
            ))}
        </div>
    );
};

export default Competition;