import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { getCoinPrices } from "../../Functions/getCoinPrices";
import { useState } from "react";
import SelectDays from "../../Functions/SelectDays";
import SelectType from "../../Functions/SelectType";

const CompareCharts = ({ coin1, coin2 }) => {
  const [days, setDays] = useState(7);
  const [type, setType] = useState("prices");
  const [coinData1, setCoinData1] = useState({});
  const [coinData2, setCoinData2] = useState({});


  useEffect(() => {
    const fetchData = async () => {
        if (coin1 && coin2) {
      const result1 = await getCoinPrices(coin1.id, days);
      const result2 = await getCoinPrices(coin2.id, days);
      setCoinData1(result1);
      setCoinData2(result2);
        }
    };

    fetchData();
  }, [coin1.id, coin2.id, days, type]);


  const labels = coinData1[type]?.map((item) => {
    const date = new Date(item[0]);
    return `${date.getMonth() + 1}/${date.getDate()}`; // Format as MM/DD
  }) || [] ;
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: coin1.id,
        data: coinData1[type]?.map((item) => item[1]) || [] ,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: coin2.id,
        data: coinData2[type]?.map((item) => item[1]) || [] ,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      }
    ],
  };

  return (
    <>
      <SelectDays setDays={setDays} />
      <SelectType setType={setType} />
      <Line data={chartData} />
    </>
  );
};

export default CompareCharts;
