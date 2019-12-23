import React,{ Component } from 'react';
import './Experience.scss';

class Experience extends Component {
  render() {
    let jobs = this.props.jobs
    return(
      <>
    <div id='experience' className='section-heading'> MY EXPERIENCE
    </div>
    <section id="conference-timeline">
      <div class="timeline-start">Present</div>
      <div class="conference-center-line"></div>
      <div class="conference-timeline-content">
        <div class="timeline-article">
          <div class="content-left-container">
            <div class="content-left">
              <span class="article-number">Citrix R & D India </span>
              <p>Software Engineer 2 </p>
            </div>
          </div>
          <div class="content-right-container">
            <div class="content-right">
              <ul>
                <li>jgytfrt uyhvdrt uihgcds hbvy</li>
                <li>jgytfrt uyhvdrt uihgcds hbvy</li>
                <li>jgytfrt uyhvdrt uihgcds hbvy</li>
                <li>jgytfrt uyhvdrt uihgcds hbvy</li>
                <li>jgytfrt uyhvdrt uihgcds hbvy</li>
              </ul>
            </div>
          </div>
          <div class="meta-date">
            <span class="date">06</span>
            <span class="month">2018</span>
          </div>
        </div>
        <div class="timeline-article">
          <div class="content-left-container">
            <div class="content-left">
              <span class="article-number">Time Inc (Meredith Corp)</span>
              <p>Software Development Engineer 1 </p>
            </div>
          </div>
          <div class="content-right-container">
            <div class="content-right">
              <ul>
                <li>jgytfrt uyhvdrt uihgcds hbvy</li>
                <li>jgytfrt uyhvdrt uihgcds hbvy</li>
                <li>jgytfrt uyhvdrt uihgcds hbvy</li>
                <li>jgytfrt uyhvdrt uihgcds hbvy</li>
                <li>jgytfrt uyhvdrt uihgcds hbvy</li>
              </ul>
            </div>
          </div>
          <div class="meta-date">
            <span class="date">18</span>
            <span class="month">APR</span>
          </div>
        </div>
      </div>
      <div class="timeline-end"></div>
    </section>
    </>
    );
  }
}

export default Experience;