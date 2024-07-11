"use client";
import { createContext,useContext,useState } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {
    const[userRank,setUserRank]=useState('');
    const[userPercentile,setUserPercentile]=useState('');
    const[userQuest,setUserQuest]=useState('');

    return(
        <GlobalContext.Provider value={{userRank,setUserRank,userPercentile,setUserPercentile,userQuest,setUserQuest}}>{children}</GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);