import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navigation from './Navigation.jsx'
import "./Styling/style.scss";
import "./Styling/Inter.css";
export default class Interface extends React.Component{
    render(){
        return(
            <div className="blur" >
            <Navigation/>
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br />
            <div className="Interface">
            <h2 className="Interface" >Welcome to <span className="name">revolt</span></h2>
            <button className="button"><Link to="/loginU" style={{color:'white'}} >Login as User</Link></button>
            <button className="button"><Link to="/loginG" style={{color:'white'}} >Login as Grid owner</Link></button>
            </div>
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br />
            </div>
            )
    }
}