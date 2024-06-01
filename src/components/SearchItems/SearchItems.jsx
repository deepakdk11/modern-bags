import React, { useState } from 'react'
import "./SearchItems.css"
import { FaSearch } from "react-icons/fa";

const SearchItems = () => {

  const [hideSearch, setHideSearc] = useState(false)

  return (
    <div className='searchBox'>
      { hideSearch && (<form>
        <input className='search' type="text" placeholder='Search Items' />
      </form>)}
        <FaSearch
         role="button"
         size={20}
         style={{cursor:"pointer"}}
         onClick={() => setHideSearc(!hideSearch)}
        />      
    </div>
  )
}

export default SearchItems
