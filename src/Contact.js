import forest from './photos/forest.jpg'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import "./contact.css"

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
    <div className="Contact">
      <form className='formform' ref={form} onSubmit={sendEmail}>
      <div className='formStyle'>
        <p className='pcontactme'>CONTACT ME</p>
        <div class="col" id='col1'>
          <div class="row-1">
            <label  id='row1' for="from_name" >
              <p className='pcontactme'>Name</p>
            <input type="text" id="from_name" name="from_name" class="form-control"></input>
            </label>
          </div>
          <div class="row-1" id='row1'>
            <label  id='row1' for="email">
            <p className='pcontactme'>Email</p>
            <input type="text" id="email" name="email" class="form-control"></input>
            </label>
          </div>
          <div class="row-1" id='row1'>
            <label  id='row1' for="message">
            <p className='pcontactme'>Message</p>
            <textarea type="text" id="message" name="message" class="form-control" ></textarea>
            </label>
          </div>
          <div class="row-1">
            <input id='buttonsubmit' type="submit" class="btn btn-warning" value="Send" />
          </div>          
        </div>        
        </div>
        </form>
    </div>
  );
}

export default EmailContactForm;