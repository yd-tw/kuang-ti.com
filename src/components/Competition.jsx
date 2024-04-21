import React from "react";
import ContestCard from "./ContestCard";

const contestData = [
    { area: "全國", name: "w96j0", rank: "第三", about: "", official: "" },
    { name: "123" },
    { name: "123" }
];

const Competition = () => {
    return (
        <div>
            {contestData.map((data, index) => (
                <li key={index}>
                    <ContestCard area={data.area} title={data.name} rank={data.rank} />
                </li>
            ))}
        </div>
    );
};

export default Competition;