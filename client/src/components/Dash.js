import React,{ Component } from 'react';
import Intro from './Intro';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';
import Skills from './Skills';
import {about,jobs,education,skills} from './Constants.js'
import './Dash.scss'
const Quote =() => <div className='quote-section'>
<div className='section-desc'> "Choose a job you love and you will never have to work a day in your life" </div>
<div className='section-desc'> - Confucius</div>
</div>


class Dash extends Component {

  render() {
    return (
      <>
      <Intro/>
      <About about={about}/>
      <Experience jobs={jobs}/>
      <Education education={education}/>
      <Skills skills={skills}/>
      <Quote/>
      <Contact/>
      </>
    );
 }
}
export default Dash;