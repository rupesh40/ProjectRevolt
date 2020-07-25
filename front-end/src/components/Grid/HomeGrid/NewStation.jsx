import React from "react";
//import { Link } from "react-router-dom";
import "./Styling/PlanTrip.css";
//import ListItems from './ListItems.jsx'
import loginImg from "../../UI/download.jpg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddNewStation from './AddNewStation.jsx'
import {register,geom} from "../../services/gridStation"
export default class AddStation extends React.Component {
  state = {
    items:[],
    currentItem:{
      text:'',
      key:''
    },
    email:"",
    name:"",
    phoneNumber:"",
    stationNo:"",
    workTime:"",
    address:"",
    noOfPoint:""
  }
  handleModalShowHide() {
    this.props.handleModalShowHide1();
  }
  handleInput=(e)=>{
    
    this.setState({
      currentItem:{
        text: 'input',
        key: Date.now()
      }
    })
    console.log(this.state.currentItem.text)
  }
   onSubmit = async() =>{
    const addCoordinates = await geom(this.state.address)
    console.log(addCoordinates)
    
    const data = {
      Name:this.state.name,
      email:this.state.email,
      phoneNumber:this.state.phoneNumber,
      workingTime:this.state.workTime,
      stationAddress:addCoordinates,
      stationNumber:this.state.stationNo,
      NoOfChargingPoint:this.state.noOfPoint
    }
    console.log(data)
   register(data)
  }

  render() {
    return (
      <div>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          style={{
            
            overflow: "auto",
            maxHeight: "100%",
            fontSize: "12px",
            marginTop: "0px",
            maxWidth:'100%'
          }}
          show={this.props.showHide1}
          className="bg-transparent  d-inline-block "
        >
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>Add Station</Modal.Title>
          </Modal.Header>

          <Modal.Body>
      <div className="base-container" ref={this.props.containerRef}>
      <div className="header">Add Your Station Information</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Station Name</label>
            <input
              type="text"
              name="username"
              placeholder="Station Name"
              className="form-control form-control-sm validate"
              onChange={e=>{this.setState({name:e.target.value})}}
              value={this.state.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Station Email</label>
            <input
              type="text"
              name="email"
              placeholder="Station Email"
              className="form-control form-control-sm validate"
              onChange={e=>{this.setState({email:e.target.value})}}
              value={this.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Station Phone Number</label>
            <input
              type="text"
              name="password"
              placeholder="Station Phone Number"
              className="form-control form-control-sm validate"
              onChange={e=>{this.setState({phoneNumber:e.target.value})}}
              value={this.state.phoneNumber}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Working Time</label>
            <input
              type="text"
              name="password"
              placeholder="Working Time"
              className="form-control form-control-sm validate"
              onChange={e=>{this.setState({workTime:e.target.value})}}
              value={this.state.workTime}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Station Address</label>
            <input
              type="text"
              name="password"
              placeholder="Station Address"
              className="form-control form-control-sm validate"
              onChange={e=>{this.setState({address:e.target.value})}}
              value={this.state.address}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Station Number</label>
            <input
              type="text"
              name="password"
              placeholder="Station Number"
              className="form-control form-control-sm validate"
              onChange={e=>{this.setState({stationNo:e.target.value})}}
              value={this.state.stationNo}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Number of Charging Points</label>
            <input
              type="text"
              name="password"
              placeholder="Number of Charging Points"
              className="form-control form-control-sm validate"
              onChange={e=>{this.setState({noOfPoint:e.target.value})}}
              value={this.state.noO}
            />
          </div>
        </div>

        
        
      </div>
    </div>
      
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.handleModalShowHide()}
            >
              Close
            </Button>

            <Button
              variant="primary"
              onClick={() => {this.onSubmit();this.handleInput()}}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <AddNewStation handleInput={this.handleInput} 
       text={this.state.currentItem.text} items={this.state.items} />
        {/*<ListItems handleInput={this.handleInput}*/ }
       text={this.state.currentItem.text} items={this.state.items} />
     
        </div>
    );
  }
}
