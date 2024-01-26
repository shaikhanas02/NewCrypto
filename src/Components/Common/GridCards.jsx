import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import axios from "axios";
import { useCardContext } from "../../Context/CardContext";

function GridCards({ data, isWatchList }) {
  const { savedCards, toggleSave, watchlistData } = useCardContext();
  const [isSave, setIsSave] = useState(false);

  if (!data) {
    return <div>Loading...</div>;
  }
  useEffect(() => {
    if (isWatchList) {
      setIsSave(true);
    }
  }, []);

  async function handleSave() {
    const { id } = data;
    setIsSave(!isSave);
    
    try {
      toggleSave(data.id);   
      console.log(isSave);
      const token = localStorage.getItem("token");
      // console.log("working fine");
      if (!token) {
        // Handle the case where the token is not available
        console.error("Token not found");
        return;
      }
      const savedCard = { id, isSave: false };
      if (isSave) {
        await axios.delete("https://newcrypto.onrender.com/card",
        { data : savedCard, 
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Card deleted successfully");
      } else {
        
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
    <div className="flex flex-row border-2 border-solid  border-red-500 background-color : rgb(26,26,27) text-white m-2">
      <Link to={`/dashboard/${data.id}`}>
        <div className="  rounded-xl  min-w-fit flex justify-center">
          <div className="p-3">
            <p>{data.id}</p>
            <img className="w-6 " src={data.image} alt="abc" />
            <p>${data.current_price}</p>
            <p>
              {data.price_change_percentage_24h}%
            </p> 
            <p>Total Volume : {data.total_volume}</p>
            <p>Market Cap : {data.market_cap}</p>
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
