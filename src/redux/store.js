import { combineReducers, legacy_createStore } from "redux";
import counterReducer from "./counter/counterReducer";
import calculatorReducer from "./calculator/calculatorReducer";
import todoReducer from "./todo/todoReducer";

const rootReducer = combineReducers({
    counter : counterReducer,
    calculator: calculatorReducer,
    todo: todoReducer,
})

const store = legacy_createStore(rootReducer)
export default store