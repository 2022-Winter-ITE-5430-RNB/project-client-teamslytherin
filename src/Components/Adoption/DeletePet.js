import React from 'react'
import { useState } from 'react';
import { ButtonGroup } from 'react-bootstrap'
import { ButtonToolbar } from 'react-bootstrap'
import { FAQHeading, Button, EachFAQ, FAQSection } from '../FAQ/FaqStyling'
import { Head, Page_Left, Page_Right, Image,  Form,   Password, Error } from '../Auth/AuthStyling'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const DeletePet = (props) => {
    const [err_message, set_err_message] = useState('');  
    let petid = localStorage.getItem('petid').toString()
    const navigate = useNavigate();
    let data = {
        id: petid,        
      };
      const deletePet=async ()=>{
        
        try {
          let token = localStorage.getItem('token');
          let config = {
            headers: {
              'Content-Type': 'application/json',
              'x-auth-token': token,
            },
          };
          const url = 'https://ado-pet-server.herokuapp.com/api/pets/'+petid;
         const response = await axios.delete(url,config)         
          console.log(response);
          navigate('/');
         
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
      if(window.confirm('Do you want to delete this Pet?')){deletePet()};}}>Delete
      </Button>
     
  </ButtonGroup>
  <Error>{err_message}</Error>
  </div>
  )
}

export default DeletePet