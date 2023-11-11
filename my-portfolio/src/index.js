import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home'
import About from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar bg="dark" data-bs-theme="dark" sticky='top'>
      <Nav  className="ml-auto">
        <Container>          
          <Nav>
            <Nav.Link><Link activeClass="active" smooth={true} spy={true} duration={0} to="home">Home</Link></Nav.Link>
            <Nav.Link><Link activeClass="active" smooth={true} spy={true} duration={0} to="about">About me</Link></Nav.Link>
            <Nav.Link><Link activeClass="active" smooth={true} spy={true} duration={0} to="portfolio">Portfolio</Link></Nav.Link>
            <Nav.Link><Link activeClass="active" smooth={true} spy={true} duration={0} to="contact">Contact me</Link></Nav.Link>   
          </Nav>
        </Container>
      </Nav>
        
      </Navbar>
    <div style={{marginTop:'-70px'}}>
      <section id='home'>
        <Home />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='portfolio'>
        <Portfolio />
      </section>
      <section id='contact'>
        <Contact />
      </section>  
    </div>
      
    
  </React.StrictMode>
);

