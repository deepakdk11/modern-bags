import { createContext, useEffect, useState } from "react";
import { bagItems } from "../assets/assets.js"

export const DataContext = createContext(null)

export const DataContextProvider = (props) => {
    
    const [cart, setCart] = useState({});

    const addToCart = (listId) => {
        if (!cart[listId]) {
            setCart((prev) => ({...prev,[listId]:1}))
        }
        else{
            setCart((prev) => ({...prev,[listId]:prev[listId]+1}))
        }
    }

    const removeToCart = (listId) => {
        setCart((prev) => ({...prev,[listId]:prev[listId]-1}))
    }

    useEffect(() => {
        console.log(cart)
    },[cart])

    const contextValue = {
      bagItems,
      cart,
      setCart,
      addToCart,
      removeToCart
    }

    return(
        <DataContext.Provider value={contextValue} >
            {props.children}
        </DataContext.Provider>
    )
}