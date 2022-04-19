import React, { useEffect, useState } from "react";
import { RaiseSection, RHead,RHead2, Title, Description, EachStep } from './RaiseStyling'
import { Container } from "react-bootstrap";
import axios from 'axios';

const Raises = () => {

  const [raises, setRaises] = useState([]);

  useEffect(() => {
      sendApiRequest();
  }, []);

  const sendApiRequest = async () => {
      try {
          const response = await axios.get(
              'http://localhost:5000/api/raises'
          );
          setRaises(response.data);
          console.log(response);
         // localStorage.setItem('token', response.data.token);
      } catch (err) {
          console.log(err);
      }
  };

   return (
      <RaiseSection>
          <RHead> Important Steps that helps in raising a Pet </RHead>
          <RHead2> It is important to know how the animal will react at home, on the street and even with other people, we must also now what to do about it. Always with patience and lots of affection.</RHead2>
          
          <Container>
          {  raises.map((raise) => {
              return(
                <EachStep>
                  <Title>  {raise.title}  </Title>
                  <Description>  {raise.description}  </Description>                               
                                                  
               </EachStep> 

              )
            })
          }
         </Container>     
        
      </RaiseSection>
  )
}

export default Raises;








