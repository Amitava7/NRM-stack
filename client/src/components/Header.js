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
        <div className="name">
          Amitava Mozumder
        </div>
        <div className="navbar">
        <a href='/auth/google'> Home </a>
        <a href='/auth/google'> About </a>
        <a href='/auth/google'> Contact </a>
        <a href='/auth/google'> Donate </a>
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