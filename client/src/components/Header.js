import React,{ Component } from 'react'
import './Header.scss';
import {connect} from 'react-redux';
class Header extends Component {

  render() {
    console.log(this.props);
    let loginComp;

    if(!this.props.auth)
      loginComp = <li> <a href='/auth/google'> Login with google </a></li>
    else
      loginComp = <li> Hi {this.props.auth.name} <a href='/api/logout'> Logout </a> </li>

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
        <a class='login' herf='/auth/google'> <img src='/images/google.png'/> Sign in </a>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({auth}) => {
  return {auth}
}
export default connect(mapStateToProps)(Header);