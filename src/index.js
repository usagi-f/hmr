import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './components/hello';

class App extends Component {
    render() {
        return (
            <div>
                <Hello/>
            </div>
        )
    }
}

render(
    <App />,
    document.querySelector('#root')
);
