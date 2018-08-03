import  {ListReducer}from './list.reducers';
import {combineReducers}  from 'redux';


const reducers = combineReducers({
    listReducer :ListReducer
});


export default reducers;