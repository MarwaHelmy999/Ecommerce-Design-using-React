import { combineReducers } from "redux";
import Reducer1 from "./Reducer";
import Reducer2 from "./Reducer2";

const reducers = combineReducers({
    red1: Reducer1,
    red2: Reducer2
})

export default reducers;
