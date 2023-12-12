import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import axios from "axios"; 

function GridCards({ data }) { 
  console.log(data) ; 
  const [isSave, setIsSave] = useState(false);
  // const [savedCards, setSavedCards] = useState([]) ; 

  if (!data || !data.image || !data.image.thumb || !data.market_data) {
    return <div>Loading...</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  } 

  function handleSave() {
    setIsSave(!isSave);
    // let savedCards =  '';
    console.log(data);
    const { id, image, market_data } = data;
    const {
      current_price: { usd: currentPriceUsd },
      total_volume: { usd: totalVolumeUsd },
      market_cap: { usd: marketCapUsd },
      price_change_percentage_24h_in_currency: { usd: priceChangeUsd },
    } = market_data;
    const { thumb  } = image;

    if (!isSave) { 
      const savedCards = {
        id,
        image: {thumb},
        market_data: {
          current_price: { usd: currentPriceUsd },
          total_volume: { usd: totalVolumeUsd },
          market_cap: { usd: marketCapUsd },
          price_change_percentage_24h_in_currency: { usd: priceChangeUsd },
        },
      } ;
  
      console.log(savedCards)
      postData();
      
      async function postData() {
        try {
          console.log("api")
          const res = await axios.post("http://localhost:8000/card", savedCards);
        } catch (error) {
          console.log("Error", error);
        }
      } 
    };
  }
  return (
    <div className="flex flex-row border-2 border-solid  border-red-500 bg-slate-400 m-2">
      <Link to={`/dashboard/${data.id}`}>
        <div className="  rounded-xl  min-w-fit flex justify-center">
          <div className=" border p-3">
            <p>{data.id}</p>
            <img className="w-6 " src={data.image.thumb} alt="abc" />
            <p>${data.market_data.current_price.usd}</p>
            <p>
              {data.market_data.price_change_percentage_24h_in_currency.usd}%
            </p>
            <p>Total Volume : {data.market_data.total_volume.usd}</p>
            <p>Market Cap : {data.market_data.market_cap.usd}</p>
          </div>
        </div>
      </Link>
      <button onClick={handleSave}>
        {isSave ? <BookmarkIcon /> : <BookmarkBorderIcon />}
      </button>
    </div>
  );
}

export default GridCards;
