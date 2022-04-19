import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { ButtonGroup } from 'react-bootstrap'
import { ButtonToolbar } from 'react-bootstrap'
import { EventHeading, Button } from './EventStyling'
import dogImg from './EventImages/d1.jpeg'
import Event1 from './event1'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import DelEvent from './DelEvent'

const AEventDetails = (props) => {
  let eventid = localStorage.getItem('eventid')

  const navigate = useNavigate();
  const [showEdit, setShowEdit] = useState(false)
  const editClicked = () => {
    showEdit ?
      setShowEdit(false) :
      setShowEdit(true)
    console.log({ showEdit });
  }
  const eventDetails = useState(props.event)
  const [showDel, setShowDel] = useState('false')
  const [open, setOpen] = useState(false);

  return (
    <div>
      <EventHeading>Event Details</EventHeading>
      <ButtonToolbar aria-label="Action on the events">
        {
          showEdit ?
            <ButtonGroup className="me-2" aria-label="Edit Event">
              <Button onClick={editClicked}>Cancel</Button>
            </ButtonGroup> :
            <ButtonGroup className="me-2" aria-label="Edit Event">
              <Button onClick={editClicked}>Edit</Button>
            </ButtonGroup>

        }

        <DelEvent key={eventid} ></DelEvent>

      </ButtonToolbar>

      <>
        <Container>
          <Row>
            <Col>

              {

                eventDetails.map((event, index) => {
                  console.log(event.title);
                  let url = 'https://ado-pet-server.herokuapp.com/uploads/'
                  const eventPic = !!(event.eImage) ? url + event.eImage : dogImg;
                  return (
                    index === 0 ?

                      <img src={eventPic} alt={event.title} /> :

                      <div></div>
                  )
                })}

            </Col>

            <Col>
              {

                eventDetails.map((event, index) => {
                  console.log(event.title);

                  return (
                    index === 0 ?
                      <Event1 event={event} id={event._id} show={showEdit} /> :
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

export default AEventDetails