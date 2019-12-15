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
        <div className="logo">
          Amitava
        </div>
        <ul className="right">
        {loginComp}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = ({auth}) => {
  return {auth}
}
export default connect(mapStateToProps)(Header);