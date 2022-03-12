/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import './Header.scss';
import { connect } from 'react-redux';
class Header extends Component {

  render() {
    console.log("heyy", this.props.active);
    let loginComp;
    let { active, auth } = this.props;
      if(!auth){
        loginComp = <a className='login' href='/auth/google'> <img src='/images/google.png' /> Sign in </a>
      }else{
        loginComp = <><a className='login' href='/api/logout' > Hi {this.props.auth},  Logout </a> </>
      }return (
        <div className="header" >
          <div className={active==="intro" ? "navbar" : "navbar active-navbar"}>
            <a onClick={() => this.props.scrollTo(1)}> Home </a>
            <a className={active==="about" ? "active-item" : ""} onClick={() => this.props.scrollTo(2)}> About </a>
            <a className={active==="exp" ? "active-item" : ""}onClick={() => this.props.scrollTo(3)}> Experience </a>
            <a className={active==="skill" ? "active-item" : ""}onClick={() => this.props.scrollTo(4)}> Skills </a>
            <a className={active==="contact" ? "active-item" : ""}onClick={() => this.props.scrollTo(5)} > Contact </a>
            <a href='/api/download'> Download Resume</a>
            {loginComp}
          </div>
        </div>
      )
  }
}
const mapStateToProps = ({ auth }) => {
  return { auth }
}
export default connect(mapStateToProps)(Header);