import React from "react";
import loginImg from "./log.png";
import {Link} from 'react-router'
export  class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  change=()=>{
    this.props.check();
}
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
      <br/><br/><br/><br/><br/><br/>
        <div className="header">Login</div>
        <div className="content">
        
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" onClick={this.change} className="btn1" >
             Login
          </button>
        </div>
      </div>
    );
  }
}
