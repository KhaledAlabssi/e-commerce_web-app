import React from "react";

import { Container, Navbar, Nav } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  return (
    <div>
      <header>
        <Navbar bg="primary" variant="light" expand="lg" collapseOnSelect>
          <Container>
            {/* <LinkContainer exact to="/"> */}
              <Navbar.Brand>K-A E-commerce</Navbar.Brand>
            {/* </LinkContainer> */}

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                {/* <Nav.Link href="/cart">Cart</Nav.Link>
                <Nav.Link href="/login">Sign In</Nav.Link> */}
              </Nav>
              <Nav>
                {/* <Link to='/cart'><i className='fas fa-shopping-cart'></i> Cart</Link> */}
                <Nav.Link href='/cart'>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>

                <Nav.Link href='/login'>
                  <i className="fas fa-user"></i> Sign In
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}
