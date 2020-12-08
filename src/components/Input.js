import React from 'react'

export default function Input({ inputText, handleInputChange }) {
   return (
      <input className='input' onChange={handleInputChange} value={inputText} placeholder='Név'/>
   )
}