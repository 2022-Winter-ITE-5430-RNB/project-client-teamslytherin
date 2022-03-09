import React from 'react'
import { Button, InputGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Dropdown } from 'bootstrap'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'


const AdoptRequest = () => {
  return (
    <>

      <Container>
        <Row className="justify-content-md-center ">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="uid">Date of Birth</InputGroup.Text>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Form.Select aria-label="Default select example">
            <option>Pet Type</option>
            <option value="canine">Canine</option>
            <option value="bird">Bird</option>
            <option value="other">Other(Domestic Animal)</option>
          </Form.Select>
          <p></p>
          <InputGroup className="mb-3">
            <InputGroup.Text id="breed">Breed</InputGroup.Text>
            <FormControl
              placeholder="Breed"
              aria-label="Breed"
              aria-describedby="Breed"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="dob">Date of Birth</InputGroup.Text>
            <FormControl
              placeholder="DOB"
              aria-label="DOB"
              aria-describedby="DOB"
            />
          </InputGroup>
          <InputGroup>
            <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
            <InputGroup.Text>$</InputGroup.Text>
            <InputGroup.Text>0.00</InputGroup.Text>
          </InputGroup>
          <p></p>
          <InputGroup>
            <InputGroup.Text>Vaccination Details</InputGroup.Text>
            <FormControl as="textarea" aria-label="Vaccination Details" />
          </InputGroup>
          <p></p>
          <Button variant="dark">Request</Button>
        </Row>
      </Container>
    </>
  )
}

export default AdoptRequest