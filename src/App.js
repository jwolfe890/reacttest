import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/successActions';
import Experiment from './Experiment'
import ReactGA from 'react-ga';
import { initGA, logPageView } from './analytics';
import './App.css'
import axios from 'axios'

export class App extends Component {


  state = {
    responseValue: ""
  }

  opener = () => {
    const myWindow = window.open("https://www.espn.com", "MsgWindow", "width=200,height=100");

    var timer = setInterval(function() { 
        if(myWindow.closed) {
            clearInterval(timer);
            alert('closed');
        }
    }, 1000);
  }

  componentDidMount() {
    axios.get('http://localhost:8080/greeting')
    .then((response) => {
      this.setState({responseValue: response.data})
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  // componentDidMount() {
  //   axios.post('http://localhost:8080/postMethod')
  //   .then((response) => {
  //     this.setState({responseValue: response.data})
  //   })
  //   .catch((error)=>{
  //     console.log(error);
  //   });
  // }

  render() {  

    return (
      <div>
        {this.state.responseValue}
          {/* <button onClick={this.fetchValue}>Fetch</button> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    questions: state.questions
  })
}

export default connect(
  mapStateToProps, 
  { successFinder: actions.successIndicator }
)(App);

