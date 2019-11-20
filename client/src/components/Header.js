import React,{ Component } from 'react'
import './Header.scss';
import {connect} from 'react-redux';
class Header extends Component {
  render() {
    console.log(this.props);
    return(
      <div className="header">
        <div className="logo">
          Amitava
        </div>
        <ul className="right">
        <li> <a href='/auth/google'> Login with google </a></li>
        </ul>
      </div>
    )
  }
}
const mapStateToProps = ({auth}) => {
  return {auth}
}
export default connect(mapStateToProps)(Header);