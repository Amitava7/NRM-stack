import React,{ Component } from 'react';
import './Intro.scss';
import Typist from 'react-typist';

class Intro extends Component {
  render() {
    return(
      <div class='bgpic'>
        <Typist>
          <span class='greeting'> Hi, This is Amitava! </span>
          <span class='scroll'> Scroll down to exploer <Typist.Backspace count={3} delay={400} />re more... </span>
        </Typist>
      </div>
    );
  }
}

export default Intro;