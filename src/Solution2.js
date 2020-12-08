import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import medio from './assets/medio.png'

const useStyles = makeStyles((theme) => ({
   textField: {
      width: '100%'
   },
   btn: {
      width: '100%',
      letterSpacing: '2px',
      fontWeight: '700'
   }
}))

export default function Solution2() {
   const classes = useStyles();
   const [inputText, setInputText] = useState('')
   const [name, setName] = useState('idegen')
   
   const handleClick = () => {
      setName(inputText)
   }
   
   return (
      <div className='container'>
         <img className='image' src={medio} alt="medio" />
         <h1 className='text'>Üdv, {name}!</h1>
         <TextField className={classes.textField} id="outlined-basic" label="Hogy hívnak?" variant="outlined" onChange={e => setInputText(e.target.value)} />
         <Button className={classes.btn} variant="contained" color="primary" onClick={handleClick} >Küldés</Button>
      </div>
   )
}