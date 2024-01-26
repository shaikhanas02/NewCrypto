import { createContext, useContext, useState } from "react";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [savedCards, setSavedCards] = useState([]);
  const [watchlistData, setWatchlistData] = useState(null);
  console.log("this is watchlist=>", watchlistData);

  const toggleSave = (id) => {
    if (savedCards.includes(id)) {
      setSavedCards(savedCards.filter((cardId) => cardId !== id));
    } else {
      setSavedCards([...savedCards, id]);
    }
  };  

  return (
    <CardContext.Provider
      value={{ savedCards, toggleSave, watchlistData, setWatchlistData }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => useContext(CardContext);
