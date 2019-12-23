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
              <span class="article-number">Citrix R&D India </span>
              <p>Software Engineer 2 </p>
            </div>
          </div>
          <div class="content-right-container">
            <div class="content-right">
              <ul>
                <li>Worked as a full-stack developer in Rightsignature: a web and mobile e-signature service.Go-to choice for thousands of SMB and Large Enterprise accounts.</li>
                <li>Worked between two versions of the product.Facilitating the migrations of users between them.</li>
                <li>Worked with product security team to find and fix security vulnerabilities in the product.</li>
                <li>Implemented RBAC(Roll Based Access Control) for easy integration with Enterprise Customers.</li>
                <li>Integrated the product with other in house SAAS products for seamless workspace experience.</li>
                <li>Worked in custom workflow allows users to create customized workflows that include multiple triggers and actions.</li>
              </ul>
            </div>
          </div>
          <div class="meta-date">
            <span class="date">Jul</span>
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
                <li>Worked as a React developer to create a Quiz/poll creation tools that assists editors in creating and embedding dynamic interactive content on their web pages.</li>
                <li>Migrated all the APIs for above project from Java to NodeJs.</li>
                <li>Developed a polling-based Live Blogging app to provide coverage of an live event on a website. With user account control and support for all external media and social networking links.</li>
                <li>Created a Ratings and Review tool to enable viewers of a particular article, to leave their rating and reviews on that article page. With support for content moderation.</li>
                <li>Captured and tracked user information and developed a tool for the editors to represent the analytics graphically and interact with them.</li>
              </ul>
            </div>
          </div>
          <div class="meta-date">
            <span class="date">Jun</span>
            <span class="month">2016</span>
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