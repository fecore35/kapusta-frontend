// import React, { Component } from 'react';

import { ReactCalculator } from 'simple-react-calculator';

const Calc = () => {
  return <ReactCalculator />;
};

// import Result from './result';
// import Botones from './botones';

// class Calc extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       result: 0,
//     };
//   }

//   carcular = [];

//   numero = termino => {
//     if (
//       (termino === '-') |
//       (termino === '+') |
//       (termino === '*') |
//       (termino === '/')
//     ) {
//       this.carcular.push(this.state.result);
//       this.carcular.push(termino);
//       this.setState(() => ({
//         result: '',
//       }));
//     }
//     if (termino === '=') {
//       let result = this.state.reslt;
//       this.carcular.push(this.state.result.substr(1, 2));
//       if (this.carcular[1] === '-') {
//         let carculo = parseInt(this.carcular[0]) - parseInt(this.carcular[2]);
//         this.setState(() => ({
//           result: carculo,
//         }));
//         this.carcular.splice(0);
//       }
//       if (this.carcular[1] === '+') {
//         let carculo = parseInt(this.carcular[0]) + parseInt(this.carcular[2]);
//         this.setState(() => ({
//           result: carculo,
//         }));
//         this.carcular.splice(0);
//       }
//       if (this.carcular[1] === '/') {
//         let carculo = parseInt(this.carcular[0]) / parseInt(this.carcular[2]);
//         this.setState(() => ({
//           result: carculo,
//         }));
//         this.carcular.splice(0);
//       }
//       if (this.carcular[1] === '*') {
//         let carculo = parseInt(this.carcular[0]) * parseInt(this.carcular[2]);
//         this.setState(() => ({
//           result: carculo,
//         }));
//         this.carcular.splice(0);
//       }
//     }

//     if (this.state.result === 0) {
//       this.setState(prevState => ({
//         result: '',
//       }));
//       if (termino === '=') {
//         this.setState(prevState => ({
//           result: prevState.result,
//         }));
//       } else {
//         this.setState(prevState => ({
//           result: prevState.result + termino,
//         }));
//       }
//     } else {
//       if (termino === '=') {
//         this.setState(prevState => ({
//           result: prevState.result,
//         }));
//       } else {
//         this.setState(prevState => ({
//           result: prevState.result + termino,
//         }));
//       }
//       if (termino === 'C') {
//         this.setState(() => ({
//           result: 0,
//         }));
//         this.carcular.splice(0);
//       }
//     }
//   };

//   render() {
//     return (
//       <div className="calc">
//         <Result result={this.state.result} />
//         <Botones teclas={this.numero} />
//       </div>
//     );
//   }
// }
export default Calc;
