import React, { Component } from 'react';
import './Experiment.css';
import ReactGA from 'react-ga';

class Experiment extends Component {


  state = {
    something: true,
  }

  shouldComponentUpdate = () => {
    return true
  }

  toggleSomething = () => {
    this.props.success()
  }

  someHandler = () => {
    this.setState({ something: !this.state.something})
  }

  printing = () => {
    window.print()
  }

  render() {

    let thing = null;
    if (this.state.something) { thing = "World" } ;

    return (
      <div className="Exp">
        <h1 className="hello" tabIndex="0">Hello</h1>
        {/* <button onClick={this.someHandler} className="accessible" /> */}
        <h1>{thing}</h1>
        <button onClick={this.printing} />
      </div>
    );
  }
}

export default Experiment;
