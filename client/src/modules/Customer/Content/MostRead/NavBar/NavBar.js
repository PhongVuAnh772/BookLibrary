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
            <Nav.Link href="#all">Tất cả
</Nav.Link>
            <Nav.Link href="#work">Kỹ năng làm việc
</Nav.Link>
<Nav.Link href="#child">Nuôi dạy con

</Nav.Link><Nav.Link href="#manage">Quản trị - lãnh đạo

</Nav.Link>
<Nav.Link href="#comic">Truyện dài - Tiểu thuyết


</Nav.Link>

              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar