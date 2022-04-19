import {useState,useEffect} from 'react'
import axios from 'axios'
import AEventDetails from './AEventDetails'

const EventDetails = () => {
    
    const [event, setEvent] = useState([])
    
    useEffect(()=>{
        sendAPIRequest();
    },[])

    const sendAPIRequest = async()=> {
        let eventid = localStorage.getItem('eventid')
        let strpid = eventid.toString();
        const url = 'https://ado-pet-server.herokuapp.com/api/events/'+eventid
        console.log(url);
        try {
            const response = await axios.get(url)
            setEvent(response.data);
            
        } catch (error) {
            console.log(error)
        }
    }
  return (

    <div>
       <AEventDetails event= {event}  key = {event._id}/> 
    </div>
    
  )
}

export default EventDetails