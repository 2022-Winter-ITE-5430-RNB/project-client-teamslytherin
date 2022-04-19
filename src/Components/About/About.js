import React, { useState, useEffect } from 'react'
import {useNavigate } from 'react-router-dom';
import { FormStyle, Head, InputText, InputTextArea, PetCategory, SubmitPost, Image, Error,EachS,EachStep,Allsteps } from './AboutStyling'
import ex from './AboutImage/ex.jpg'
import axios from 'axios';
import decode from 'jwt-decode';

const About = () => {

  const navigate = useNavigate();

  const [err_message, set_err_message] = useState('');


  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    sendApiRequest();
  }, []);

  const sendApiRequest = async () => {
    try {
      const response = await axios.get(
        'https://ado-pet-server.herokuapp.com/api/abouts'
      );
      setAbouts(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

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

   
    let config = {
      headers: {
        'Content-Type': 'application/json',
        },
    };

   
    let data = {
      ptype: ptype,
      pbreed: pbreed,
      pneeds: pneeds,
      phabbits: phabbits,
      experience: experience,
    }
    // let data = new FormData();
    // data.append('ptype', ptype);
    // data.append('pbreed', pbreed);
    // data.append('pneeds', pneeds);
    // data.append('phabbits', phabbits);
    // data.append('experience', experience);
    // data.append('myFile', myFile);

    
    try {
      const response = await axios.post(
        'https://ado-pet-server.herokuapp.com/api/abouts',
        data,
        config
      );

      console.log(response);
      localStorage.setItem('token', response.data.token);
      console.log(decode(response.data.token));
      navigate('/');
     } catch (err) {
     
      console.log(err.response);
      if (typeof err.response.data.errors[0].msg !== 'undefined') {
        console.log("error 1");
        set_err_message(err.response.data.errors[0].msg);
        console.log(err.response.data.errors[0].msg);
      }
      else {
        console.log("error 2");
        set_err_message(err.response.data.errors);
        console.log(err.response.data.errors);
      }
      
    }
  };

      return (
                
        <FormStyle onSubmit={(p) => onSubmit(p)}>
          <Head> Share Experience With a Pet </Head><br></br>
          
          <Image src={ex} />

         
          <Allsteps>
         
         <EachStep>            
          <PetCategory aria-label="Default select example" name='ptype' value={ptype} onChange={(p) => onUpdate(p)}><br></br> <br></br> 
            <option>Pet Type</option>
            <option value="dog">Dogs</option>
            <option value="cat">Cats</option>
            <option value="bird">Bird</option>
            <option value="other">Other(Domestic Animal)</option> 
          </PetCategory><br></br> <br></br> 
          
          <InputText type='text' placeholder='Pet Breed' name='pbreed' value={pbreed} onChange={(p) => onUpdate(p)}/> <br></br> <br></br> 
          <InputText type='text' placeholder='Basic needs' name ='pneeds' value={pneeds} onChange={(p) => onUpdate(p)} /> <br></br> <br></br> 
          <InputText type='text' placeholder='Habbits'  name='phabbits' value={phabbits} onChange={(p) => onUpdate(p)} /> <br></br> <br></br>        
          <InputTextArea placeholder='Share your experience' name='experience' value={experience} onChange={(p) => onUpdate(p)}></InputTextArea> <br></br><br></br>
  
                  <SubmitPost type='button'>Post</SubmitPost>

         <Error>
            {err_message}
          </Error>  
          </EachStep> 

               {abouts.map((about) => {
                    return (
                      <EachS>
                      <table>
                        <tr>
                          Pet Type: {about.ptype}
                        </tr>
                        <tr>
                          Pet Breed:  {about.pbreed}
                        </tr>
                        <tr>
                          Experience:  {about.experience}
                        </tr>
                    </table>
                    </EachS>
                  )
                })
              }     

        </Allsteps>
     </FormStyle>    
     
    )
      } 

export default About