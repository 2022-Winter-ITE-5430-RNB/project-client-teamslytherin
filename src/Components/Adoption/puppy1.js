import React from 'react'
import { useState } from 'react';
import { EachFAQ, FAQHeading, FAQSection, Question ,Answer, petDesc, PetDesc} from '../FAQ/FaqStyling';
import { FormLabel } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'bootstrap';

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
         
        } catch (error) {
          console.log(error)
        }
    
      }
  return (
      <>
      {
        props.show?
        <>
            <FormLabel > Name: </FormLabel>
            <input type="text" value=  {name} onChange={handleNameChange} /><br/>
            <FormLabel> Description:  </FormLabel>
            <input type="text" value={desc} onChange={handleDescChange}/><br/>
            <FormLabel> Birth Date:  </FormLabel>
            <input type="text" value= {dob} onChange={handleDobChange}/><br/>
            <FormLabel> Breed: </FormLabel>
            <input type="text" value= {breed} onChange={handleBreedChange}/><br/>
            <FormLabel> Pet Type:  </FormLabel>
            <input type="text" value={type} onChange={handleTypeChange}/><br/>
            <FormLabel> Vaccine: </FormLabel>  
            <input type="text" value={vaccine} onChange={handleVaccineChange} /><br/>
            <ButtonGroup className="me-2" aria-label="Edit Pet">
              <button onClick={updatePet}>Save</button>
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