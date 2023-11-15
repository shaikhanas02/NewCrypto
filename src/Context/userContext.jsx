
import React, { Children, useState } from "react";
import { useContext } from "react";


export const UserContext = React.createContext() ;


export const UserContextProvider = ({Children}) => {
 let [user,setUser] = useState('') ;

 const value = {
    user,setUser
 }

 return(

    <UserContext.Provider value={value}>{Children}</UserContext.Provider>
 )

}