import React, { useState } from "react";
import Grid from "./Grid";
import List from "./List";

const Tab = ({ onTab, label, active, className }) => {
  return (
    <div
      className={`w-[50%] text-center text-white font-medium border-2 border-solid border-black
      px-4 py-2 cursor-pointer ${className}  ${
        active ? "border-b-2 border-red-500" : ""
      }`}
      onClick={onTab}
    >
      {label}
    </div>
  );
};


function Tabs({ className, search }) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Grid", content: <Grid search={search} /> },
    { label: "List", content: <List search={search} /> },
  ];

  function handleTab(i) {
    setActiveTab(i);
  }
  return (
    <div
      className="flex flex-col items-center border-2 border-solid border-black px-40 h-full
    "
    >
      <div
        className="flex flex-row w-full justify-between border-2 border-solid border-black
"
      >
        {tabs.map((tab, i) => (
          <Tab
            label={tab.label}
            onTab={() => handleTab(i)}
            key={i}
            active={i === activeTab}
            className={className}
          />
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
}

export default Tabs;
