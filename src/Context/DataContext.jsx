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

    const cartTotalAmount = () => {
        let totalAmount = 0;
        for (const list in cart) {
            if (cart[list] > 0) {
                let listItem = bagItems.find((pro) => pro.id.toString() === list);
                totalAmount += listItem.price * cart[list];
            }   
        }
        return totalAmount;
    }

    const cartTotalMRPAmount = () => {
        let totalAmount = 0;
        for (const list in cart) {
            if (cart[list] > 0) {
                let listItem = bagItems.find((pro) => pro.id.toString() === list);
                totalAmount += listItem.MRP * cart[list];
            }   
        }
        return totalAmount;
    }

    const cartTotalDiscountAmount = () => {
        let totalAmount = 0;
        for (const list in cart) {
            if (cart[list] > 0) {
                let listItem = bagItems.find((pro) => pro.id.toString() === list);
                totalAmount += listItem.MRP - listItem.price;
            }   
        }
        return totalAmount;
    }

    const contextValue = {
      cart,
      setCart,
      bagItems,
      addToCart,
      removeToCart,
      cartTotalAmount,
      cartTotalMRPAmount,
      cartTotalDiscountAmount
    }

    return(
        <DataContext.Provider value={contextValue} >
            {props.children}
        </DataContext.Provider>
    )
}