
import React, { useState, useEffect } from 'react'
import {useNavigate } from 'react-router-dom';
import { FormStyle, Head, InputText, InputTextArea, PetCategory, SubmitPost, Image, } from './AboutStyling'
import ex from './AboutImage/ex.jpg'
import axios from 'axios';

const About = () => {

  const navigate = useNavigate();

  const [formData2, setFromDate] = useState({
    
    ptype: '',
    pbreed: '',
    pneeds: '',
    phabbits: '',
    experience: '',
   });

  const [myFile, setFile] = useState();

  const { ptype, pbreed, pneeds, phabbits, experience } = formData2;

  const onChange = (p) => {
       setFromDate({ ...formData2, [p.target.ptype]: p.target.value });
  };

  const onChange2 = (p) => {
    console.log("onChange2");
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
      console.log(err)
      console.log(err.response);
    }
  };

      return (
        
      <div>
        <FormStyle onSubmit={(p) => onSubmit(p)}>
          <Head> Share Experience How to Raise a Pet </Head><br></br>
          
          <Image src={ex} />
          
          <PetCategory aria-label="Default select example" name='ptype' value={ptype} onChange={(p) => onChange(p)}>
            <option>Pet Type</option>
            <option value="dog">Dogs</option>
            <option value="cat">Cats</option>
            <option value="bird">Bird</option>
            <option value="other">Other(Domestic Animal)</option>
          </PetCategory><br></br><br></br>
          <InputText type='text' placeholder='Pet Breed' name='pbreed' value={pbreed} onChange={(p) => onChange(p)}/> <br></br><br></br>
          <InputText type='text' placeholder='Basic needs' name ='pneeds' value={pneeds} onChange={(p) => onChange(p)} /> <br></br> <br></br> 
          <InputText type='text' placeholder='Habbits'  name='phabbits' value={phabbits} onChange={(p) => onChange(p)} /> <br></br> <br></br>        
          <InputTextArea placeholder='Share your experience' name='experience' value={experience} onChange={(p) => onChange(p)}></InputTextArea> <br></br><br></br>
  
                  <SubmitPost type='button'>Post</SubmitPost>
        </FormStyle>
      </div>
    )
  }

export default About














