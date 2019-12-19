import React,{ Component } from 'react'
import './Header.scss';
import {connect} from 'react-redux';
class Header extends Component {

  render() {
    let loginComp;
    console.log ('this.props.auth',this.props.auth)
    if(!this.props.auth)
      loginComp = <a className='login' href='/auth/google'> <img src='/images/google.png'/> Sign in </a>
    else
      loginComp = <a className='login' href='/api/logout' > Hi {this.props.auth.name} Logout </a>

    return(
      <div className="header">
        <div className="page-name">
          Amitava Mozumder
        </div>
        <div className="navbar">
        <a href='/#root'> Home </a>
        <a href='/#about'> About </a>
        <a href='/#experience'> Experience </a>
        <a href='/#skills'> Skills </a>
        <a href='/#contact'> Contact </a>
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