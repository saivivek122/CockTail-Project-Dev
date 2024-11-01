import React, { useState } from 'react'
import "./searchcontent.css"

const SearchContent = ({handleUserInput}) => {
    const [searchValue,setSearchValue]=useState();
    const[submitValue,setSubmitValue]=useState();
    const handleChange=(event)=>{
     setSearchValue(event.target.value)
    // console.log("from searchpage",searchValue)
    }
    const handleSubmit=()=>{
        // setSubmitValue(searchValue)
        handleUserInput(searchValue)
        // console.log(submitValue)
       
    }
    
    
  return (
    <div className='search-container'>
      <input type="text"  onChange={handleChange} className="search-input" placeholder="search"value={searchValue}/>
      <button onClick={handleSubmit} className='search-button'>Search</button>
   
    </div>
  )
}

export default SearchContent
