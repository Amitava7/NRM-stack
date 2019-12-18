import React,{ Component } from 'react';
import Intro from './Intro';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';
import Skills from './Skills';

import {about,jobs,education,skills} from './Constants.js'
class Dash extends Component {

  render() {
    return (
      <>
      <Intro/>
      <About about={about}/>
      <Experience jobs={jobs}/>
      <Education education={education}/>
      <Skills skills={skills}/>
      <Contact/>
      </>
    );
 }
}
export default Dash;