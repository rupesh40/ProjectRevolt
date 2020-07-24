import React from "react";
//import { Link } from "react-router-dom";
import "./Styling/PlanTrip.css";
import uuid from "uuid";
import ListItems from './ListItems.jsx'
import loginImg from "../../UI/download.jpg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddNewStation from './AddNewStation.jsx'
export default class AddStation extends React.Component {
  constructor(props) {
    super(props)

   this.input=React.createRef()
   this.state={
       list:['a','b'],    
      }     
}
 
  handleModalShowHide() {
    this.props.handleModalShowHide1();
  }
  addTask=()=>{
    console.log(this.state.list)
    const Items={
            id:uuid.v4(),
            value:'abc',
            Date: new Date().toUTCString()
        };
    
        if(localStorage.getItem('list')==null){
            const list=[]
            list.push(Items);
            localStorage.setItem("list",JSON.stringify(list))
        }
        else{
            const list=JSON.parse(localStorage.getItem('list'))
            list.push(Items)
            localStorage.setItem("list",JSON.stringify(list))
        }
        this.setState({
            list:JSON.parse(localStorage.getItem('list'))
        });
    }
    
componentDidMount() {
  const list = window.localStorage.getItem('list');
  const parsedList = JSON.parse(list);
  if(list == null){
      return false
  }
  else{
      this.setState({
          list: parsedList,
      })
      console.log(this.state.list);
  }
}

deleteItem=(event)=> {
    
  let index = event.target.getAttribute('data-key')
  let listValue=JSON.parse(localStorage.getItem('list'));
  listValue.splice(index,1)
  this.setState({list:listValue});
  localStorage.setItem('list',JSON.stringify(listValue))
}

    
 render() {
   const {list}=this.state
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
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Station Email</label>
            <input
              type="text"
              name="email"
              placeholder="Station Email"
              className="form-control form-control-sm validate"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Station Phone Number</label>
            <input
              type="text"
              name="password"
              placeholder="Station Phone Number"
              className="form-control form-control-sm validate"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Working Time</label>
            <input
              type="text"
              name="password"
              placeholder="Working Time"
              className="form-control form-control-sm validate"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Station Address</label>
            <input
              type="text"
              name="password"
              placeholder="Station Address"
              className="form-control form-control-sm validate"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Station Number</label>
            <input
              type="text"
              name="password"
              placeholder="Station Number"
              className="form-control form-control-sm validate"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Number of Charging Points</label>
            <input
              type="text"
              name="password"
              placeholder="Number of Charging Points"
              className="form-control form-control-sm validate"
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
              onClick={this.addTask}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <AddNewStation addTask={this.addTask} list={this.state.list}
         input={this.input} index={this.props.index} deleteItem={this.deleteItem}/>
        </div>
    );
  }
}
