import React from 'react'
import { ButtonGroup } from 'react-bootstrap'
import { ButtonToolbar } from 'react-bootstrap'
import { FAQHeading, Button, EachFAQ, FAQSection } from '../FAQ/FaqStyling'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const DeletePet = (props) => {
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
          const url = 'http://localhost:5000/api/pets/'+petid;
         const response = await axios.delete(url,config)         
          console.log(response);
          navigate('/');
         
        } catch (error) {
          console.log(error)
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

  </div>
  )
}

export default DeletePet