import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import pupimg1 from '../Adoption/images/puppy2.jpg'
import { CardActionArea } from '@mui/material';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function PetCard(props) {
    const navigate = useNavigate();
    let url = 'http://localhost:5000/uploads/'
    const [pet,setPet]= useState(props.pet)
    const petPic = !!(pet.petImage)?url+pet.petImage:pupimg1;
    !!(pet.petImage)?console.log(url+pet.petImage):console.log('')
  return (
      
    <div>
        <Grid item xs={12}  >
        <Card sx={{ Width: 400, margin:1 }}>
      <CardActionArea onClick={()=>{
           localStorage.setItem('petid', pet._id);
           navigate('/PetDetails')
      }}>
        <CardMedia
          component="img"
          height="200"
          width="300"
          image={petPic}
          alt={pet.name}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pet.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {pet.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </div>
  )
}

export default PetCard