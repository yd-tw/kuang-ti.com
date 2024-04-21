import React from "react";
import Link from "next/link";

<div className="rounded-b-2xl  ">
    <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{"Discord機器人 - 即時虛擬貓咪互動"}</h5>
        <p className="text-[#ADB7BE]">{"一個基於discord.py製作的機器貓咪，串接Gemini API提供24h服務。"}</p>
    </div>
</div>

const ContestCard = () => {
    return (
        <div class="flex items-center bg-[#221f1f] p-4 rounded-lg">
            <p class="text-xl text-white mr-8">全國</p>
            <p class="text-xl text-white mr-8">智慧科技素養與程式設計創新應用競賽</p>
            <p class="text-xl text-white mr-8">第三名</p>
            <div class="ml-auto text-white">
                <button class="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded mr-4">比賽經歷</button>
                <button class="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">官方連結</button>
            </div>
        </div>
    );
};

export default ContestCard;