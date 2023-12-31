import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { getCoinPrices } from "../../Functions/getCoinPrices";
import { useState } from "react";
import SelectDays from "../../Functions/SelectDays";
import SelectType from "../../Functions/SelectType";

const Charts = ({ data }) => {
  const [days, setDays] = useState(7);
  const [type, setType] = useState("prices");
  const [coinData, setCoinData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCoinPrices(data.id, days);
      setCoinData(result);
    };

    fetchData();
  }, [data.id, days, type]);

  // console.log(type);
  // console.log(coinData[type]);
  // console.log(data.id);
  const labels = coinData[type]?.map((item) => {
    const date = new Date(item[0]);
    return `${date.getMonth() + 1}/${date.getDate()}`; // Format as MM/DD
  });
  // console.log(labels);
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: data.id,
        data: coinData[type]?.map((item) => item[1]),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  // const options = {
  //   scales: {
  //     x: {
  //       type: 'category', // Use 'linear' or 'time' depending on your data
  //       labels : labels,
  //       position: 'bottom',
  //     },
  //     y: {
  //       type: 'linear', // Use 'linear' for numeric data
  //     },
  //   },
  // };

  return (
    <>
      <SelectDays setDays={setDays} />
      <SelectType setType={setType} />
      <Line data={chartData} />
    </>
  );
};

export default Charts;
