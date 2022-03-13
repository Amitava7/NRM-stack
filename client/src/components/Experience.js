import React from 'react';
import './Experience.scss';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Experience = ({ jobs }) => {
  return (
    <div className='jobs'>
       <div key="skill-a" className='section-heading'> MY EXPERIENCES
      </div>
      <div key="skill-b" className='section-desc'> What I've done
      </div>
      <VerticalTimeline>
        { jobs.map(j =>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#13829B', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #13829B' }}
          date={j.timePeriod}
          iconStyle={{ display: "flex", justifyContent: "center",alignItems: "center" }}
          icon={<img style={{height: "35px"}} alt="icon" src={j.pic}/>}>
          <h3 className="vertical-timeline-element-title">{j.name}</h3>
          <h4 className="vertical-timeline-element-subtitle">{j.position}</h4>
          <ul>
          { j.responsibilities.map(i => <li> {i} </li>)}
          </ul>
        </VerticalTimelineElement>
        )}
      </VerticalTimeline>
    </div>
  );
}

export default React.memo(Experience);