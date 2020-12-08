import React, { useState } from 'react'
import Image from './components/Image'
import Text from './components/Text'
import Input from './components/Input'
import Button from './components/Button'

export default function Solution1() {
   const [inputText, setInputText] = useState('')
   const [name, setName] = useState('')
   
   const handleClick = () => {
      setName(inputText)
      setInputText('')
   }
   
   return (
      <div className='container'>
         <Image />
         <Text text={name} />
         <div className='container-input'>
            <Input inputText={inputText} handleInputChange={e => setInputText(e.target.value)} />
            <Button handleClick={handleClick} />
         </div>
      </div>
   )
}