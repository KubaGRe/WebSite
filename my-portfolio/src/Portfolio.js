import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import port_back from './photos/port_back.jpg'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./portfolio.css"
import project1 from './photos/project1.jpg'

function Portfolio() {
  return (
    <div className="Portfolio" style={{height:"100vh",backgroundImage:`url(${port_back})`,backgroundSize:"cover", paddingTop:"70px"}}>
      <Popup trigger={<button style={{marginLeft:"100px", marginTop:"70px", color:"white", backgroundImage:`url(${project1})`}}><span>Raport Generator</span></button>} position="right center" style={{zIndex:"4"}}>
        <div style={{zIndex:"4", color:"black"}}>
          <h2>
            Raport Generator
          </h2>
          <p>
            This project was created as a final job on postgraduate studies. We worked in group to write a program which takes input files (.xml) and generates raports.
          </p>
          <p>Tech stack: Java, Git</p>
          <a style={{textDecoration:"none"}} href='https://github.com/SylwiaMWO/PracowniaProjektowa'>GIT link</a>
        </div>
      </Popup>
    </div>
  );
}



export default Portfolio;