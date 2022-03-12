import React,{ forwardRef } from 'react';
import './Education.scss'
const Education = (forwardRef(({education},ref) => 
    (
      <>
      <div ref={ref} className='section-heading'>
      </div>
      <div id='education' className='Education'>
        <div className='text'>
          <div className='heading'>
            MY EDUCATION
          </div>
          <div className='desc'>
            {education.name}
          </div>
          <div className='desc'>
            {education.Course}
          </div>
          <div className='desc'>
            <ul>
            {education.projects.map((project,i)=>
              <li key={i}>{project}</li>
              )
            }
            </ul>
          </div>
        </div>
        <img alt='background pic' src='/images/education.jpg' style={{width: '50%'}}/>
      </div>
      </>
    )));
export default React.memo(Education);