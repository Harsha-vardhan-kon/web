import React from "react";
import { Typography, TextField ,Box, Button} from "@mui/material";
import '../Contact/Contact.css'
const Contact = () => {
  return (
    <div className="Contact-parent">
      <div className="contact-child">
        <Typography variant="h2" >
          Contact Us
        </Typography>
        <Box sx={{ marginLeft: '350px', width: '300px' }}>
       <TextField id="standard-email" label="Email" variant="standard" sx={{width:'350px'}}/>
       <TextField id="standard-country" label="Country" variant="standard" sx={{width:'350px'}} />
       <TextField id="standard" label="issuse" variant="standard" multiline  maxRows={4} sx={{width:'350px'}} />
         </Box>
         <div className="Button-parent">
         <Button variant="contained" onClick={()=>alert("Thanks for Contacting")} color="success">Submit</Button>
         </div>
    </div>
      </div>
 );
};

export default Contact;
