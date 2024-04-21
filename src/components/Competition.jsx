import React from "react";
import ContestCard from "./ContestCard";

const contestData = [
    { area: "市賽", name: "111學年新北市學科能力競賽", rank: "新北複賽", about: "", official: "" },
    { area: "全國", name: "2024 台灣國際資訊奧林匹亞競賽", rank: "全國207名", about: "", official: "" },
    { area: "全國", name: "2020 TIRT全能機器人國際邀請賽", rank: "第三名", about: "", official: "" },
    { area: "校內", name: "111學年中和高中資訊學科能力競賽", rank: "第四名", about: "", official: "" },
    { area: "校內", name: "112學年中和高中資訊學科能力競賽", rank: "第五名", about: "", official: "" },
    { area: "校內", name: "112學年中和高中校內科展", rank: "電腦科學佳作", about: "", official: "" },
    { area: "校內", name: "112學年中和高中校內科展", rank: "工程學科一佳作", about: "", official: "" },
    { area: "全國", name: "智慧科技素養與程式設計創新應用競賽", rank: "第三名", about: "", official: "" },
    { area: "市賽", name: "2023新北市FRC機器人新生盃", rank: "聯盟佳作", about: "", official: "" },
    { area: "全國", name: "師大第五屆AI智慧小車模擬競賽", rank: "聯盟第一", about: "", official: "" },
    { area: "全國", name: "第十屆成大程式邀請賽初賽", rank: "全國41名", about: "", official: "" },
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