import React, {Component} from "react";
import {Navbar,Container, Nav, } from "react-bootstrap";
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
import feature from '../pages/feature';
import gallery from '../pages/gallery';
import video from '../pages/video';
import prices from '../pages/prices';
import testimonalias from '../pages/testimonalias';
import download from '../pages/download';
import contact from '../pages/contact';
import "./style.css";
export default class Header extends Component{
    render() {
        return(
        <>
         <Router>
            <Routes>
              <Route  path="/FEATURE" element={feature}/>
              <Route  path="/GALLERY" Component={gallery}/>
              <Route  path="/VIDEO" Component={video}/>
              <Route  path="/PRICES" Component={prices}/>
              <Route  path="/TESTIMONALIAS" Component={testimonalias}/>
              <Route  path="/DOWNLOAD" Component={download}/>
              <Route  path="/CONTACT" Component={contact}/>
            </Routes>
         </Router>
          <div className="nav">
         <Navbar collapseOnSelect expanded="md">
            <Container>
          <Navbar.Brand href="/">
            <p className="logo">ba<em>zinger</em></p>
          </Navbar.Brand>
          <Navbar.Toggle className="toggle" aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar">
            <Nav.Link href="/">HOME </Nav.Link>
            <Nav.Link href="/FEATURE">FEATURE </Nav.Link>
            <Nav.Link href="/GALLERY"> GALLERY</Nav.Link>
            <Nav.Link href="/VIDEO"> VIDEO</Nav.Link>
            <Nav.Link href="/PRICES">PRICES </Nav.Link>
            <Nav.Link href="/TESTIMONALIAS"> TESTIMONALIAS</Nav.Link>
            <Nav.Link href="/DOWNLOAD "> DOWNLOAD </Nav.Link>
            <Nav.Link href="/CONTACT"> CONTACT</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          </Container>
         </Navbar>   
         </div>
         </>
        );

    }
}