import { createContext } from "react";
import { bagItems } from "../assets/assets.js"

export const DataContext = createContext(null)

export const DataContextProvider = (props) => {
    const contextValue = {
      bagItems
    }
    return(
        <DataContext.Provider value={contextValue} >
            {props.children}
        </DataContext.Provider>
    )
}