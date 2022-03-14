import React, { forwardRef, useEffect, useState } from 'react';
import './Skills.scss'

const Skills = forwardRef(({ skills }, ref) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(skills)
  }, [skills]);

  const handleDrag = e => {
    e.preventDefault();
  }
  const handleDrop = e => {
    debugger
    e.preventDefault();
    let dest = e.target.id;
    let source = e.dataTransfer.getData('card-id');
    let newCards = cards.slice(0);
    if (source !== dest) {
      [newCards[source], newCards[dest]] = [newCards[dest], newCards[source]]
      setCards(newCards);
    }
  }
  const handleStart = e => {
    e.dataTransfer.setData('card-id', e.target.id);
  }
  return (
    <>
      <div ref={ref} key="skill-a" className='section-heading'> MY SKILLS
      </div>
      <div key="skill-b" className='section-desc'> What I do
      </div>
      <div key="skill-c" className='skill-grid'>
        {cards.map((skill, i) => (
          <div id={i} draggable={true} onDragOver={handleDrag} onDrop={handleDrop} onDragStart={handleStart}>
            {
              skill.type === "pic" ? <div id={i} key={i + "div"} className='skill ' style={{ backgroundImage: `url(${skill.pic})` }}>
              </div> :
                <div id={i} className='skill skill-text'>
                  <div id={i} key={i + "name"} className='skill-heading'>
                    {skill.name}
                  </div>
                  <div id={i} key={i + "desc"} className='skill-desc'>
                    {skill.desc}
                  </div>
                </div>
            }
          </div>
        ))}
      </div>
    </>
  );
})

export default React.memo(Skills);