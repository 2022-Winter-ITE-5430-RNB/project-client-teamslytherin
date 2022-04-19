import {useState,useEffect} from 'react'
import axios from 'axios'
import AdoptDetails from './AdoptDetails'


const PetDetails = () => {
    

    const [pet, setPet] = useState([])
    
    useEffect(()=>{
        sendAPIRequest();
    },[])

    const sendAPIRequest = async()=> {
        let petid = localStorage.getItem('petid')
        let strpid = petid.toString();
        const url = 'http://localhost:5000/api/pets/'+petid
        console.log(url);
        try {
            const response = await axios.get(url)
            setPet(response.data);
            
        } catch (error) {
            console.log(error)
        }
    }
  return (

    <div>

<AdoptDetails pet= {pet}  key = {pet._id}/>

    </div>
    
  )
}

export default PetDetails