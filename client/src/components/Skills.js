import React,{ forwardRef } from 'react';
import './Skills.scss'

const Skills = forwardRef( ({skills}, ref) =>{ 
    return(
      <>
      <div ref={ref} key="skill-a" className='section-heading'> MY SKILLS
      </div>
      <div key="skill-b" className='section-desc'> What I do
      </div>
      <div key="skill-c" className='skill-grid'>
        {skills.map((skill,i) => (
                  <>
                  <div key={i+"div"} id='skills' className='skill ' style={{backgroundImage: `url(${skill.pic})`}}>
                </div>
                <div className='skill skill-text'>
                  <div key={i+"name"} className='skill-heading'>
                    {skill.name}
                  </div>
                  <div key={i+"desc"} className='skill-desc'>
                    {skill.desc}
                  </div>
                </div>
              </>
        ))}
      </div>
      </>
    );
  })

export default React.memo(Skills);