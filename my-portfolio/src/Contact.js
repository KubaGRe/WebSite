import forest from './photos/forest.jpg'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const EmailContactForm = () => {
  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
 
    emailjs.sendForm('service_wrzabow', 'template_gqiv3wp', form.current, 'qr81KNBgRMn86jQ5b')
      .then((result) => {
          // show the user a success message
      }, (error) => {
          // show the user an error
      });
  };

  return (
    <div className="Contact" style={{height:"100vh", paddingTop:"70px"}}>
      <form ref={form} onSubmit={sendEmail}>
      <div style={{borderRadius:"10%", borderColor:"white", borderWidth:"1px", textAlign:"center", borderStyle:"solid", width:"500px", height:"700px", backgroundImage:`url(${forest})`, backgroundSize:"cover", color:"white", fontSize:"40px", marginLeft:"auto",marginRight:"auto", marginTop:"40px"}}>
        <p>CONTACT ME</p>
        <div class="col" style={{textAlign:"center", fontSize:"10px", padding:"50px", paddingTop:"20px"}}>
          <div class="row-1">
            <label for="from_name" style={{width:"400px", marginTop:"10px", textAlign:"center"}}>
              <p style={{fontSize:"20px"}}>Name</p>
            <input type="text" id="from_name" name="from_name" class="form-control" style={{width:"400px", textAlign:"center"}}></input>
            </label>
          </div>
          <div class="row-1">
            <label for="email" style={{width:"400px", marginTop:"10px", textAlign:"center"}}>
            <p style={{fontSize:"20px"}}>Email</p>
            <input type="text" id="email" name="email" class="form-control" style={{width:"400px", textAlign:"center"}}></input>
            </label>
          </div>
          <div class="row-1">
            <label for="message" style={{width:"400px", marginTop:"10px", textAlign:"center"}}>
            <p style={{fontSize:"20px"}}>Message</p>
            <textarea type="text" id="message" name="message" class="form-control" style={{width:"400px", height:"300px", paddingTop:"0", paddingBottom:"0"}}></textarea>
            </label>
          </div>
          <div class="row-1">
            <input type="submit" class="btn btn-warning" value="Send" />
          </div>          
        </div>        
        </div>
        </form>
    </div>
  );
}

export default EmailContactForm;