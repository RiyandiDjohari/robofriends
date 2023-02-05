import React from 'react'

const Card = ({id, name, email}) => {
  return (
    <div className='bg-light-green pa3 ma3 grow tc dib br3 bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?size=300x300`} alt="robots" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Card