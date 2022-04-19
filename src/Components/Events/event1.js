import React from 'react'
import { useState } from 'react';
import { Input, EventDes,Button,Label} from './EventStyling';
import {  Error } from './EventStyling'
import { ButtonGroup } from 'react-bootstrap'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Event1 = (props) => {
 
  console.log(props.id);
  const navigate = useNavigate();
  const [event,setEvent]= useState(props.event)
  
  const [title,setTitle] =useState(event.title)
  const handleNameChange= (e)=> {
    setTitle(e.target.value);
    }
    const [desc,setDesc] =useState(event.description)
    const handleDescChange= (e)=> {
      setDesc(e.target.value);
      }
      
      const [err_message, set_err_message] = useState('');  
    
      let data = {
        id: props.id,
        title: title,
        description: desc,
     };
      
      const updateEvent=async ()=>{
        
        try {
          let token = localStorage.getItem('token');
          let config = {
            headers: {
              'Content-Type': 'application/json',
              'x-auth-token': token,
            },
          };
          const response = await axios.put('http://localhost:5000/api/events/'
          ,data,config)
          console.log(response);
          
          navigate('/Events');
         
        } catch (err) {
          set_err_message(err.response.data.errors)
          console.log(err)
          console.log(err.response.data.errors);
        }
    
      }
  return (
      <>
      {
        props.show?
        <>
            <Label > Title: </Label>
            <Input type="text" value=  {title} onChange={handleNameChange} /><br/>
            <Label> Description:  </Label>
            <Input type="text" value={desc} onChange={handleDescChange}/><br/>
            
           
            <ButtonGroup className="me-2" aria-label="Edit Pet">           
              <Button onClick={updateEvent}>Save </Button>
              
              <Error>{err_message}</Error>
            </ButtonGroup> 
        </>
        :
        <>
            <EventDes > Title:  {title}</EventDes>
            <EventDes> Description:  {desc}</EventDes>
            
        </>
      }
    
    </>
  )
}

export default Event1