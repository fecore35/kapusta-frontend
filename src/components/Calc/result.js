import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <div className="result">
        <h3>{this.props.result}</h3>
      </div>
    );
  }
}
export default Result;
