import React,{useState, useEffect} from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useCardContext } from '../../Context/CardContext';

function WatchlistCards({data, isWatchList}) { 
  const { savedCards, toggleSave } = useCardContext();
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
          await axios.delete("http://localhost:8000/card",
          { data : savedCard, 
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log("Card deleted successfully");
        } else {
          
          await axios.post("http://localhost:8000/card", savedCard, {
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
    <div className='flex flex-row border w-screen text-white  bg-neutral-900  text-xl justify-center items-center py-4'>
    <Link to={`/dashboard/${data.id}`}>
    <div className='flex flex-row basis-3/4'>
        <p>{data.id}</p> 
        <img  className='w-6' src={data.image.thumb} alt="abc" />
        <p>${data.market_data.current_price.usd}</p>
        <p>{data.market_data.price_change_percentage_24h.usd}%</p>
        <p>Total Volume : {data.market_data.total_volume.usd}</p>
        <p>Market Cap : {data.market_data.market_cap.usd}</p>
        </div> 
        </Link> 
        <button className='basis-1/4' onClick={handleSave}>{isSave ? <BookmarkIcon /> : <BookmarkBorderIcon /> }</button>
    </div>
  )
}

export default WatchlistCards ;