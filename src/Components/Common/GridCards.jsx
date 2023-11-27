import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function GridCards({ data }) {
    const [isSave,setIsSave] = useState(false) ;
    
    if (!data) {
      return <div>Loading...</div>; // You can replace this with a loading indicator or other appropriate content
    }
    useEffect(() => {
        const savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];
        const isCardSaved = savedCards.some((card) => card.id === data.id);
        setIsSave(isCardSaved); 
        
      }, [ data.id]); 

    function handleSave(){
       setIsSave(!isSave) ;
       const savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];

               if(!isSave){
                savedCards.push(data) ;
            } 
            else{
                const updatedSavedCards = savedCards.filter(card => card.id !== data.id) ;
                savedCards.length = 0 ;
                savedCards.push(...updatedSavedCards);
            }
            localStorage.setItem('savedCards',JSON.stringify(savedCards)) ;
    }
    return ( 
        <div className='flex flex-row border-2 border-solid  border-red-500 bg-slate-400 m-2' >
      <Link to ={`/dashboard/${data.id}`}>
      <div className="  rounded-xl  min-w-fit flex justify-center"> 
        <div className=" border p-3">
          <p>{data.id}</p>
          <img className="w-6 " src={data.image.thumb} alt="abc" />
          <p>${data.market_data.current_price.usd}</p>
          <p>{data.market_data.price_change_percentage_24h_in_currency.usd}%</p>
          <p>Total Volume : {data.market_data.total_volume.usd}</p>
          <p>Market Cap : {data.market_data.market_cap.usd}</p>
        </div>
      </div>
      </Link>
      <button onClick={handleSave}>{isSave ? <BookmarkIcon /> : <BookmarkBorderIcon /> }</button>
      </div>
    );
  }

  export default GridCards ;