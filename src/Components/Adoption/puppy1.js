import React from 'react'
import { useState } from 'react';
import { EachFAQ, FAQHeading, FAQSection, Question ,Answer, petDesc,Input, PetDesc,Button,Label} from '../FAQ/FaqStyling';
import { Head, Page_Left, Page_Right, Image,  Form,   Password, Error } from '../Auth/AuthStyling'
import { FormLabel } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap'

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Puppy1 = (props) => {
 
  console.log(props.id);
  const navigate = useNavigate();
  const [pet,setPet]= useState(props.pet)
  
  const [name,setName] =useState(pet.name)
  const handleNameChange= (e)=> {
    setName(e.target.value);
    }
    const [desc,setDesc] =useState(pet.description)
    const handleDescChange= (e)=> {
      setDesc(e.target.value);
      }
      const [dob,setDob] =useState(pet.dob)
      const handleDobChange= (e)=> {
      setDob(e.target.value);
      }
      const [breed,setBreed] =useState(pet.breed)
      const handleBreedChange= (e)=> {
        setBreed(e.target.value);
      }
      const [type,setType] =useState(pet.petType)
      const handleTypeChange= (e)=> {
        setType(e.target.value);
      }
      const [vaccine,setVaccine] =useState(pet.vaccine)
      const handleVaccineChange= (e)=> {
        setVaccine(e.target.value);
      }
      
      const [err_message, set_err_message] = useState('');  
      let data = {
        id: props.id,
        name: name,
        description: desc,
        dob:dob,
        breed:breed,
        petType: type,
        vaccine:vaccine
      };
      
      const updatePet=async ()=>{
        
        try {
          let token = localStorage.getItem('token');
          let config = {
            headers: {
              'Content-Type': 'application/json',
              'x-auth-token': token,
            },
          };
          const response = await axios.put('http://localhost:5000/api/pets/',data,config)
          console.log(response);
          
          navigate('/');
         
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
            <Label > Name: </Label>
            <Input type="text" value=  {name} onChange={handleNameChange} /><br/>
            <Label> Description:  </Label>
            <Input type="text" value={desc} onChange={handleDescChange}/><br/>
            <Label> Birth Date:  </Label>
            <Input type="text" value= {dob} onChange={handleDobChange}/><br/>
            <Label> Breed: </Label>
            <Input type="text" value= {breed} onChange={handleBreedChange}/><br/>
            <Label> Pet Type:  </Label>
            <Input type="text" value={type} onChange={handleTypeChange}/><br/>
            <Label > Vaccine: </Label>
            <Input type="text" value={vaccine} onChange={handleVaccineChange} /><br/>
            <ButtonGroup className="me-2" aria-label="Edit Pet">           
              <Button onClick={updatePet}>Save </Button>
              
              <Error>{err_message}</Error>
            </ButtonGroup> 
        </>
        :
        <>
            <PetDesc > Name:  {name}</PetDesc>
            <PetDesc> Description:  {desc}</PetDesc>
            <PetDesc> Birth Date:  {dob}</PetDesc>
            <PetDesc> Breed:  {breed}</PetDesc>
            <PetDesc> Pet Type:  {type}</PetDesc>
            <PetDesc> Vaccine: {vaccine}</PetDesc>
        </>
      }
    
    </>
  )
}

export default Puppy1