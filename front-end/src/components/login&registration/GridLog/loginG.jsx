import React from "react";
import loginImg from "../Styling/log.png";
import {Link} from 'react-router-dom';
import "../Styling/style.scss";
import "../Styling/App.scss";
export  class LoginG extends React.Component {
  constructor(props) {
    super(props);
  }
  change=()=>{
    this.props.check();
}
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
     
        <div className="header">Grid Login</div>
        <div className="content">
        
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" className="form-control form-control-sm validate" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" className="form-control form-control-sm validate" />
            </div>
          </div>
       
        <div className="footer">
          <button type="button" onClick={this.change} className="btn1" >
          <Link to="/DashNavigationGrid" style={{color:'white'}}> Login</Link>
          </button>
          <br/><br/>
          <p >
                    Forgot <a href="#">password?</a>
                </p>
        </div>
      </div>
      </div>
    );
  }
}
