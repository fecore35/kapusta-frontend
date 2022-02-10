import React, { Component } from 'react';

import Boton from './boton';

class Botones extends Component {
  render() {
    return (
      <div className="botones">
        <Boton tecla="7" teclas={this.props.teclas} />
        <Boton tecla="8" teclas={this.props.teclas} />
        <Boton tecla="9" teclas={this.props.teclas} />
        <Boton tecla="/" teclas={this.props.teclas} />
        <Boton tecla="4" teclas={this.props.teclas} />
        <Boton tecla="5" teclas={this.props.teclas} />
        <Boton tecla="6" teclas={this.props.teclas} />
        <Boton tecla="*" teclas={this.props.teclas} />
        <Boton tecla="1" teclas={this.props.teclas} />
        <Boton tecla="2" teclas={this.props.teclas} />
        <Boton tecla="3" teclas={this.props.teclas} />
        <Boton tecla="-" teclas={this.props.teclas} />
        <Boton tecla="C" teclas={this.props.teclas} />
        <Boton tecla="0" teclas={this.props.teclas} />
        <Boton tecla="=" teclas={this.props.teclas} />
        <Boton tecla="+" teclas={this.props.teclas} />
      </div>
    );
  }
}
export default Botones;
