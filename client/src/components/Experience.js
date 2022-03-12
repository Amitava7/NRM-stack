import React, { forwardRef, useState } from 'react';
import './Experience.scss';
import HorizontalTimeline from 'react-horizontal-timeline';

const VALUES = ["2016", "2018", "2020"];
const Experience = forwardRef( ({jobs}, ref) =>{
    const [value, setValue] = useState(0);
    return (
      <div ref={ref} className='jobs'>
        <div id='experience' className='section-heading'> MY EXPERIENCES
        </div>
        <div className='exp-timeline'>
          <div style={{ width: '60%', height: '100px', margin: '0 auto' }}>
            <HorizontalTimeline
              index={value}
              indexClick={(index) => {
                setValue(index);
              }}
              linePadding={200}
              minEventPadding={100}
              values={VALUES}
              isOpenBeginning={true}
            />
          </div>
          <div className='text-center'>
            <div className='exp'>
              <div className='title'>{jobs[value].name}</div>
              <div className='desg'>{jobs[value].position}</div>
              <ul>
                {
                  jobs[value].responsibilities.map((e, i) => <li key={"skills" + i}>{e}</li>)
                }

              </ul>
            </div>
          </div>
        </div>

      </div>
    );
})

export default React.memo(Experience);