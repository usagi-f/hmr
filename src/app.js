import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo, requestFetch } from './actions';
import Hello from './components/hello';

class AppContainer extends Component {
    constructor(props) {
        super(props);
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
                <Hello/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { state }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addTodo, requestFetch }, dispatch);
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)

export default App;
