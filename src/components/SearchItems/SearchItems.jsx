import React, { useState } from 'react'
import "./SearchItems.css"
import {logos} from "../../assets/assets"

const SearchItems = () => {

  const [hideSearch, setHideSearc] = useState(false)

  return (
    <div className='searchBox'>
      { hideSearch && (<form>
        <input className='search' type="text" placeholder='Search Items' />
      </form>)}
        <img src={logos.search} alt="" onClick={() => setHideSearc(!hideSearch)} />           
    </div>
  )
}

export default SearchItems
