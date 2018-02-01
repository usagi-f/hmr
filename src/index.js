// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import Hello from './components/hello';

// class App extends Component {
//     constructor() {
//         super();
//         this.handleChange = this.handleChange.bind(this);
//         this.state = {
//             flag: false
//         }
//     }
//     handleChange() {
//         this.setState({
//             flag: !this.state.flag
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleChange}>Switch Flag</button>
//                 {`${this.state.flag}`}
//                 <Hello/>
//             </div>
//         )
//     }
// }

// render(
//     <App />,
//     document.querySelector('#root')
// );

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    const printMe = require('./components/print').default;

    btn.innerHTML = 'Click me';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
}

let element = component();
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./components/print.js', () => {
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}