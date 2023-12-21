import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import axios from "axios"; 
import { useCardContext } from "../../Context/CardContext";

function GridCards({ data }) { 
  const { savedCards, toggleSave } = useCardContext();
  const isSave = savedCards.includes(data.id);

  if (!data) {
    return <div>Loading...</div>;
  }  

  async function handleSave() {
    toggleSave(data.id);

    const { id } = data; 

    try {
      const token = localStorage.getItem("token"); 
      console.log(token);
    
      if (!token) {
        // Handle the case where the token is not available
        console.error("Token not found");
        return;
      }

    

      if (isSave) {
        // If already saved, delete the card
        await axios.delete(`https://newcrypto.onrender.com/card/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Card deleted successfully");
      } else { 
        // If not saved, save the card
        const savedCard = { id }; 
        console.log(savedCard) ;
        await axios.post("https://newcrypto.onrender.com/card", savedCard, {
          headers: {  
            Authorization: `Bearer ${token}`, 
          }, 
        }); 
        console.log("Card saved successfully");
      } 
    } catch (error) {
      console.log("Error", error);
    }
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
