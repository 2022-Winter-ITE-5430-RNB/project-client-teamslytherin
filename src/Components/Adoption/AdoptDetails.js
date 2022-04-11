import React from 'react'
import Image from 'react-bootstrap/Image'
import { Carousel, Col, Container, Row } from 'react-bootstrap'

import { ButtonGroup } from 'react-bootstrap'
import { ButtonToolbar } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import Fade from 'react-bootstrap/Fade'
//import { Alert } from 'bootstrap'

import { FAQHeading, Button, EachFAQ, FAQSection } from '../FAQ/FaqStyling'
import pupimg1 from './images/puppy2.jpg'
import pupimg2 from './images/golden-retriever-mix-puppies.jpg'
import pupimg3 from './images/GoldenPuppy185743593.jpg'
import Puppy1 from './puppy1'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import DeletePet from './DeletePet'
import PetDetails from './PetDetails'

const AdoptDetails = (props) => {
  let petid = localStorage.getItem('petid')
   
  const navigate = useNavigate();
  const [showEdit, setShowEdit] = useState(false)
  const editClicked = () => {
    showEdit ?
      setShowEdit(false) :
      setShowEdit(true)
    console.log({ showEdit });
  }
  const petDetails = useState(props.pet)
  const [showDel,setShowDel]=useState('false')
  const [open, setOpen] = useState(false);
  return (
    <div>
      <FAQHeading>AdoptDetails</FAQHeading>
      <ButtonToolbar aria-label="Action on the pets">
        {
          showEdit ?
            <></> :
            <ButtonGroup className="me-2" aria-label="Edit Pet">
              <Button onClick={editClicked}>Edit</Button>
            </ButtonGroup>
        }

        <DeletePet key ={petid} ></DeletePet>
        
        <ButtonGroup aria-label="Request">
          <Button onClick={() => navigate('/Rehome')} >Request</Button>
        </ButtonGroup>
      </ButtonToolbar>
      


      <>
      <Container>
          <Row>
            <Col>
              <Carousel>
                <Carousel.Item>
                  <img src={pupimg1} className='img-css' alt="puppy1" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={pupimg2} className='img-css' alt="puppy2" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={pupimg3} className='img-css' alt="puppy3" />
                </Carousel.Item>
              </Carousel>


            </Col>
            <Col>
              {
               
                petDetails.map((pet,index) => {
                  console.log(pet.name);
                  
                  return(
                    index===0?                
                    <Puppy1 pet={pet} id={pet._id} show={showEdit}  />:
                    <div></div>
                    
                  )
                  
                })}
            </Col>
          </Row>
        </Container>

      </>
    </div>
  )

}

export default AdoptDetails