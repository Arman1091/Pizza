
import React from 'react'
import { Navbar, Nav,Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {MdLocalOffer} from 'react-icons/md';

const topBar = () => {
    return (
      <>
        <Navbar bg ="dark" variant='dark' expand="lg">
            <Container fluid>
                  <h6>
                     <MdLocalOffer className='test-worning'>
                         Livraison gratuite a domicile pour tout commende superieure a 50e
                     </MdLocalOffer>
                  </h6>
                  <Nav className='ms-auto'>
                    <LinkContainer to="/">
                      <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="about">
                      <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="Contact">
                      <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="CGV">
                      <Nav.Link>CGV</Nav.Link>
                    </LinkContainer>
  
                  </Nav>
            </Container>
        </Navbar>
      </>
    )
  };
  export default topBar;