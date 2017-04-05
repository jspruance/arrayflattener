import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Objectoutput from './components/objectoutput';
import './App.css';

// create a placeholder for the output array
var outputFlatArray = "[]";

// array flattening algorithm
var flatten = function(inputArray) {
  for (var i = 0, len = inputArray.length; i < len; i++) {
    if (Array.isArray(inputArray[i])) {
      flatten(inputArray[i]);
    } else {
      outputFlatArray.push(inputArray[i]);
    }
  }
  return "[" + outputFlatArray.toString() + "]";
}

// input placeholder text / value
var textinputplaceholder = "[[1,2,[3]],4, 5, [6, [7, [8, 9, 10]]]]";

const styles = {
  container: {
    paddingTop: 0
  },
  contentcontainer: {
    paddingLeft: 50,
    marginTop: 20
  },
  inputcontainer: {
    float: 'left',
    width: '45%'
  },
  outputcontainer: {
    marginLeft: 35,
    float: 'left',
    color: '#4CC552',
    fontSize: 15
  },
  button: {
    marginTop: 20
  },
  block: {
    maxWidth: 250,
    float: 'left'
  },
  textinput:{
    fontSize: 15
  },
  toggle: {
    marginBottom: 16,
    marginTop: 23,
    marginLeft: 23,
    fontSize: 14
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  },
  labelStyle: {
    color: 'red',
  },
  inputsublabel: {
    color: '#555'
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
      displayarray: "",
      inputvalue: textinputplaceholder,
      textinputplaceholder: textinputplaceholder
    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({inputvalue: event.target.value});
  }

  // 'PROCESS' button event handler
  handleTouchTap = () => {
    let inputArray = JSON.parse(this.state.inputvalue);
    let returnedarray = [];
    //empty object before starting
    outputFlatArray = [];
    returnedarray = flatten(inputArray);


    this.setState({
      displayarray: returnedarray,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <AppBar
            title="Array Flattener with ReactJS & Material UI"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        <div style={styles.contentcontainer}>
          <div style={styles.inputcontainer}>
            <h2 style={styles.inputsublabel}>Array Input:</h2>
            <TextField
              name="arrayinput"
              hintText="Enter array here"
              multiLine={true}
              rows={10}
              rowsMax={64}
              fullWidth={true}
              value={this.state.inputvalue}
              onChange={this.handleChange}
              style={styles.textinput}
              placeholder={this.state.textinputplaceholder}
            /><br />
              <div style={styles.block}>
                <RaisedButton
                  label="Process"
                  secondary={true}
                  onTouchTap={this.handleTouchTap}
                  style={styles.button}
                />
              </div>
            </div>
            <div style={styles.outputcontainer}>
              <h2>Flattened output:</h2>
              <Objectoutput
                displayarray={this.state.displayarray}
              />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
