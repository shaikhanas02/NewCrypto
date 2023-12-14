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

  function handleSave() {
    toggleSave(data.id) ;
    
    const { id 
    } = data ;
   

    if (!isSave) { 
      const savedCard = {
        id, isSave
      } ;
  
      console.log(savedCard)
      postData();
      
      async function postData() {
        try {
          console.log("api")
          const res = await axios.post("https://newcrypto.onrender.com/card", savedCard);
        } catch (error) {
          console.log("Error", error);
        }
      } 
    };
  }

  
  
  return (
    <div className='flex flex-row border w-full '>
    <Link to={`/dashboard/${data.id}`}>
    <div className='flex flex-row border p-4  '>
        <p>{data.id}</p> 
        <img src={data.image.thumb} alt="abc" />
        <p>${data.market_data.current_price.usd}</p>
        <p>{data.market_data.price_change_percentage_24h_in_currency.usd}%</p>
        <p>Total Volume : {data.market_data.total_volume.usd}</p>
        <p>Market Cap : {data.market_data.market_cap.usd}</p>
        </div> 
        </Link> 
        <button onClick={handleSave}>{isSave ? <BookmarkIcon /> : <BookmarkBorderIcon /> }</button>
    </div>
  )
}

export default ListCards ;