import React from 'react'
import { FormStyle,Head,InputText,InputTextArea,PetCategory,SubmitRehome,Image } from './RehomeStyling'
import rehome from './RehomeImages/rehome.png'

const Rehome = () => {

  return (
    <div>      
      <FormStyle>
        <Head> Raise a request for your pets to be adopted </Head><br></br>                           
        <Image src={rehome}/> 
        <PetCategory aria-label="Default select example">
          <option>Pet Type</option>
          <option value="dog">Dogs</option>
          <option value="cat">Cats</option>
          <option value="bird">Bird</option>
          <option value="other">Other(Domestic Animal)</option>
        </PetCategory><br></br><br></br>
        <InputText type = 'text' placeholder = 'Enter number of pets' /> <br></br> <br></br>
        <InputTextArea name="comment" placeholder = 'Enter comments here'> </InputTextArea> <br></br><br></br>
        <SubmitRehome  type='button'>Rehome</SubmitRehome>          
      </FormStyle>             
    </div>
  )
}

export default Rehome
