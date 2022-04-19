import React from 'react'
import { Head, HomeStylediv, Image } from './HomeStyling'
import adopt from './HomeImages/adopt.png'
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import {useState,useEffect} from 'react'
import axios from 'axios'
import PetCard from './PetCard';

const Home = () => {
  const navigate = useNavigate();
  const [pets, setPets] = useState([])
    
  useEffect(()=>{
      sendAPIRequest();
  },[])

  const sendAPIRequest = async()=> {
      let petid = localStorage.getItem('petid')
      let strpid = petid.toString();
      const url = 'https://ado-pet-server.herokuapp.com/api/pets/'
      console.log(url);
      try {
          const response = await axios.get(url)
          setPets(response.data);
         console.log(response.data)
          
      } catch (error) {
          console.log(error)
      }
  }
  return (
    <>
    <HomeStylediv>
      <Head> Welcome to Ado-Pet </Head>      
      <div className='container'>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container >
      {pets.map((pet)=>{
        return(
          <PetCard pet ={pet} key ={pet._id}/>
        )
      })}
      </Grid>
    </Box>

    </div>
    </HomeStylediv>
    </>
  )
}

export default Home