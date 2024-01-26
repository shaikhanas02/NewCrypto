import React,{useState, useEffect} from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useCardContext } from '../../Context/CardContext';

function ListCards({data}) { 
  const { savedCards, toggleSave } = useCardContext();
  const isSave = savedCards.includes(data.id);

  if (!data) { 
    return <div>Loading...</div>;  
  }

  async function handleSave() {
    toggleSave(data.id);

    const { id } = data;

    try {
      if (isSave) { 
        await axios.delete("https://newcrypto.onrender.com/card" , data); 
        console.log("Card deleted successfully");
      } else { 
        // If not saved, save the card
        const savedCard = { id, isSave: true };
        await axios.post("https://newcrypto.onrender.com/card", savedCard); 
        console.log("Card saved successfully");
      }
    } catch (error) {
      console.log("Error", error);
      // Handle error if needed
    }
  }

  
  
  return (
    <div className='flex flex-row border w-screen text-white  bg-neutral-900  text-xl justify-center items-center py-4'>
    <Link to={`/dashboard/${data.id}`}>
    <div className='flex flex-row  '>
        <p>{data.id}</p> 
        <img  className='w-6' src={data.image} alt="abc" />
        <p>${data.current_price}</p>
        <p>{data.price_change_percentage_24h}%</p>
        <p>Total Volume : {data.total_volume}</p>
        <p>Market Cap : {data.market_cap}</p>
        </div> 
        </Link> 
        <button onClick={handleSave}>{isSave ? <BookmarkIcon /> : <BookmarkBorderIcon /> }</button>
    </div>
  )
}

export default ListCards ;