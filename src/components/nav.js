import React from "react";
import { Link } from 'react-router-dom';
import '../styles/nav.css';
import { Navbar, Nav } from "react-bootstrap";


export default function Navigation() {

    const Navstyles = {
        color: 'white',
        textDecoration: 'none'
    };

    return (
        <Navbar collapseOnSelect expand="lg" className="sticky-top nav-list">
            <Link to="/">
                <Navbar.Brand className="ml-5" style={Navstyles}><h2><i class="fas fa-ticket-alt"></i> Filmica</h2></Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar-collapse">
                <Nav className="ml-auto">
                    <Nav.Link className="mr-5"><Link style={Navstyles} to="/peliculas">Peliculas</Link></Nav.Link>
                    <Nav.Link className="mr-5"><Link style={Navstyles} to="/liked">Peliculas que te gustan</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

{/* <ul className="nav-list">
                <Link style={Navstyles} to="/">
                    <li><h2><i class="fas fa-ticket-alt"></i> Filmica</h2></li>
                </Link>
                <span></span>
                <span></span>
                <Link style={Navstyles} to="/peliculas">
                    <li>Peliculas</li>
                </Link>
                <Link style={Navstyles} to="/liked">
                    <li>Peliculas que te gustan</li>
                </Link>
            </ul> */}