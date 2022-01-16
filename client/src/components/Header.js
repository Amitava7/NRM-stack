import React,{ Component } from 'react'
import './Header.scss';
import {connect} from 'react-redux';
class Header extends Component {

  render() {
    let loginComp;
    if(!this.props.auth)
    loginComp = <a className='login' href='/auth/google'> <img src='/images/google.png'/> Sign in </a>
    else
    loginComp = <><a className='login' href='/api/logout' > Hi {this.props.auth.name},  Logout </a> </>

    return(
      <div className="header">
        <div className="navbar">
          <a onClick={() => this.props.scrollTo('home')}> Home </a>
          <a onClick={() => this.props.scrollTo('about')}> About </a>
          <a onClick={() => this.props.scrollTo('experience')}> Experience </a>
          <a onClick={() => this.props.scrollTo('skills')}> Skills </a>
          <a onClick={() => this.props.scrollTo('contact')}href='/#'> Contact </a>
          <a href='/api/download'> Download Resume</a>
        {loginComp}
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({auth}) => {
  return {auth}
}
export default connect(mapStateToProps)(Header);