import React from "react";
//import { Link } from "react-router-dom";
import "./Styling/PlanTrip.css";
import ListItems from './ListItems.jsx'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddStation from './NewStation.jsx'
export default class AddNewStation extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      },
      showHide1:false
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: 'input',
        key: Date.now()
      }
    })
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(text,key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })

    
   
  }
  handleModalShowHide() {
    this.props.handleModalShowHide1();
  }
  handleModalShowHide1 = () => {
    this.setState({ showHide1: !this.state.showHide1 });
  };

  render() {
    const {showHide1}=this.state
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
          <Modal.Title><Button type="button" href="#Page"
          onClick={this.handleModalShowHide1}>Add Station</Button></Modal.Title>
          <Modal.Body>
          <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter task" value= {this.state.currentItem.text} ></input>
          <button type="submit" onclick={this.props.handleInput}>Referesh</button>
        </form>
        <p>{this.state.items.text}</p>
        
          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
        
           
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
              onClick={() => this.handleModalShowHide()}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <div id="Page">
      {showHide1 && (
        <AddStation
          showHide1={showHide1}
          handleModalShowHide1={this.handleModalShowHide1}
        />
      )}
    </div>
      </div>
    );
  }
}
