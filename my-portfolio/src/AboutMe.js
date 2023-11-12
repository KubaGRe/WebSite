
import myPhoto from "./photos/photo_main.jpg"
import aboutme from "./aboutme.css"
import cv from "./CV.pdf"

function About() {
  return (
    <div className="About" >
      <div class="amcontainer">
        <div class="row">
          <div class="col">
            <img class="myPhoto" src={myPhoto}/>
          </div>
          <div class="col">
            <p class="headline">Education:</p>
            <p class="info">2022 - 2023 Software Development Methods Postgraduate Studies, AGH</p>  
            <p class="info">2020 - 2021 Electrical Engineering MEng, AGH</p> 
            <p class="info">2016 - 2020 Electrical Engineering BE, AGH</p> 
          </div>
          <div class="col">
          <p class="headline">Work experience:</p>
            <p class="info">2021 - Currently : Software Test Engineer, Nokia Solutions and Networks</p>  
            <p class="info">2020 - 2021 : Software Test Engineer - Trainee, Merit Automotive Electronics Systems</p> 
            <p class="info">2019 - 2020 : Vehicle Test Engineer - Trainee, Aptiv </p> 
          </div>
          <div class="col">
            <p class="headline">Tech stack:</p>
            <p class="info">Python, Flask, Java, Spring, REST, Linux, C/C++, HTML, CSS, React, GIT, Docker</p>  
                       
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p class="headline">Personal information:</p>
            <p class="info">Born: 6th of April 1997</p>  
            <p class="info">Contact: jakub.grela.pl@gmail.com</p>            
          </div>
          <div class="col-9">
            <p class="headline">Information:</p>
            <p class="info">In 2016 I started studying Electrical Engineering and decided to continue studying this field of engineering for a master's degree. 
            During these studies I have gained knowledge related to electrical circuits, power electronic, drive ane electromechanical circuits. 
            For my bachelor thesis I have successfully designed program to control position of DC motor using PID controler. For ma Masters Degree I wrote program to control measurement card and created GUI.
            In 2022 I started postgraduate studies - Software Development Methodes - during which I learned how to analyze requirements, design, implement and test programs.  </p>
            <a class="abouta" href={cv} target = "_blank">Download CV</a>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default About;