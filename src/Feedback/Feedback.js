import React from 'react'
import '../Feedback/Feedback.css'
import { Button, Rating, TextField, Typography } from '@mui/material'
import { FcRating } from "react-icons/fc";
const Feedback = () => {
  return (
    <div className='Feedback-conatiner'>
      <h1><FcRating/> Rate Your Experince</h1>
      <div className='rating'>
         <Rating defaultValue={1} precision={0.5}></Rating>
         <p>Rate us </p>
      </div>
      
        <Typography >
            <TextField sx={{width:'300px'}} variant='standard' multiline maxRows={2} label="FeedBack" id='standard-basic'/>
        </Typography>
      <div className='button'>
        <Button sx={{position:'relative'}}variant='contained' color='success'>Submit</Button>
        </div>
    </div>
  )
}

export default Feedback
