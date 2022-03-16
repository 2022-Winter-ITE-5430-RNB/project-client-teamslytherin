import React from 'react'
import { FormStyle, Head, InputText, InputTextArea, PetCategory, SubmitRehome, Image, UploadImage, ChooseImage, Label, InputDate } from './RehomeStyling'
import rehome from './RehomeImages/rehome.png'

const Rehome = () => {

  return (
    <div>
      <FormStyle>
        <Head> Raise a request for your pets to be adopted </Head><br></br>
        <Image src={rehome} />
        <InputText type='text' placeholder='Pet Name' /> <br></br><br></br>
        <PetCategory aria-label="Default select example">
          <option>Pet Type</option>
          <option value="dog">Dogs</option>
          <option value="cat">Cats</option>
          <option value="bird">Bird</option>
          <option value="other">Other(Domestic Animal)</option>
        </PetCategory><br></br><br></br>
        <div>
          <Label>Birthday:  </Label>
          <InputDate type="date" id="birthday" name="birthday"></InputDate> <br></br> <br></br>     
        </div>   
        <InputText type='text' placeholder='Enter number of pets' /> <br></br> <br></br>        
        <InputTextArea name="comment" placeholder='Enter comments here'></InputTextArea> <br></br><br></br>

        <Label>Upload an image of your Pet:</Label>
        <ChooseImage type="file" id="img" name="img" accept="image/*"></ChooseImage><br></br>
        <UploadImage type="button">Upload</UploadImage><br></br><br></br><br></br>

        <SubmitRehome type='button'>Rehome</SubmitRehome>
      </FormStyle>
    </div>
  )
}

export default Rehome
