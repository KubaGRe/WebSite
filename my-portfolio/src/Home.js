import { TypeAnimation } from 'react-type-animation';
import Particle from './Particle';
import linkedin from './photos/linkedin.png'
import github from './photos/github.png'

function Home() {
    

    return (
        
      <div className="About" style={{height:"100vh", paddingTop:"70px"}}>
        <Particle/>
            <div style={{textAlign:"center", paddingTop:"200px",color:"white"}}>
            <TypeAnimation style={{ fontSize: '4em', zIndex:1, textAlign:"center" }}
                sequence={[
                    'Hello my name is Jakub, welcome to my website...',                
                ]}
                speed={50}
                
            />
            </div>              
      </div>
    );
  }
  
  export default Home;