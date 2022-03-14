import {combineReducers} from "redux";
import {tabReducer} from "./tabReducer";

const reducers = combineReducers({
    getTab: tabReducer,
})

export default reducers