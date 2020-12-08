import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import medio from './assets/medio.png'

export default function Solution3() {
   const [name, setName] = useState('idegen')
   
   return (
      <div className='container'>
         <img className='image' src={medio} alt="medio" />
         <h1 className='text'>Üdv, {name}!</h1>
         <TextField style={{ width: '100%'}} id="outlined-basic" label="Hogy hívnak?" variant="outlined" onChange={e => setName(e.target.value)} />
      </div>
   )
}