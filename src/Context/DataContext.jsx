import { createContext, useEffect, useState } from "react";
import { bagItems } from "../assets/assets.js"

export const DataContext = createContext(null)

export const DataContextProvider = (props) => {

    const [addCart, setAddCart] = useState({})

    const addToCart = (listId) => {
        if(!addCart[listId]){
            setAddCart( (prev) => ({...prev, [listId]:1}) )
        }
        else{
            setAddCart( (prev) => ({...prev, [listId]:prev[listId]}+1) )
        }

    }

    useEffect(() => {
        console.log(addCart)

    },[addCart])

    const contextValue = {
      bagItems,
      addCart,
      addToCart,
    }

    return(
        <DataContext.Provider value={contextValue} >
            {props.children}
        </DataContext.Provider>
    )
}