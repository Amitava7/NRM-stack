import React,{ Component } from 'react';
import './Skills.scss'

class Skills extends Component {
  render() {
    let {skills} = this.props;
    let pics =['/images/skill1.jpg','/images/skill2.jpg','/images/skill3.jpg'];
    let items = [];
    for(let i=0;i<3;i++){
      items.push(
        <>
        <div key={i+"div"} id='skills' className='skill ' style={{backgroundImage: `url(${pics[i]})`}}>
      </div>
      <div className='skill skill-text'>
        <div key={i+"name"} className='skill-heading'>
          {skills[i].name}
        </div>
        <div key={i+"desc"} className='skill-desc'>
          {skills[i].desc}
        </div>
      </div>
    </>)
}
    return(
      <>
      <div key="skill-a" className='section-heading'> MY SKILLS
      </div>
      <div key="skill-b" className='section-desc'> What I do
      </div>
      <div key="skill-c" className='skill-grid'>
        {items}
      </div>
      </>
    );
  }
}

export default Skills;