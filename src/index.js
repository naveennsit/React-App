import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from "./reducers";


const store = createStore(reducers, composeWithDevTools(
    // other store enhancers if any
));


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
