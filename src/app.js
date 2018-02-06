import React, { Component } from 'react';
import Hello from './components/hello';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            flag: false,
            todos: this.props.state.todos
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
                {`${JSON.stringify(this.state.todos)}`}
                <Hello/>
            </div>
        )
    }
}

export default App;
