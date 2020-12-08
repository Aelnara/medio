import React from 'react'

export default function Button({ handleClick }) {
   return (
      <button className='button' onClick={handleClick} >Küldés</button>
   )
}