import React,{ Component } from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Header from './Header'
import Intro from './Intro';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';
import Skills from './Skills';
import {about,jobs,education,skills} from './Constants.js'

import './Dash.scss'
const Quote =() => <div className='quote-section'>
<div className='section-desc'> Choose a job you love and you will never have to work a day in your life </div>
<div className='section-desc'> - Confucius</div>
</div>


class Dash extends Component {

  scrollTo(element) {
     scroller.scrollTo(element, {
       duration: 800,
       delay: 0,
       smooth: 'easeInOutQuart'
     })
   }
  render() {
    return (
      <>
      <Header scrollTo={this.scrollTo}/>
      <Element name="home">
        <Intro/>
      </Element>

      <Element name="about">
        <About about={about}/>
      </Element>

      <Element name="jobs">
        <Experience jobs={jobs}/>
      </Element>

      <Element name="education">
        <Education education={education}/>
      </Element>

      <Element name="skills">
        <Skills skills={skills}/>
      </Element>

      <Quote/>

      <Element name="contact">
        <Contact/>
      </Element>
      </>
    );
 }
}
export default Dash;