import React from 'react'

function SearchBox({searchChange}) {
  return (
    <div className='pa2'>
      <input 
        className='pa3 ba b--green bg-lightest-blue'
        type="search" 
        name="search" 
        id="search"
        placeholder='Search Robot' 
        onChange={searchChange}
        style={{outline: "none", fontFamily: "cursive, sans-serif"}}
      />
    </div>
  )
}

export default SearchBox