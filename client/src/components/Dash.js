import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import Header from './Header'
import Intro from './Intro';
import { about, jobs, skills } from './Constants.js'
import './Dash.scss'

const About = lazy(() => import("./About"));
const Experience = lazy(() => import("./Experience"));
const Contact = lazy(() => import("./Contact"));
const Skills = lazy(() => import("./Skills"));


const Dash = props => {
  const aboutRef = useRef();
  const homeRef = useRef();
  const expRef = useRef();
  const skillRef = useRef();
  const contactRef = useRef();
  const [active, setActive] = useState("intro");
 
  const scrollTo = (num) => {
    let ref;
    switch (num) {
      case 1:
        ref = homeRef;
        break;
      case 2:
        ref = aboutRef;
        break;
      case 3:
        ref = expRef;
        break;
      case 4:
        ref = skillRef;
        break;
      case 5:
        ref = contactRef;
        break;
      default:
        ref = homeRef;
        break;
    }
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }
 
  const callback=(entries) => {
    entries.forEach(e=> e.isIntersecting? setActive(e.target.dataset['name']) : null)
  }
  useEffect(() => {
    fetch("/api/visitor").catch(console.error);
  }, [])

  useEffect(() => {
    let obs = new IntersectionObserver(callback, { threshold: 0.1 })
    if (homeRef.current) obs.observe(homeRef.current);
    if (aboutRef.current) obs.observe(aboutRef.current);
    if (expRef.current) obs.observe(expRef.current);
    if (skillRef.current) obs.observe(skillRef.current);
    if (contactRef.current) obs.observe(contactRef.current);
  }, [homeRef, aboutRef, expRef, skillRef, contactRef])
 

  return (
    <>
          <Header scrollTo={scrollTo} active={active}/>
          <div ref={homeRef} data-name="intro"> <Intro /> </div>
          <Suspense fallback={<h1 style={{ width: "100%" }}>Still Loading…</h1>}>
            <div ref={aboutRef} data-name="about"> <About about={about} /></div>
            <div ref={expRef} data-name="exp"> <Experience jobs={jobs} /> </div>
            <div ref={skillRef} data-name="skill"> <Skills  skills={skills} /> </div>
            <div ref={contactRef} data-name="contact"> <Contact  /> </div>
          </Suspense>
    </>
  );
}
export default Dash;