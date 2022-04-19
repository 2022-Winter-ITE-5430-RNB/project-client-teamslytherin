import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import dogImg from './EventImages/d3.jpg'
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

function EventCard(props) {
    const navigate = useNavigate();
    let url = 'https://ado-pet-server.herokuapp.com/uploads/'
    const [event,setEvent]= useState(props.event)
    const eventPic = !!(event.eImage)?url+event.eImage:dogImg;
   
    !!(event.eImage)?console.log(url+event.eImage):console.log('')
  return (
      
    <div>
        <Grid item xs={12}  >
        <Card sx={{ Width: 400, margin:1 }}>
      <CardActionArea onClick={()=>{
           localStorage.setItem('eventid', event._id);
           navigate('/EventDetails');
      }}>
          <CardMedia
          component="img"
          height="250"
          width="250"
          image={eventPic}
          alt={event.title}
        />   
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {event.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {event.description}
          </Typography>
        </CardContent>
       
      </CardActionArea>
    </Card>
    </Grid>
    </div>
  )
}

export default EventCard