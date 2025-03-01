import { combineReducers, legacy_createStore } from "redux";
import counterReducer from "./counter/counterReducer";
import calculatorReducer from "./calculator/calculatorReducer";

const rootReducer = combineReducers({
    counter : counterReducer,
    calculator: calculatorReducer,
})

const store = legacy_createStore(rootReducer)
export default store