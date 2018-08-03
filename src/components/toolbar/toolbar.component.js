import React, {Component} from 'react';
import PropTypes from 'prop-types';

/* css toolbar */
import  './toolbar.css';
class ToolbarComponent extends Component {
    constructor(){
        super();
        this.state = {
            inputVal :''
        }
    }

    onInputChange (event){
      console.log(event.target.value);
      this.setState({
          inputVal : event.target.value
      })
    }
    addItemHandler(){
        this.props.addEventHandler(this.state.inputVal);
        this.setState({
            inputVal:''
        })
    }
    render() {
        return (
            <div className="block__boolBar">
                <input type="text" onChange={(e) =>this.onInputChange(e)} value={this.state.inputVal}/>
                <button onClick={()=> this.addItemHandler()} className="block__boolBar_element_addItem">Add Items</button>
            </div>
        );
    }
}

ToolbarComponent.propTypes = {
    addEventHandler :PropTypes.func

};

export default ToolbarComponent;
