import React, { Component } from 'react';

class Boton extends Component {
  pulsar() {
    this.props.teclas(this.props.tecla);
  }

  render() {
    return (
      <div
        className="boton"
        onClick={() => {
          this.pulsar();
        }}
      >
        <h3>{this.props.tecla}</h3>
      </div>
    );
  }
}

export default Boton;
