import {useState,useEffect} from 'react'
import axios from 'axios'
import AdoptDetails from './AdoptDetails'

const PetDetails = () => {
    const [pet, setPet] = useState([])

    useEffect(()=>{
        sendAPIRequest();
    },[])

    const sendAPIRequest = async()=> {
        try {
            const response = await axios.get('http://localhost:5000/api/pets/624330bbf946edf4e133f8b0')
            setPet(response.data);
            
        } catch (error) {
            console.log(error)
        }
    }
  return (

    <div>
    <AdoptDetails pet= {pet} key = {pet._id}/>
    </div>
  )
}

export default PetDetails