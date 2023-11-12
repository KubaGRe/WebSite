import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import port_back from './photos/port_back.jpg'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./portfolio.css"
import project1 from './photos/project1.jpg'

function Portfolio() {
  return (
    <div className="Portfolio">
      <Popup trigger={<button ><span>Raport Generator</span></button>} position="right center" style={{zIndex:"4"}}>
        <div className='popupWindow'>
          <h2 className='h2popup'>
            Raport Generator
          </h2>
          <p className='ppopup'>
            This project was created as a final job on postgraduate studies. We worked in group to write a program which takes input files (.xml) and generates raports.
          </p>
          <p className='ppopup'>Tech stack: Java, Git</p>
          <a className='link' href='https://github.com/SylwiaMWO/PracowniaProjektowa'>GIT link</a>
        </div>
      </Popup>
    </div>
  );
}



export default Portfolio;