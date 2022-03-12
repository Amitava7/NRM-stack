import React,{ useState, forwardRef } from 'react';
import './Contact.scss';

const Contact = forwardRef ((props, ref) => {
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
      <div ref={ref} id='contact' className='contact'>
      <div className='chair'></div>
      <div className='connect'>
      <div className='social'>
      <a href="https://www.linkedin.com/in/amitava-mozumder/" target="_blank" rel="noopener noreferrer"><img alt="linkedin" title= "LinkedIn" src="/images/linkin.png"/></a>
        <a href="mailto:connect@amitava.info"><img alt="gmail"  title= "Gmail" src="/images/gmail.png"/></a>
        <a href="mailto:connect@amitava.info"><img alt="mymail" title= "Private mail" src="/images/mymail.png"/></a>
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
})

export default Contact ;