import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navigation from '../Navigation.jsx'
import "./Styling/style.scss";
import "./Styling/Inter.css";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// import moduleName from './Log.jsx'

function Interface(props) {
    return (
      
      <Modal  Style={{backdropFilter:'blur(10px)',maxHeight:'100%'}}
        className="bg-transparent d-inline-flex  will "
        
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
              >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login/Register
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
    
            <h2 className="Interface" >Welcome to <span className="name">revolt</span></h2>
            <button className="button"><Link to="/loginU" style={{color:'white'}} >Login as User</Link></button>
            <button className="button "><Link to="/loginG" style={{color:'white'}} >Login as Grid owner</Link></button>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
            
            )
    }
    
export default Interface;