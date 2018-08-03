import React, {Component} from 'react';
import {connect} from 'react-redux';

import ListComponent from "./components/list/list.component";
import Login from "./components/login/login.component";
import ToolbarComponent from "./components/toolbar/toolbar.component";
import {addItemInList} from './reducers/list.actions'

import './App.css';

class App extends Component {

    constructor() {
        super();
        this.addButtonClickHandler = this.addButtonClickHandler.bind(this);

        this.state = {
            names: []
        }
    }

    addButtonClickHandler(val) {
        this.props.addItemInList(val);
    }

    render() {
        return (
            <div className="App">
                <Login/>
                <ToolbarComponent addEventHandler={this.addButtonClickHandler}/>
                <ListComponent names={this.props.names}/>
            </div>
        );
    }
}


function mapStateToProps(state) {
    console.log(state);
    return {
        names: state.listReducer.items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addItemInList: (item) => {
            dispatch(addItemInList(item))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);



