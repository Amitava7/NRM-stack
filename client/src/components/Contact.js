import React,{ Component } from 'react';
import './Contact.scss';

class Contact extends Component {
  render() {
    return(
      <div className='contact'>
      <div className='section-heading'> LET'S CONNECT
      </div>
      <div className='section-desc'> amitavamozumder@gmail.com
      </div>
      <div className='section-desc' style={{marginBottom: '100px'}}> 9474327460
      </div>
      <img height="600px" width="100%" src='/images/contact.jpg'/>
    </div>
    );
  }
}

export default Contact ;