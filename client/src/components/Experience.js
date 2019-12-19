import React,{ Component } from 'react';
import './Experience.scss';

class Experience extends Component {
  render() {
    let jobs = this.props.jobs
    return(
      <>
    <div id='experience' className='section-heading'> MY EXPERIENCE
    </div>
    <div className='section-desc'> Position and Resposibilities
    </div>
    {
           jobs.map(function(job){
             return <div className='job'>
               <div className='name'>{job.name}</div>
               <div className='position'>{job.position}</div>
               <div className='time-period'> {job.timePeriod}</div>
               <div className='resposibility'>
                 {
                   job.resposibilities.map(function(resposibility){
                    return <li>{resposibility}</li>
                   })
                 }
               </div>
             </div>
           })
    }
    </>
    );
  }
}

export default Experience;