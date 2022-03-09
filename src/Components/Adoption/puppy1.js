import React from 'react'
import { useState } from 'react';
import { EachFAQ, FAQHeading, FAQSection, Question ,Answer, petDesc, PetDesc} from '../FAQ/FaqStyling';
import { FormLabel } from 'react-bootstrap';
const Puppy1 = (props) => {
    console.log("name ="& props.show);

    
  return (
    
      
    
      <>
      {
        props.show?
        <>
            <FormLabel > Name: </FormLabel>
            <input type="text" value=  {props.pet.name}/><br/>
            <FormLabel> Description:  </FormLabel>
            <input type="text" value={props.pet.description} /><br/>
            <FormLabel> Birth Date:  </FormLabel>
            <input type="text" value= {props.pet.dob}/><br/>
            <FormLabel> Breed: </FormLabel>
            <input type="text" value= {props.pet.breed} /><br/>
            <FormLabel> Pet Type:  </FormLabel>
            <input type="text" value={props.pet.petType} /><br/>
            <FormLabel> Vaccine: </FormLabel>  
            <input type="text" value={props.pet.vaccine} /><br/>
        </>
        :
        <>
            <PetDesc > Name:  {props.pet.name}</PetDesc>
            <PetDesc> Description:  {props.pet.description}</PetDesc>
            <PetDesc> Birth Date:  {props.pet.dob}</PetDesc>
            <PetDesc> Breed:  {props.pet.breed}</PetDesc>
            <PetDesc> Pet Type:  {props.pet.petType}</PetDesc>
            <PetDesc> Vaccine: {props.pet.vaccine}</PetDesc>
        </>
      }
    
    </>
  )
}

export default Puppy1