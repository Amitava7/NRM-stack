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
        <div id='skills' className='skill ' style={{backgroundImage: `url(${pics[i]})`}}>
      </div>
      <div className='skill skill-text'>
        <div className='skill-heading'>
          {skills[i].name}
        </div>
        <div className='skill-desc'>
          {skills[i].desc}
        </div>
      </div>
    </>)
}
    return(
      <>
      <div className='section-heading'> MY SKILLS
      </div>
      <div className='section-desc'> What I do
      </div>
      <div className='skill-grid'>
        {items}
      </div>
      </>
    );
  }
}

export default Skills;