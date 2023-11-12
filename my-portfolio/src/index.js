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
import linkedin from './photos/linkedin.png'
import github from './photos/github.png'
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
            <Nav.Link><Link activeClass="active" smooth={true} spy={true} duration={0} to="portfolio">Projects</Link></Nav.Link>
            <Nav.Link><Link activeClass="active" smooth={true} spy={true} duration={0} to="contact">Contact me</Link></Nav.Link>   
          </Nav>
        </Container>
        
      </Nav>   
      <div style={{display:"flex" , flexDirection:"row", position:"absolute", marginTop:"180vh"}}>
                <a href='https://www.linkedin.com/in/jakub-grela-6a5676200/' target='_blank'><img src={linkedin} style={{width:"60px", height:"60px", borderStyle:"solid", borderWidth:"5px", margin:"10px"}}/></a>
                <a href='https://github.com/KubaGRe' target='_blank'><img src={github} style={{width:"60px", height:"60px", borderStyle:"solid", borderWidth:"5px", margin:"10px"}}/></a>
      </div>            
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

