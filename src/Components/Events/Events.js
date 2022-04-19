import React from 'react'
import { Head, EventStylediv, Image } from './EventStyling'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useState,useEffect} from 'react'
import axios from 'axios'
import EventCard from './EventCard';


const Events = () => {
   
const navigate = useNavigate();
const [events, setEvents] = useState([])
  
useEffect(()=>{
    sendAPIRequest();
},[]);

const sendAPIRequest = async()=> {
    let eventid = localStorage.getItem('eventid')
    let strpid = eventid.toString();
    const url = 'http://localhost:5000/api/events/'
    console.log(url);
    try {
        const response = await axios.get(url)
        setEvents(response.data);
       console.log(response.data)
        
    } catch (error) {
        console.log(error)
    }
}



  return (
    <>
  <EventStylediv>
  <Head> Meet our Pets at a virtual adoption event</Head>
  <br /><br/>
    
  <h3> The best way to meet our Pets is to attend our monthly adoption events. Our
        upcoming schedule is located below. All pet events are listed below.
       <br /><br/>
      If you are planning to adopt at an event, you can start the process in advance 
      or on site. To start in advance, fill out an application form and follow the instructions
       on the form to submit. Someone from our team will then get you started on our adoption 
       process! You can fill one out onsite, but if you have current or past pets, please
       bring their vet records and if you are renting, please bring proof you can have pets
       as well as documentation that the specific pet you're interested in will be permitted. 
       We post the dogs and cats attending our events on Facebook at 6pm the day before, but 
       because these lists are subject to change, it is always best to confirm an animal's 
       attendance and event adoption status with their adoption coordinator (email listed in their bio)
   </h3>   
    <br /><br />
           
       <div className='container'>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container >
      {events.map((event)=>{
        return(
          <EventCard event ={event} key ={event._id}/>
        )
      })}
      </Grid>
    </Box>

    </div>     

</EventStylediv>
 </>
)
};

export default Events;
