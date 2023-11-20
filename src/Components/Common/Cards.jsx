import React,{useState, useEffect} from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Link } from 'react-router-dom';

function Cards({data}) { 
  const [isSave,setIsSave] = useState(false) ;

  if (!data) {
    return <div>Loading...</div>; // You can replace this with a loading indicator or other appropriate content
  }

  useEffect(() => {
    // Check if the card is saved in local storage when the component mounts
    const savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];
    const isCardSaved = savedCards.some((card) => card.id === data.id);
    setIsSave(isCardSaved);
  }, [data.id]);

  const handleSave = () => {
    setIsSave(!isSave);
    const savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];

    if (!isSave) {
      // Save to local storage
      savedCards.push(data);
    } else {
      // Remove from local storage
      const updatedSavedCards = savedCards.filter((card) => card.id !== data.id);
      savedCards.length = 0;
      savedCards.push(...updatedSavedCards);
    }

    localStorage.setItem('savedCards', JSON.stringify(savedCards));
  };

  
  
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

export default Cards ;