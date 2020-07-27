import React from "react";
//import { Link } from "react-router-dom";
//import "./Styling/PlanTrip.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default class BookASlot extends React.Component {
  handleModalShowHide() {
    this.props.handleModalShowHideBook();
  }

  render() {
    return (
      <div>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          left-top
          style={{
            overflow: "auto",
            maxHeight: "100%",
            fontSize: "20px",
            marginTop: "0px",
            maxWidth: "200%",
          }}
          show={this.props.BookASlotShowHide}
          className="bg-transparent  d-inline-block "
        >
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>Book A Slot</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="form-group">
              <label
                htmlFor="password"
                style={{ color: "Blue", fontSize: "20px" }}
              >
                Starting Time
              </label>
              <input
                type="text"
                name="password"
                placeholder="Station Number"
                className="form-control form-control-sm validate"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="password"
                style={{ color: "Blue", fontSize: "20px" }}
              >
                Ending Time
              </label>
              <input
                type="text"
                name="password"
                placeholder="Station Number"
                className="form-control form-control-sm validate"
              />
            </div>

            {this.props.chargingTypes.map((item, i) => {
              return (
                <div key={i} style={{fontSize:'20px'}}>
                  <input type="checkbox" class="custom-control-input" />
                  
                    {item.name}
                  
                </div>
              );
            })}
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
      </div>
    );
  }
}
