import React from 'react'

function Scroll(props) {
  return (
    <div style={{overflowY: "scroll", height: "800px", border: "2px solid grey"}}>
      {props.children}
    </div>
  )
}

export default Scroll