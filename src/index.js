import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './components/hello';

class App extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            flag: false
        }
    }
    handleChange() {
        this.setState({
            flag: !this.state.flag
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleChange}>Switch Flag</button>
                {`${this.state.flag}`}
                <Hello/>
            </div>
        )
    }
}

render(
    <App />,
    document.querySelector('#root')
);
