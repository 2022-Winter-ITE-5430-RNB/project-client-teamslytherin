import React from 'react'
import { useState } from 'react';
import { ButtonGroup } from 'react-bootstrap'
import { Button  } from './EventStyling'
import { Error } from './EventStyling'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DelEvent = (props) => {
    const [err_message, set_err_message] = useState('');  

    let eventid = localStorage.getItem('eventid').toString()
    const navigate = useNavigate();
   
    let data = {
        id: eventid,        
      };
      const delEvent=async ()=>{
        
        try {
          let token = localStorage.getItem('token');
          let config = {
            headers: {
              'Content-Type': 'application/json',
              'x-auth-token': token,
            },
          };
          const url = 'http://localhost:5000/api/events/'+eventid;
         const response = await axios.delete(url,config)         
          console.log(response);
          navigate('/Events');
         
        } catch (err) {
          console.log(err)
          set_err_message(err.response.data.errors)
        }
    
      }
  return (
      
    <div>
    <ButtonGroup className="me-2" aria-label="Delete group">
    <Button 
    onClick={()=>{
      if(window.confirm('Do you want to delete this Event?')){delEvent()};}}>Delete
      </Button>
     
  </ButtonGroup>

  <Error>{err_message}</Error>
  
  </div>
  )
}

export default DelEvent