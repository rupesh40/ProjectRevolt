import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Nav1 extends React.Component{

render(){
return(

<nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">REVOLT</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
          <Link to="/" style={{color:'white'}} className="nav-link js-scroll-trigger">Home</Link>  

          </li>
          <li className="nav-item" >
          <Link to="/login" style={{color:'white'}} className="nav-link js-scroll-trigger">login</Link>  
          </li>
          <li className="nav-item">
          <Link to="/login" style={{color:'white'}} className="nav-link js-scroll-trigger">About</Link>
          </li>
          <li className="nav-item">
          <Link to="/login" style={{color:'white'}}  className="nav-link js-scroll-trigger">Services</Link>
          </li>
          <li className="nav-item">
          <Link to="/login" style={{color:'white'}} className="nav-link js-scroll-trigger">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
}
}