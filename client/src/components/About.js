import React,{ forwardRef} from 'react';
import './About.scss'

const About = forwardRef((props, ref) => {
    return(
      <div id='about' className='about' ref={ref}>
      <div className='text'>
        <div className='heading'>
          ABOUT
        </div>
        <div className='desc'>
          As a natural born go-getter, my passion has continuously driven me to expand my knowledge, experience, and relationships. With a strong background and diverse skill set, I’m confident in the creative ideas and successful solutions I bring to the table. Keep exploring my site to learn more information about me, and reach out directly with any questions.
        </div>
      </div>
      <div className='pic' ></div>
      </div>
    );
  });

export default About;