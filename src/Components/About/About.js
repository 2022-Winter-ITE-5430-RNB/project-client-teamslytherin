import React, { useState, useEffect } from 'react'
import {useNavigate } from 'react-router-dom';
import { FormStyle, Head, InputText, InputTextArea, PetCategory, SubmitPost, Image, Error } from './AboutStyling'
import ex from './AboutImage/ex.jpg'
import axios from 'axios';

const About = () => {

  const navigate = useNavigate();

  const [err_message, set_err_message] = useState('');

    const [formData2, setFromDate] = useState({
    
    ptype: '',
    pbreed: '',
    pneeds: '',
    phabbits: '',
    experience: '',
   });

  const [myFile, setFile] = useState();

  const { ptype, pbreed, pneeds, phabbits, experience } = formData2;

  const onUpdate = (p) => {
       setFromDate({ ...formData2, [p.target.name]: p.target.value });
  };

  const onChange = (p) => {
    console.log("onChange");
    setFile(p.target.files[0]);
  };

  
  const onSubmit = async (p) => {
    console.log("submit");
    p.preventDefault();

    let token = localStorage.getItem('token');
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-auth-token': token,
      },
    };

    let data = new FormData();
    data.append('ptype', ptype);
    data.append('pbreed', pbreed);
    data.append('pneeds', pneeds);
    data.append('phabbits', phabbits);
    data.append('experience', experience);
    data.append('myFile', myFile);

    
    try {
      const response = await axios.post(
        'http://localhost:5000/api/abouts',
        data,
        config
      );

      console.log(response);
      navigate('/');
     } catch (err) {
      set_err_message(err.response.data.errors);
      console.log(err);
      
    }
  };

      return (
        <div>
        <FormStyle onSubmit={(p) => onSubmit(p)}>
          <Head> Share Experience With a Pet </Head><br></br>
          
          <Image src={ex} />
          
          <PetCategory aria-label="Default select example" name='ptype' value={ptype} onChange={(p) => onUpdate(p)}>
            <option>Pet Type</option>
            <option value="dog">Dogs</option>
            <option value="cat">Cats</option>
            <option value="bird">Bird</option>
            <option value="other">Other(Domestic Animal)</option>
          </PetCategory><br></br><br></br>
          <InputText type='text' placeholder='Pet Breed' name='pbreed' value={pbreed} onChange={(p) => onUpdate(p)}/> <br></br><br></br>
          <InputText type='text' placeholder='Basic needs' name ='pneeds' value={pneeds} onChange={(p) => onUpdate(p)} /> <br></br> <br></br> 
          <InputText type='text' placeholder='Habbits'  name='phabbits' value={phabbits} onChange={(p) => onUpdate(p)} /> <br></br> <br></br>        
          <InputTextArea placeholder='Share your experience' name='experience' value={experience} onChange={(p) => onUpdate(p)}></InputTextArea> <br></br><br></br>
  
                  <SubmitPost type='button'>Post</SubmitPost>

         <Error>
            {err_message}
          </Error>  
          
        </FormStyle>
      </div>
     
    )
      } 

export default About