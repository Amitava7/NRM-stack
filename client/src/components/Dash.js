import React,{ Component } from 'react';
import Intro from './Intro';
import About from './About';

class Dash extends Component {

  render() {
    return (
      <>
      <Intro/>
      <About/>
      </>
    );
 }
}
export default Dash;