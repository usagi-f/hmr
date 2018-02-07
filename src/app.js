import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './actions';

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
                <button onClick={() => this.props.addTodo('hogehoge')}>Add ToDo</button>
                {`${JSON.stringify(this.props.state)}`}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { state }
}
console.log(Actions)
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ Actions.addTodo }, dispatch);
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)

export default App;
