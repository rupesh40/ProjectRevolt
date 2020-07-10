import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
export class Success extends Component {
  state={
    setModelShow:true
  }
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  Close=()=>{

    this.setState({setModelShow:false});
  } 
  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h1>Thank You For Booking Your Slot</h1>
            <p>For any query contact us on '123456'</p>
            <Modal.Footer>
            <Button onClick={this.Close}>Close</Button>
          </Modal.Footer>
          </Dialog>
          
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
