import React, { Component } from 'react';
import './Experience.scss';
import HorizontalTimeline from 'react-horizontal-timeline';

const VALUES = ["2016", "2018", "2020"];
class Experience extends Component {
  constructor(props) {
    super(props)
    this.state = { value: 0, previous: 0 };
  }
  render() {
    return (
      <div className='jobs'>
        <div id='experience' className='section-heading'> MY EXPERIENCES
        </div>
        <div className='exp-timeline'>
          <div style={{ width: '60%', height: '100px', margin: '0 auto' }}>
            <HorizontalTimeline
              index={this.state.value}
              indexClick={(index) => {
                this.setState({ value: index, previous: this.state.value });
              }}
              linePadding={200}
              minEventPadding={100}
              values={VALUES}
              isOpenBeginning={true}
            />
          </div>
          <div className='text-center'>
            <div className='exp'>
              <div className='title'>{this.props.jobs[this.state.value].name}</div>
              <div className='desg'>{this.props.jobs[this.state.value].position}</div>
              <ul>
                {
                  this.props.jobs[this.state.value].responsibilities.map((e, i) => <li key={"skills" + i}>{e}</li>)
                }

              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Experience;