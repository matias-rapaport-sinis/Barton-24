"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';


function NavbarComponent() {
  return (
    <Navbar expand="lg" className='bg-dark-barton' variant='dark' sticky="top">
      <Container >
        <Navbar.Brand href="#home">
          <Image
            src="/logo-barton.png"
            width="206"
            height="86"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav "  />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
          <Nav >
            <Nav.Link href="#home" classNmae="navbar-text">Casos de exito</Nav.Link>
            <NavDropdown title="Productos"  id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Aplicaciones" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home" classNmae="navbar-text">Documentacion</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent;