import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FormStyle, Head, InputText, InputTextArea, PetCategory, SubmitRehome, Image,
   ChooseImage, Label, InputDate} from './RehomeStyling'
import rehome from './RehomeImages/rehome.png'

const Rehome = () => {

  const navigate = useNavigate();
  const [formData2, setFromDate] = useState({
    name: '',
    description: '',
    dob: '',
    type: '',
    breed: '',
    count: '',
    vaccine: ''
  });

  const [myFile, setFile] = useState();
  const { name, description, dob, type, breed, count, vaccine } = formData2;

  const onChange = (e) => {
    setFromDate({ ...formData2, [e.target.name]: e.target.value });
  };

  const onChange2 = (e) => {
    console.log("onChange2");
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    console.log("submit");
    e.preventDefault();

    let token = localStorage.getItem('token');
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-auth-token': token,
      },
    };

    let data = new FormData();
    data.append('name', name);
    data.append('description', description);
    data.append('dob', dob);
    data.append('petType', type);
    data.append('breed', breed);
    data.append('count', count);
    data.append('vaccine', vaccine);
    data.append('myFile', myFile);

    try {
      const response = await axios.post(
        'http://localhost:5000/api/pets',
        data,
        config
      );
      console.log(response);
      navigate('/');
    } catch (err) {
      console.log(err);
      console.log(err.response);
    }
  };

  return (
    <div>
      <FormStyle onSubmit={(e) => onSubmit(e)}>
        <Head> Raise a request for your pets to be adopted </Head><br></br>

        <Image src={rehome} />

        <InputText type='text' placeholder='Pet Name' name='name' value={name} onChange={(e) => onChange(e)} /> <br></br><br></br>

        <PetCategory aria-label="Default select example" name='type' value={type} onChange={(e) => onChange(e)}>
          <option>Pet Type</option>
          <option value="dog">Dogs</option>
          <option value="cat">Cats</option>
          <option value="bird">Bird</option>
          <option value="other">Other(Domestic Animal)</option>
        </PetCategory><br></br><br></br>

        <InputText type='text' placeholder='Breed' name='breed' value={breed} onChange={(e) => onChange(e)} /> <br></br><br></br>

        <InputText type='text' placeholder='Vaccination' name='vaccine' value={vaccine} onChange={(e) => onChange(e)} /> <br></br> <br></br>

        <div>
          <Label>Birthday:</Label> &nbsp;
          <InputDate type="date" id="birthday" name='dob' value={dob} onChange={(e) => onChange(e)} /> <br></br> <br></br>
        </div>

        <InputText type='text' placeholder='Enter number of pets' name='count' value={count} onChange={(e) => onChange(e)} /> <br></br> <br></br>

        <InputTextArea placeholder='Enter a description here' name='description' value={description} onChange={(e) => onChange(e)} /> <br></br><br></br>

        <Label>Upload an image of your Pet:</Label>
        <ChooseImage type="file" id="img" name="myFile" accept="image/*" onChange={(e) => onChange2(e)} /><br></br>

        <SubmitRehome type='submit' >Rehome</SubmitRehome> <br></br>

      </FormStyle>
    </div>
  )
}

export default Rehome





















