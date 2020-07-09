import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            
            <TextField
              placeholder="Enter Location Name"
              label="Location Name"
              onChange={handleChange('Location')}
              defaultValue={values.Location}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Station Name"
              label="Station Name"
              onChange={handleChange('Station')}
              defaultValue={values.station}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Add Plug Type"
              label="Plug Type"
              onChange={handleChange('plug')}
              defaultValue={values.plug}
              margin="normal"
              fullWidth
            />
            <br />

            <TextField
              placeholder="Add Total Hours"
              label="Hours"
              onChange={handleChange('hours')}
              defaultValue={values.hours}
              margin="normal"
              fullWidth
            />
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
