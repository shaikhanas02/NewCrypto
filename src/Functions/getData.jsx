import React, { useState } from "react";
import { useEffect } from "react";

function getData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const FetchData = async () => {
      const res = await fetch("https://api.coingecko.com/api/v3/coins/");

      const data = await res.json();
      setData(data);
    };
    FetchData();
  }, []);

  return data ;
}

export default getData;
