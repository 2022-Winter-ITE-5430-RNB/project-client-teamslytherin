import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


const Header = () => {
  return (
    
    <Navbar bg="light"  expand="lg" fixed="top" >
    <Container >
    
    <Nav className='header'>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About Us</Nav.Link>
      <Nav.Link href="#contact">Contact Us</Nav.Link>   
      <Nav.Link href="#FAQ">FAQ</Nav.Link> 
      
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search Pets"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header