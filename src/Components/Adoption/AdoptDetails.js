import React from 'react'
import Image from 'react-bootstrap/Image'
import { Carousel, Col, Container, Row } from 'react-bootstrap'

import { ButtonGroup } from 'react-bootstrap'
import { ButtonToolbar } from 'react-bootstrap'

import { FAQHeading, Button, EachFAQ, FAQSection } from '../FAQ/FaqStyling'
import pupimg1 from './images/puppy2.jpg'
import pupimg2 from './images/golden-retriever-mix-puppies.jpg'
import pupimg3 from './images/GoldenPuppy185743593.jpg'
import Puppy1 from './puppy1'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

const AdoptDetails = () => {
  const navigate = useNavigate();
  const [showEdit, setShowEdit] = useState(false)
  const editClicked = () => {
    showEdit ?
      setShowEdit(false) :
      setShowEdit(true)
    console.log({ showEdit });
  }
  const petDetails = [
    {
      id: 1,
      name: "Cutie",
      description: "A nice sweet little puppy",
      dob: "10/01/2022",
      breed: "Golden-retriever",
      petType: "Canine",
      amount: 300,
      vaccine: "flu shot- 01.02.2022"
    }
  ]
  return (
    <div>
      <FAQHeading>AdoptDetails</FAQHeading>
      <ButtonToolbar aria-label="Action on the pets">
        {
          showEdit ?
            <ButtonGroup className="me-2" aria-label="Edit Pet">
              <Button onClick={editClicked}>Save</Button>
            </ButtonGroup> :
            <ButtonGroup className="me-2" aria-label="Edit Pet">
              <Button onClick={editClicked}>Edit</Button>
            </ButtonGroup>
        }

        <ButtonGroup className="me-2" aria-label="Delete group">
          <Button>Delete</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Request">
          <Button onClick={(breed = "golden", key = "1") => navigate('/Create')} >Request</Button>
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
                petDetails.map((pet) => {
                  console.log(pet.name);
                  return (

                    <Puppy1 pet={pet} show={showEdit} id={pet.id.toString()} />

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