import React from "react";
import loginImg from "../Styling/log.png";
import moduleName from '../Styling/Home.css'
import "../Styling/style.scss";
import "../Styling/App.scss";
export class RegisterG extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>

        <div className="header">Grid Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg}/>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" className="form-control form-control-sm validate" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" className="form-control form-control-sm validate"  />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" className="form-control form-control-sm validate" />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" placeholder="password" className="form-control form-control-sm validate" />
          </div>
          <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="text" name="password" placeholder="password" className="form-control form-control-sm validate" />
        </div>
        <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="text" name="password" placeholder="password" className="form-control form-control-sm validate" />
      </div>
            
          </div>
        
        <div className="footer">
          <button type="button" className="btn1">
            Register
          </button>
        </div>
        </div>
      </div>
    );
  }
}
