import React,{ useState } from 'react';
import './Contact.scss';

const Contact = props => {
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");
  const handleChange = e =>{
    if(e.target.name === "mail")
      setMail(e.target.value);
      else 
      setMsg(e.target.value);
  }
  const sendMessage = e =>{
    fetch('/api/message', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({mail, msg}),
    }).then(res=> {
      setMsg("");
      setMail("");
    }).catch(console.error);
  }
return(
      <div id='contact' className='contact'>
      <div className='chair'></div>
      <div className='connect'>
      <div className='social'>
        <img alt="linkedin" src="/images/linkin.png"/>
        or 
        <a href="mailto:connect@amitava.info">connect@amitava.info</a>
      </div> 
      <div class="form__group field">
          <input type="input" class="form__field" placeholder="mail" name="mail" id='mail' required onChange={handleChange} value={mail}/>
          <label for="mail" class="form__label">Email</label>
          </div>
          <div class="form__group field">    
          <textarea class="form__field" placeholder="message" name="message" id='message' onChange={handleChange} value={msg}></textarea>
          <label for="message" class="form__label">Message</label>
        </div>
        <button class="pushable" onClick={sendMessage}>
            <span class="front">
              Send
            </span>
          </button>
      </div>
      </div>
    );
}

export default Contact ;