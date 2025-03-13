// import {createStore , applyMiddleware , compose } from "redux";
// // import Reducers from "./Reducer";
// import { thunk } from 'redux-thunk';
// import reducers from "./Reducer";
// const toEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
// const store = createStore(reducers , toEnhancer(applyMiddleware(thunk)))

import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "./Reducer/Slice";

// export default store;

const store = configureStore({
    reducer:{
        counter:CounterSlice
    }
})
export default store;