import React from "react";

export default function ProjectTag({ name, onClick, isSelected }) {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-3 py-3 text-sm first-letter:cursor-pointer md:px-8 md:text-xl`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
}
