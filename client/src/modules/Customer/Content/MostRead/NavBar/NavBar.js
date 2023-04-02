import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import {NavLink,createBrowserRouter,createRoutesFromElements,RouterProvider,Outlet} from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <Navbar expand="sm"  className="navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/all" className="nav-link-box">Tất cả
            </NavLink>
                        <NavLink to="/work" className="nav-link-box">Kỹ năng làm việc
            </NavLink>
            <NavLink to="/child" className="nav-link-box">Nuôi dạy con

            </NavLink><NavLink to="/manage" className="nav-link-box">Quản trị - lãnh đạo

            </NavLink>
            <NavLink to="/comic" className="nav-link-box">Truyện dài - Tiểu thuyết


            </NavLink>

              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        {/* <div className="content"><Outlet/></div> */}
    </div>
  ) 
}

export default NavBar