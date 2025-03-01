import { combineReducers, legacy_createStore } from "redux";
import counterReducer from "./counter/counterReducer";

const rootReducer = combineReducers({
    counter : counterReducer
})

const store = legacy_createStore(rootReducer)
export default store