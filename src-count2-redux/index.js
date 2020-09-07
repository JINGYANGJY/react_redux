import React from "react";
import ReactDOM from 'react-dom';

import store from './redux/store'
import App from "./components/app";


function rende() {
    ReactDOM.render(<App store={store}/>, document.getElementById('root'))
}
// initial render
rende()

//subscribe listening(update store's state, render)
store.subscribe(rende)