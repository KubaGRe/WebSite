import { TypeAnimation } from 'react-type-animation';
import Particle from './Particle';
import linkedin from './photos/linkedin.png'
import github from './photos/github.png'
import "./home.css"

function Home() {
    

    return (
        
      <div className="Home">
        <Particle/>
            <div className='homeDiv'>
            <TypeAnimation className='homeType'
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