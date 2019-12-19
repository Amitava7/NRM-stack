import React,{ Component } from 'react';
import './Education.scss'
class Education extends Component {
  render() {
    let {education}= this.props;
    return(
      <>
      <div className='section-heading'>
      </div>
      <div className='Education'>
        <div className='text'>
          <div className='heading'>
            MY EDUCATION
          </div>
          <div className='desc'>
            {education.name}
            {education.Course}
            <ul>
            {education.projects.map((project)=>
              <li>{project}</li>
              )
            }
            </ul>
          </div>
        </div>
        <img src='/images/education.jpg' style={{width: '50%'}}/>
      </div>
      </>
    );
  }
}

export default Education;