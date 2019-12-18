import React,{ Component } from 'react';

class Education extends Component {
  render() {
    let {education}= this.props;
    return(
      <>
      <div className='section-heading'> MY EDUCATION
      </div>
      <div className='section-desc'> What I\'ve learned
      </div>
      
      </>
    );
  }
}

export default Education;