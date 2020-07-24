import React from "react";
//import { Link } from "react-router-dom";
import uuid from "uuid";
import "./Styling/PlanTrip.css";
import ListItems from "./ListItems.jsx";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddStation from "./NewStation.jsx";
import PropTypes from 'prop-types';
export default class AddNewStation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHide1: false,
      list:['a','b']
    };
  }

  handleModalShowHide() {
    this.props.handleModalShowHide1();
  }
  handleModalShowHide1 = () => {
    this.setState({ showHide1: !this.state.showHide1 });
  };

  render() {
    const { showHide1 } = this.state;
    const {list}=this.props
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
            maxWidth: "100%",
          }}
          show={this.props.showHide1}
          className="bg-transparent  d-inline-block "
        >
          <Modal.Title>
            <Button
              type="button"
              href="#Page"
              onClick={this.handleModalShowHide1}
            >
              Add Station
            </Button>
          </Modal.Title>
          <Modal.Body>
          <input type="text" placeholder="AddTask..." ref={this.props.input}/>
          <button onClick={this.props.addTask} className="button" >Add</button>
              <ol>
                  {
                      this.state.list.map((item,index)=>
                      {
                          return(<li key={item.id}> {item.value}
                          <button className="button" type="button" value="delete" data-key={index} onClick={this.props.deleteItem}>Delete</button></li>)
                      })
                  } 
              </ol>
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
