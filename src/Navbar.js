import { Navbar, Nav, NavDropdown, Container, Form, Button, FormControl } from 'react-bootstrap';
import React from 'react';

const Navbars = () => {
    return ( 
    <Navbar bg="dark" variant = "dark" expand="lg">
    <Container fluid>
      <Navbar.Brand href="/">Justin Le</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/about">About Me</Nav.Link>
          <Nav.Link href="/resume">Resume</Nav.Link>
          <NavDropdown title="Funstuff" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Calculator</NavDropdown.Item>
            <NavDropdown.Item href="#action3">Maplestory calc</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action4">CSS simplifier</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    );
}
 
export default Navbars;