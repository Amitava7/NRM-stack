import React,{ Component } from 'react';
import './Contact.scss';

class Contact extends Component {
  render() {
    return(
      <div id='contact' className='contact'>
      <div className='section-heading'> LET'S CONNECT
      </div>
      <div className='mail'>
        <div className='mail-address'><a href="mailto:connect@amitava.info">connect@amitava.info</a>
        </div>
      </div>
    </div>
    );
  }
}

export default Contact ;