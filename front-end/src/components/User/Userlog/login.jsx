import React from "react";
import loginImg from "../../UI/log.png";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
//import "../Styling/style.scss";
//import "../Styling/App.scss";
import "bootstrap/dist/css/bootstrap.css";
import login from "../../services/user";
import auth from "../../services/auth";

class Login extends React.Component {
  userData;
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  change = () => {
    this.props.check();
  };
  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("user"));

    if (localStorage.getItem("user")) {
      this.setState({
        email: this.userData.email,
      });
    } else {
      this.setState({
        email: "",
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("user", JSON.stringify(nextState));
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    let res = await login(data);
    if (res) {
      console.log(res);
      auth.login();
      this.props.history.push("/DashNavigation");
    }
  };
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <form  /*onSubmit={this.onSubmit}*/>
          <div className="header">User Login</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>

            <div className="form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="form-control form-control-sm validate"
                  onChange={this.changeEmail}
                  value={this.state.email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="form-control form-control-sm validate"
                  onChange={this.changePassword}
                  value={this.state.password}
                />
              </div>
            </div>

            <div className="footer">
              *<Link to="/DashNavigation" style={{ color: "white" }}>
                {" "} 
                <button type="submit" onClick={this.change} className="btn1">
                Login{" "}
                </button>
              </Link>
              <br />
              <br />
              <p>
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
