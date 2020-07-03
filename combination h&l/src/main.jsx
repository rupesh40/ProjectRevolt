import React, { Component } from 'react'
import img from './bg.jpg'
import './nav.css';
import './Home.css'
import Nav1 from './nav.jsx'

export default class Main extends React.Component{
render(){
    return(

<div className="cara">
<Nav1/>
<br /><br /><br /><br /><br /><br />
<h2>Welcome to <span className="name">revolt</span></h2>
<p>lets Explore</p>
<br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br />
<section className="bg-light page-section" id="team">
<div className="container">
  <div className="row">
    <div className="col-lg-12 text-center">
      <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
      <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
    </div>
  </div>
  <div className="row">
    <div className="col-sm-4">
      <div className="team-member">
        <img className="mx-auto rounded-circle" src="img/team/1.jpg" alt=""/>
        <h4>Tohel chini</h4>
        <p className="text-muted">Tohel chini</p>
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <a href="#something">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#something">
              <i className="fa fa-facebook-f"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#something">
              <i className="fa fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="team-member">
        <img className="mx-auto rounded-circle" src="img/team/2.jpg" alt=""/>
        <h4>Rupesh Pund</h4>
        <p className="text-muted">Rupesh Pund</p>
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <a href="#something">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#something">
              <i className="fa fa-facebook-f"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#something">
              <i className="fa fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="team-member">
        <img className="mx-auto rounded-circle" src="img/team/3.jpg" alt=""/>
        <h4>Usama Shaikh</h4>
        <p className="text-muted">Usama Shaikh</p>
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <a href="#something">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#something">
              <i className="fa fa-facebook-f"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#something">
              <i className="fa fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-8 mx-auto text-center">
      <p className="large text-muted">Thank You</p>
    </div>
  </div>
</div>
</section>


<section className="py-5">
<div className="container">
  <div className="row">
    <div className="col-md-3 col-sm-6">
      <a href="#something">
        <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
      </a>
    </div>
    <div className="col-md-3 col-sm-6">
      <a href="#something">
        <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
      </a>
    </div>
    <div className="col-md-3 col-sm-6">
      <a href="#something">
        <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
      </a>
    </div>
    <div className="col-md-3 col-sm-6">
      <a href="#something">
        <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
      </a>
    </div>
  </div>
</div>
</section>




<footer className="footer">
<div className="container">
  <div className="row align-items-center">
    <div className="col-md-4">
      <span className="copyright">Copyright &copy; Your Website 2019</span>
    </div>
    <div className="col-md-4">
      <ul className="list-inline social-buttons">
        <li className="list-inline-item">
          <a href="#something">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#something">
            <i className="fa fa-facebook-f"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#something">
            <i className="fa fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
    </div>
    <div className="col-md-4">
      <ul className="list-inline quicklinks">
        <li className="list-inline-item">
          <a href="#something">Privacy Policy</a>
        </li>
        <li className="list-inline-item">
          <a href="#something">Terms of Use</a>
        </li>
      </ul>
    </div>
  </div>
</div>
</footer>

</div>
    );
}
}