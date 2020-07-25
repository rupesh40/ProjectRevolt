import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
//import data from './data.json';
import BookASlot from './BookASlot.jsx'

export default class MoreInfo extends React.Component {
    constructor(props){
        super(props)
        this.state={
            BookASlotShowHide:false
          }
    }

  handleModalShowHide() {
    this.props.handleModalShowHide1();
  }
  handleModalShowHideBook = () => {
    this.setState({ BookASlotShowHide: !this.state.BookASlotShowHide });
  };
  render() {
    //const { name,description} = this.props.data;
    const {BookASlotShowHide}=this.state;
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
            <Modal.Title>Station Info</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          {this.props.name}<hr/>
          {this.props.description}
          
          
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
              onClick={this.handleModalShowHideBook}
            >
              Book A Slot
            </Button>
          </Modal.Footer>
        </Modal>
        <div id="Page">
        {BookASlotShowHide && (
          <BookASlot
            BookASlotShowHide={BookASlotShowHide}
            handleModalShowHideBook={this.handleModalShowHideBook}
          />
        )}
      </div>
      </div>
    );
  }
}
