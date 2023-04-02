import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'

function NavBar() {
  return (
    <div>
        <Navbar expand="sm"  className="navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#all" className="nav-link-box">Tất cả
            </Nav.Link>
                        <Nav.Link href="#work" className="nav-link-box">Kỹ năng làm việc
            </Nav.Link>
            <Nav.Link href="#child" className="nav-link-box">Nuôi dạy con

            </Nav.Link><Nav.Link href="#manage" className="nav-link-box">Quản trị - lãnh đạo

            </Nav.Link>
            <Nav.Link href="#comic" className="nav-link-box">Truyện dài - Tiểu thuyết


            </Nav.Link>

              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar