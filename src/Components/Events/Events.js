import React from 'react';
import { Link } from 'react-router-dom';
import { EventStylediv, First, Second, Third, Fourth } from './EventStyling'
import { Container  } from 'react-bootstrap'

import cat2 from './EventImages/c2.jpg'

import dog1 from './EventImages/d1.jpeg'
import dog4 from './EventImages/d4.jpg'
import aa from './EventImages/aa.jpg'



const Events = () => {
  return (
  <EventStylediv>
  <h1> Meet our Pets at a virtual adoption event</h1>
  
    
  <p>  The best way to meet our Pets is to attend our monthly adoption events. Our
        upcoming schedule is located below. All pet events are listed below.
       <br /><br />
      If you are planning to adopt at an event, you can start the process in advance 
      or on site. To start in advance, fill out an application form and follow the instructions
       on the form to submit. Someone from our team will then get you started on our adoption 
       process! You can fill one out onsite, but if you have current or past pets, please
       bring their vet records and if you are renting, please bring proof you can have pets
       as well as documentation that the specific pet you're interested in will be permitted. 
       We post the dogs and cats attending our events on Facebook at 6pm the day before, but 
       because these lists are subject to change, it is always best to confirm an animal's 
       attendance and event adoption status with their adoption coordinator (email listed in their bio). 
         </p>
         <br/><br/>

       <Container>
           <First>
           <h2>Dogs Events </h2>
           <h3> May 07,2022 at 11:00 AM - 3:00 PM</h3>
           <img src={dog4} className='img' alt="d4" height="244" width="430"/>
           
           </First>
           
           <Second>
           <h2>Coolest Cats Events </h2>
           <h3>June 11,2022 at 11:00 AM - 3:00 PM</h3>
           <img src={cat2} className='img' alt="c2" height="244" widht="460"/>
           </Second>
           <Third>
           <h2>Dog Walk Event </h2>
           <h3>July 09,2022  11:00 AM --- 3:00 PM</h3>
           <img src={dog1} className='img' alt="d1" height="244" widht="460"/>
           </Third>
           <Fourth>
           <h2>Sheep Dogs Event </h2>
           <h3>August 13,2022  11:00 AM --- 4:00 PM</h3>
           <img src={aa} className='img' alt="sh" height="244" widht="460"/>
           </Fourth>

       <h2>If you want to book an Event  <Link to='Contact'>Contact Us</Link>  </h2>

       
        
       </Container>
        

</EventStylediv>
)
};



export default Events;
